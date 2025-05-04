"use client"

import React from 'react'
import { useState } from "react"
import styled from "@emotion/styled"

const Section = styled.section`
  padding: 2rem;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormWrapper = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  font-family: 'Poppins', sans-serif;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  font-family: 'Poppins', sans-serif;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #FFA07A;
    border-radius: 2px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #FFA07A;
    box-shadow: 0 0 0 3px rgba(255, 160, 122, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: #FFA07A;
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 10px rgba(255, 160, 122, 0.3);
  margin-top: 0.5rem;
  
  &:hover {
    background-color: #FF8C69;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(255, 160, 122, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace this URL with your actual Microsoft Forms URL
    const microsoftFormUrl = "YOUR_MICROSOFT_FORM_URL"
    
    // Create a hidden form to submit to Microsoft Forms
    const form = document.createElement("form")
    form.method = "POST"
    form.action = microsoftFormUrl
    form.target = "_blank"

    // Add form data as hidden inputs
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = key
      input.value = value
      form.appendChild(input)
    })

    // Add the form to the document and submit it
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
  }

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
  )
}

export default Contact

