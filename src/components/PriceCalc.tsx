"use client"

import React from 'react'
import { useState } from "react"
import styled from "@emotion/styled"

const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CalculatorWrapper = styled.div`
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
  background-color: #1a1a1a; /* dark background so white text shows */
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;  
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #FFA07A;
    box-shadow: 0 0 0 3px rgba(255, 160, 122, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }

  &[type="checkbox"] {
    width: auto;
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
`;


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

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  font-family: 'Poppins', sans-serif;
  color: #333;
  font-size: 0.95rem;
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: #FFA07A;
    cursor: pointer;
  }
`

const PriceDisplay = styled.div`
  margin: 1.5rem 0;
  padding: 1.25rem;
  background: linear-gradient(to right, #fff8f5, #fff);
  border: 1px solid rgba(255, 160, 122, 0.3);
  border-radius: 8px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  box-shadow: 0 4px 12px rgba(255, 160, 122, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
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
  
  &:hover {
    background-color: #FF8C69;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(255, 160, 122, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const PriceCalc = () => {
  const [formData, setFormData] = useState({
    quantity: "",
    workwearType: "",
    needsArtwork: false,
  })

  const [totalPrice, setTotalPrice] = useState(0)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    calculatePrice({ ...formData, [name]: type === "checkbox" ? checked : value })
  }

  const calculatePrice = (data) => {
    // Base prices (you can adjust these based on your actual prices)
    const basePrices = {
      "t-shirts": 15,
      polos: 25,
      jackets: 45,
      "hi-vis": 30,
    }

    const designFee = 50 // Design fee for custom artwork

    let price = 0
    if (data.workwearType && data.quantity) {
      price = basePrices[data.workwearType] * Number.parseInt(data.quantity)
      if (data.needsArtwork) {
        price += designFee
      }
    }

    setTotalPrice(price)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <Section>
      <CalculatorWrapper>
        <Title>Price Calculator</Title>
        <form onSubmit={handleSubmit}>
          <Select name="workwearType" value={formData.workwearType} onChange={handleChange}>
            <option value="">Select Workwear Type</option>
            <option value="t-shirts">T-shirts</option>
            <option value="polos">Polos</option>
            <option value="jackets">Jackets</option>
            <option value="hi-vis">Hi-Vis</option>
          </Select>

          <Input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
          />

          <CheckboxLabel>
            <input type="checkbox" name="needsArtwork" checked={formData.needsArtwork} onChange={handleChange} />
            Do you need custom artwork? (+$50 design fee)
          </CheckboxLabel>

          <PriceDisplay>Estimated Total: ${totalPrice.toFixed(2)}</PriceDisplay>

          <Button type="submit">Submit Quote Request</Button>
        </form>
      </CalculatorWrapper>
    </Section>
  )
}

export default PriceCalc
