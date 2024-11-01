import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
`;

const Title = styled.h1`
  color: #3a5a40;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const BookItem = styled(Link)`
  width: 150px;
  height: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #3a5a40;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #4a6a4f;
  }
`;

function MainPage() {
    const books = [
        { id: 1, name: "The Goal" },
        { id: 2, name: "IT 지식" },
        { id: 3, name: "인간 관계론" },
        // 임시로 몇 개의 책 데이터를 추가합니다.
    ];

    return (
        <Container>
            <Title>모다독 - 함께하는 독서</Title>
            <BookList>
                {books.map(book => (
                    <BookItem to={`/book/${book.id}`} key={book.id}>
                        {book.name}
                    </BookItem>
                ))}
            </BookList>
            <NavLink to="/members">Members</NavLink>
            <NavLink to="/upload">Submit your book</NavLink>
        </Container>
    );
}

export default MainPage;
