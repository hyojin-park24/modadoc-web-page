import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`/api/books/${id}`)
            .then(response => setBook(response.data))
            .catch(error => console.error('Error fetching book:', error));
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <Container>
            <Title>{book.name}</Title>
            <Image src={book.activityImageUrl} alt="Activity" />
            <Description>{book.description}</Description>
        </Container>
    );
}

export default SubPage1;
