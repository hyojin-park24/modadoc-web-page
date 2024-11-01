import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #d3e4cd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Description = styled.p`
  color: #555;
  font-size: 1.2rem;
  text-align: center;
`;

function SubPage1() {
    const { id } = useParams();

    // 임시 데이터 (id로 특정 책의 정보를 불러온다고 가정)
    const book = {
        name: "The Goal",
        activityImageUrl: "https://via.placeholder.com/600x400",  // 임시 이미지
        description: "목표 달성에 대한 이야기를 담은 책입니다."
    };

    return (
        <Container>
            <Title>{book.name}</Title>
            <Image src={book.activityImageUrl} alt="Activity" />
            <Description>{book.description}</Description>
        </Container>
    );
}

export default SubPage1;
