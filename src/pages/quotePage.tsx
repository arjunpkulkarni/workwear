import React from 'react';
import styled from '@emotion/styled';
import GetQuote from "../components/GetQuote"
// import PriceCalc from "../components/PriceCalc"
import Contact from "../components/Contact"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  background-color: #fff;
  min-height: 100vh;
  width: 100%;
  overflow-x: auto;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ComponentWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  background-color: #fff;
`;

const QuotePage = () => {
    return (
        <Container>
            <ComponentWrapper>
                <GetQuote />
            </ComponentWrapper>
            {/* <ComponentWrapper>
                <PriceCalc />
            </ComponentWrapper> */}
            <ComponentWrapper>
                <Contact />
            </ComponentWrapper>
        </Container>
    )
}

export default QuotePage;