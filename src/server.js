const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const fs = require('fs');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

let members = []; // list of members

// 회원 이메일 추가 엔드포인트
app.post('/api/register', (req, res) => {
    const { fullName, email } = req.body;
    if (fullName && email) {
        members.push({ fullName, email });

        fs.writeFileSync('db.json', JSON.stringify({ members }, null, 2));
        return res.status(200).send("회원 가입이 완료되었습니다!");
    }
    return res.status(400).send("이름과 이메일이 필요합니다.");
});

// CMS에서 뉴스레터 데이터를 가져오는 함수
async function fetchNewsletterData() {
    const response = await axios.get('https://cms.edunNewsletter.com/newsletter');
    return response.data;
}

// HTML 콘텐츠를 생성하는 함수
function generateNewsletterContent(newsletterData) {
    return `
        <h1>${newsletterData.title}</h1>
        <p>${newsletterData.introduction}</p>
        <ul>
            ${newsletterData.items.map(item => `
                <li>
                    <h2>${item.heading}</h2>
                    <p>${item.description}</p>
                    <a href="${item.link}">자세히 보기</a>
                </li>
            `).join('')}
        </ul>
        <footer>
            <p>더 많은 정보는 <a href="${newsletterData.footerLink}">여기</a>를 참고하세요.</p>
        </footer>
    `;
}

// 이메일 발송 함수
async function sendNewsletter() {
    try {
        const newsletterData = await fetchNewsletterData();

        members.forEach(member => {
            const mailOptions = {
                from: 'edun1440@gmail.com',
                to: member.email,
                subject: newsletterData.subject,
                html: generateNewsletterContent(newsletterData),
            };

            // 이메일 전송 코드를 추가해야 합니다.
            console.log(`Sending email to ${member.email} with subject: ${mailOptions.subject}`);
            // 여기에 실제 메일 전송 로직 (ex. transporter.sendMail(mailOptions)) 을 추가하십시오.
        });
    } catch (error) {
        console.error('Error fetching newsletter data or sending emails:', error);
    }
}

// 매주 월요일 오전 9시에 뉴스레터 발송
cron.schedule('0 9 * * 1', sendNewsletter);

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
});
