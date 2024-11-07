import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { FaUserFriends, FaArrowLeft, FaBookMedical } from "react-icons/fa";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    background-color: #C6EDFF;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

// NavBar 스타일
const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    padding: 10px;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;
    font-size: 24px;
    //background-color: #ffffff;
`;

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    &:hover {
        color: #2dbdff;
    }

    svg {
        margin-right: 8px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 20px;
`;

const ActivityImage = styled.img`
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
`;

const IconShelf = styled.div`
    display: flex;
    justify-content : center;
    align-items: flex-end;
    gap: 40px;
    margin-top: 20px;
`;

const BookIcon = styled.div`
    width: 100px;
    height: 150px;
    background-color: #B3C7E6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    border-radius: 4px;
    border-bottom: 10px solid #333; /* 책 받침대처럼 보이도록 하단에 여백 추가 */
`;

const Footer = styled.footer`
    background-color: #C6EDFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
`;

function SubPage1() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        console.log("Fetched bookId:", id); // bookId 확인
        axios.get(`http://localhost:5000/books/${id}`)
            .then(response => setBook(response.data))
            .catch(error => console.error('Error fetching book:', error));
    }, [id]);


    if (!book) return <div>Loading...</div>;

    return (
        <PageContainer>
            <Container>
                <NavBar>
                    <NavLink to="/">
                        <FaArrowLeft /> back to list
                    </NavLink>
                    <NavLink to="/members">
                        <FaUserFriends /> Members
                    </NavLink>
                    <NavLink to="/upload">
                        <FaBookMedical /> Submit your books
                    </NavLink>
                </NavBar>
                <ImageContainer>
                    <ActivityImage src={book.activityImageUrl} alt="Activity" />
                </ImageContainer>
            </Container>
            <Footer>
                <IconShelf>
                    <BookIcon/>
                    <BookIcon/>
                    <BookIcon/>
                    <BookIcon/>
                    <BookIcon/>
                </IconShelf>
            </Footer>
        </PageContainer>
    );
}

export default SubPage1;
