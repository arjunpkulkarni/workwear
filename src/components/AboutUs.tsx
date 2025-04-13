import React from 'react';
import styled from '@emotion/styled';
import gianni from "../assets/gianni.png"

const Section = styled.section`
  padding: 2rem;
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const Subtitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const MissionStatement = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
`;

const AboutUs = () => {
  return (
    <Section>
      <Title>About Us</Title>
      <ContentWrapper>
        <ImageSection>
          <Subtitle>Meet Gianni Ramirez-Downes</Subtitle>
          <Subtitle>Founder of Work Wear</Subtitle>
          <Image src={gianni} alt="Gianni Ramirez-Downes" />
        </ImageSection>
        
        <TextSection>
          <TextContent>
            <Paragraph>
              I'm Gianni Ramirez-Downes, the owner and operator behind this workwear brand. I started this business with one goal — to provide reliable, high-quality uniforms that help businesses look professional without the crazy markups or long wait times.
            </Paragraph>

            <Paragraph>
              With a background in design, hands-on experience in production, and a deep understanding of what crews need on the job, I built this brand from the ground up to deliver both quality and consistency. I handle everything directly — from client communication to final delivery — because I believe in doing things right, not just fast.
            </Paragraph>

            <Paragraph>
              I know the hustle, and I'm here to support yours.
            </Paragraph>

            <Paragraph>
              At Work Wear, we specialize in high-quality, custom workwear that helps businesses look sharp and stay professional on the job. Whether it's embroidered polos, printed hi-vis vests, or fully branded uniforms, we make it easy to gear up your team with durable and stylish clothing.
            </Paragraph>

            <Paragraph>
              We're a hands-on, small team that handles everything in-house — from design to production. No middlemen. No excuses. Just reliable service, quick turnarounds, and real attention to detail.
            </Paragraph>

            <MissionStatement>
              <Paragraph style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Our mission is simple: Make your crew look as professional as they work.
              </Paragraph>
            </MissionStatement>

            <Paragraph>
              We work with businesses of all sizes — from solo tradesmen to full-scale crews — and offer bulk pricing, custom artwork, and guidance every step of the way.
            </Paragraph>

            <Paragraph>
              Based in Ossining New York, proudly serving clients across East Coast.
            </Paragraph>
          </TextContent>
        </TextSection>
      </ContentWrapper>
    </Section>
  );
};

export default AboutUs;
