import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { FaArrowLeft, FaUserFriends, FaBookMedical } from 'react-icons/fa';

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
`;

const Title = styled.h1`
    color: #c6edff;
    font-family: 'Bagel Fat One', sans-serif;
    font-size: 48px;
    margin: 0;
    text-shadow: -2px -2px #2dbdff, 2px 2px #2dbdff, -2px 2px #2dbdff, 2px -2px #2dbdff;
`;

const Subtitle = styled.p`
    font-size: 20px;
    color: #333;
    margin: 5px 0;
`;

const NavBarContainer = styled.div`
    width: 100%; /* 전체 너비 */
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding-top: 10px;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    padding-right: 20px; /* 오른쪽 여백 */
`;

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #333;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #2dbdff;
    }

    svg {
        margin-right: 8px;
    }
`;

function MainPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/api/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <>
            <Header>
                <Title>모다독</Title>
                <Subtitle>모여서 다같이 독서</Subtitle>
                <NavBarContainer>
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
                </NavBarContainer>
            </Header>
            <div>
                {/* Content goes here */}
                <p>여기에 콘텐츠가 들어갑니다.</p>
            </div>
        </>
    );
}

export default MainPage;
