const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

let members = []; // list of members

// 회원 이메일 추가 엔드포인트
app.post('/api/register', (req,res) => {
    const {fullName, email} = req.body;
    if(fullName && email) {
        members.push({fullName, email});

        fs.writeFileSync ('db.json', JSON.stringify({members}, null, 2));
        return res.status(200).send("회원 가입이 완료되었습니다!")
    }
    return res.status(400).send("이름과 이메일이 필요합니다.");
});

// Nodemailer 설정
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'edun1440@gmail.com',
        pass: 'edunP@ssword'
    }
});

// 이메일 발송 함수
const sendNewsletter = () => {
    members.forEach(member => {
        const mailOptions = {
            from: 'edun1440@gmail.com',
            to: member.email,
            subject: 'Weekly IT Book Newsletter',
            text: '이번 주의 추천 IT 서적은 다음과 같습니다! \\n1. React.js \\n2. Node.js \\n...'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error sending mail', error);
            }
            console.log('Sent mail', info.response);
        })
    });
};

// 매주 월요일 오전 9시에 뉴스레터 발송
cron.schedule('0 9 0 * * 1', sendNewsletter);

// 서버 시작
app.listen(5000, () => {
    console.log('Server is running on port 5000');

    // 로컬에서만 실행
    fs.readFile('books.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading books.json:', err);
            return;
        }
        try {
            members = JSON.parse(data);
        } catch (error) {
            console.error('Error parsing books.json:', error);
        }
    });
})
