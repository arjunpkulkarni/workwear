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

const CalculatorWrapper = styled.div`
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
  color: black;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  color: black;
  flex-direction: row;
`;

const PriceDisplay = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 6px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
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

const PriceCalc = () => {
  const [formData, setFormData] = useState({
    quantity: '',
    workwearType: '',
    needsArtwork: false,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    calculatePrice({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const calculatePrice = (data) => {
    // Base prices (you can adjust these based on your actual prices)
    const basePrices = {
      't-shirts': 15,
      'polos': 25,
      'jackets': 45,
      'hi-vis': 30,
    };

    const designFee = 50; // Design fee for custom artwork

    let price = 0;
    if (data.workwearType && data.quantity) {
      price = basePrices[data.workwearType] * parseInt(data.quantity);
      if (data.needsArtwork) {
        price += designFee;
      }
    }

    setTotalPrice(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

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
            <Input
              type="checkbox"
              name="needsArtwork"
              checked={formData.needsArtwork}
              onChange={handleChange}
            />
            Do you need custom artwork? (+$50 design fee)
          </CheckboxLabel>

          <PriceDisplay>
            Estimated Total: ${totalPrice.toFixed(2)}
          </PriceDisplay>

          <Button type="submit">Submit Quote Request</Button>
        </form>
      </CalculatorWrapper>
    </Section>
  );
};

export default PriceCalc;
