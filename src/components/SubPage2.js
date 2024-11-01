import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #e6f4f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  color: #333;
  font-size: 1.2rem;
`;

const Bio = styled.p`
  color: #666;
  font-size: 0.9rem;
  text-align: center;
`;

function SubPage2() {
    const members = [
        { id: 1, name: "박효진", profileImageUrl: "https://via.placeholder.com/100", bio: "모다독 리더" },
        { id: 2, name: "김민수", profileImageUrl: "https://via.placeholder.com/100", bio: "개발자" },
        // 임시로 몇 명의 멤버 데이터를 추가합니다.
    ];

    return (
        <Container>
            {members.map(member => (
                <MemberCard key={member.id}>
                    <ProfileImage src={member.profileImageUrl} alt="Profile" />
                    <Name>{member.name}</Name>
                    <Bio>{member.bio}</Bio>
                </MemberCard>
            ))}
        </Container>
    );
}

export default SubPage2;
