"use client"
import styled from "@emotion/styled"
import gianni from "../assets/gianni.png"
import React from "react"

const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  font-family: 'Poppins', sans-serif;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #FFA07A;
    border-radius: 2px;
  }
`

const Subtitle = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #444;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  
  &:last-of-type {
    margin-bottom: 2rem;
    color: #666;
    font-size: 1.3rem;
    font-weight: 500;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(255, 160, 122, 0.3);
    border-radius: 12px;
    pointer-events: none;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  font-family: 'Poppins', sans-serif;
  
  &:first-of-type {
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }
`

const MissionStatement = styled.div`
  background: linear-gradient(to right, #fff8f5, #fff);
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 8px 20px rgba(255, 160, 122, 0.15);
  border-left: 4px solid #FFA07A;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`

const MissionText = styled.p`
  font-weight: 700;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.6;
  color: #333;
  font-family: 'Poppins', sans-serif;
  position: relative;
  padding: 0 1.5rem;
  
  &:before, &:after {
    content: '"';
    font-size: 2.5rem;
    color: rgba(255, 160, 122, 0.4);
    position: absolute;
    line-height: 1;
  }
  
  &:before {
    left: 0;
    top: -0.5rem;
  }
  
  &:after {
    right: 0;
    bottom: -1.5rem;
  }
`

const LocationText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
`

const AboutUs = () => {
  return (
    <Section>
      <Title>About Us</Title>
      <ContentWrapper>
        <ImageSection>
          <Subtitle>Meet Gianni Ramirez-Downes</Subtitle>
          <Subtitle>Founder of Work Wear</Subtitle>
          <ImageContainer>
            <img
              src={gianni}
              alt="Gianni Ramirez-Downes"
              style={{ 
                borderRadius: "12px",
                width: "100%",
                height: "auto",
                display: "block"
              }}
            />
          </ImageContainer>

        </ImageSection>

        <TextSection>
          <TextContent>
            <Paragraph>
              I'm Gianni Ramirez-Downes, the owner and operator behind this workwear brand. I started this business with
              one goal — to provide reliable, high-quality uniforms that help businesses look professional without the
              crazy markups or long wait times.
            </Paragraph>

            <Paragraph>
              With a background in design, hands-on experience in production, and a deep understanding of what crews
              need on the job, I built this brand from the ground up to deliver both quality and consistency. I handle
              everything directly — from client communication to final delivery — because I believe in doing things
              right, not just fast.
            </Paragraph>

            <Paragraph>I know the hustle, and I'm here to support yours.</Paragraph>

            <Paragraph>
              At Work Wear, we specialize in high-quality, custom workwear that helps businesses look sharp and stay
              professional on the job. Whether it's embroidered polos, printed hi-vis vests, or fully branded uniforms,
              we make it easy to gear up your team with durable and stylish clothing.
            </Paragraph>

            <Paragraph>
              We're a hands-on, small team that handles everything in-house — from design to production. No middlemen.
              No excuses. Just reliable service, quick turnarounds, and real attention to detail.
            </Paragraph>

            <MissionStatement>
              <MissionText>Our mission is simple: Make your crew look as professional as they work.</MissionText>
            </MissionStatement>

            <Paragraph>
              We work with businesses of all sizes — from solo tradesmen to full-scale crews — and offer bulk pricing,
              custom artwork, and guidance every step of the way.
            </Paragraph>

            <LocationText>Based in Ossining New York, proudly serving clients across East Coast.</LocationText>
          </TextContent>
        </TextSection>
      </ContentWrapper>
    </Section>
  )
}

export default AboutUs
