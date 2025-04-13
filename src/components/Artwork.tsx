import React, { useState } from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  padding: 2rem;
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const Description = styled.p`
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const FormWrapper = styled.form`
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: black;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: 'Poppins', sans-serif;
  color: black;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #FFA07A;
  color: black;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-family: 'Poppins', sans-serif;
  &:hover {
    background-color: #FF8C69;
  }
`;

const FileInput = styled.div`
  margin-bottom: 1rem;
`;

const FileLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
  color: black;
`;

const Artwork = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    artworkFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Section>
      <Title>Custom Artwork Design</Title>
      <Description>
        No logo? No problem. Our design team will create custom artwork for your brand.
      </Description>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="description"
          placeholder="Describe your design needs..."
          value={formData.description}
          onChange={handleChange}
          required
        />
        <FileInput>
          <FileLabel>Upload Existing Design (Optional)</FileLabel>
          <Input
            type="file"
            name="artworkFile"
            onChange={handleChange}
            accept="image/*"
          />
        </FileInput>
        <Button type="submit">Request Custom Design</Button>
      </FormWrapper>
    </Section>
  );
};

export default Artwork;
