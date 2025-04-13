import React, { useState } from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9; // Light background for the section
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  font-family: 'Poppins', sans-serif;
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

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
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
  color: white;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  flex-direction: row;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #FFA07A;
  color: white;
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

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    workwearType: '',
    customArtwork: false,
    artworkFile: null,
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Section>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Request a Quote</Title>
        <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <Input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} />
        <Select name="workwearType" value={formData.workwearType} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="t-shirts">T-shirts</option>
          <option value="polos">Polos</option>
          <option value="jackets">Jackets</option>
          <option value="hi-vis">Hi-Vis</option>
        </Select>        
        <Textarea name="additionalInfo" placeholder="Additional Info" value={formData.additionalInfo} onChange={handleChange} />
        <Button type="submit">Request Quote</Button>
      </FormWrapper>
    </Section>
  );
};

export default GetQuote;
