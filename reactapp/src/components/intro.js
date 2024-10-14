import React from 'react';
import styled from 'styled-components';

import companyLogo from '../images/companylogo1.jpg';
import servicesPic from '../images/servicespic.jpg';

const IntroSectionWrapper = styled.section`
  background-color: black;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`;

const CompanyLogo = styled.img`
  width: 150px;
  height: 70px;
  margin-bottom: 20px;
`;

const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Label = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 42px;
  margin-top: 20px;
`;

const ServicesPic = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Description = styled.p`
  font-weight: thin;
  font-size: 18px;
  margin-top: 20px;
`;

const GetStartedButton = styled.button`
  background: linear-gradient(45deg, #ff6b6b, #ffa35f);
  color: #fff;
  font-size: 24px;
  padding: 16px 32px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(45deg, #ff4545, #ff8e2e);
  }
`;

const IntroSection = () => {
  return (
    <IntroSectionWrapper id="intro">
      <CompanyLogo src={companyLogo} alt="Company Logo" />
      <Labels>
        <Label href="#we-are-different">We Are Different</Label>
        <Label href="#services">Services</Label>
        <Label href="#technologies">Technologies</Label>
        <Label href="#careers">Careers for You</Label>
        <Label href="#contact">Contact Us</Label>
      </Labels>
      <Heading>
        Empowering Your Digital Future with Excellence!
      </Heading>
      <ServicesPic src={servicesPic} alt="Services Pic" />
      <Description>
       We offer a comprehensive range of IT services, providing solutions tailored to your needs.
      </Description>
      <a href="#contact">
        <GetStartedButton>Get Started</GetStartedButton>
      </a>
    </IntroSectionWrapper>
  );
};

export default IntroSection;
