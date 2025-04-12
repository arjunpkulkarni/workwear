import React, { useState } from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this URL with your actual Microsoft Forms URL
    const microsoftFormUrl = 'YOUR_MICROSOFT_FORM_URL';
    
    // Create a hidden form to submit to Microsoft Forms
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = microsoftFormUrl;
    form.target = '_blank';

    // Add form data as hidden inputs
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Add the form to the document and submit it
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <Section>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Contact Us</Title>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </FormWrapper>
    </Section>
  );
};

export default Contact;
