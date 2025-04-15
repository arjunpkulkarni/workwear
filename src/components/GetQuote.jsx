"use client"

import { useState } from "react"
import styled from "@emotion/styled"

const Section = styled.section`
  padding: 2rem;
  background-color: transparent;
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

const Select = styled.select`
  width: 100%;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: white;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFA07A' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #FFA07A;
    box-shadow: 0 0 0 3px rgba(255, 160, 122, 0.2);
  }
  
  option {
    color: #333;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: 'Poppins', sans-serif;
  color: #333;
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

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  font-family: 'Poppins', sans-serif;
  color: #333;
  flex-direction: row;
  font-size: 0.95rem;
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
  
  &:hover {
    background-color: #FF8C69;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(255, 160, 122, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    workwearType: "",
    customArtwork: false,
    artworkFile: null,
    additionalInfo: "",
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <Section>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Request a Quote</Title>
        <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <Input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
        />
        <Select name="workwearType" value={formData.workwearType} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="t-shirts">T-shirts</option>
          <option value="polos">Polos</option>
          <option value="jackets">Jackets</option>
          <option value="hi-vis">Hi-Vis</option>
        </Select>
        <Textarea
          name="additionalInfo"
          placeholder="Additional Info"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
        <Button type="submit">Request Quote</Button>
      </FormWrapper>
    </Section>
  )
}

export default GetQuote
