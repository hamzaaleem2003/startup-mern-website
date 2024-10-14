import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: lightblue;
  color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 20px;
  margin-top: -8px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
  padding: 0 20px;
`;

const About = () => {
  return (
    <Wrapper id="we-are-different">
      <Heading>Why Choose HA TECHS?</Heading>
      <SubHeading>We Are Different</SubHeading>
      <Paragraph>
        HA TECHS, established in 2022, is your trusted partner in the world of technology. Our passion for innovation, commitment to excellence, and customer-centric approach set us apart. At HA TECHS, we understand that success is not just about creating great technology; it's about making technology work for you.
      </Paragraph>
      <Paragraph>
        We pride ourselves on delivering solutions that not only meet your needs but exceed your expectations. Our team of experts is dedicated to crafting web and mobile experiences that engage, inspire, and drive results. We believe that technology should empower your business and enhance your life.
      </Paragraph>
      <Paragraph>
        Whether you're a startup with big dreams or an established enterprise looking to stay ahead, HA TECHS is here to guide you on your journey. We invite you to explore the limitless possibilities of technology with us. Let's transform your vision into reality and shape the future together.
      </Paragraph>
      <Paragraph>
        With a deep understanding of the rapidly evolving tech landscape, we are dedicated to helping you navigate the challenges and opportunities of the digital age. Our commitment to staying at the forefront of innovation ensures that we can provide you with cutting-edge solutions tailored to your unique needs. Join us in redefining the future through technology.
      </Paragraph>
    </Wrapper>
  );
};

export default About;
