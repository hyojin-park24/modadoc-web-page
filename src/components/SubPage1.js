import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { FaUserFriends, FaArrowLeft, FaBookMedical } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    background-color: #d3e4cd;
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
    background-color: #ffffff;
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
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
`;

const ActivityImage = styled.img`
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
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
    );
}

export default SubPage1;
