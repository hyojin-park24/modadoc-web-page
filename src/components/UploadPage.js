import React, { useState } from 'react';
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
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('책 정보가 업로드되었습니다.');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
            <Input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
            <Input type="text" name="bookName" placeholder="Book Name" onChange={handleChange} required />
            <Input type="file" name="bookImage" required />
            <Button type="submit">Submit</Button>
        </Form>
    );
}

export default UploadPage;
