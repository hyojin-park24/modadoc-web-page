import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    margin: 0 auto;
`;

const Input = styled.input`
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    resize: none;
`;

const Button = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background-color: #3a5a40;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #4a6a4f;
  }
`;

function UploadPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        bookName: '',
        introduction: '',
        bookImage: null,
        activityImage: null,
        profileImage: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        setFormData({ ...formData, [name]: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        axios.post('/api/upload', {
            fullName: formData.fullName,
            email: formData.email
        })
            .then(response => alert('Book uploaded successfully!'))
            .catch(error => console.error('Error uploading book:', error));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
            <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
            <Input type="text" name="bookName" placeholder="Book Name" onChange={handleChange} required />
            <TextArea name="introduction" placeholder="One-line introduction" onChange={handleChange} required />
            <Input type="file" name="bookImage" onChange={handleFileChange} required />
            <Input type="file" name="activityImage" onChange={handleFileChange} required />
            <Input type="file" name="profileImage" onChange={handleFileChange} required />
            <Button type="submit">Submit</Button>
        </Form>
    );
}

export default UploadPage;
