import React from 'react';
import styled from 'styled-components';
import {Slide} from 'react-awesome-reveal';
const ServicesWrapper = styled.section`
  background: linear-gradient(to bottom, #01a9b4, #034d54);
  padding: 20px;
  text-align: center;
  color: #fff;
`;

const ServicesHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ServicesDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`;

const ServiceBlock = styled.div`
  background-color: #ffdb58;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: left;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const ServiceDetails = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #666;
`;

const servicesData = [
  {
    title: 'Web Development',
    description:
      'We create responsive and user-friendly websites tailored to your business needs. Our web development services cover front-end and back-end technologies. We also provide content management system (CMS) integration and e-commerce solutions.',
  },
  {
    title: 'App Development',
    description:
      'Craft mobile applications that engage users and drive results. Our app development expertise includes iOS and Android platforms. We specialize in developing custom features and ensuring seamless performance.',
  },
  {
    title: 'UX Design',
    description:
      'Create intuitive user experiences with our expert UX design services. We focus on user research, wireframing, prototyping, and usability testing. Our goal is to enhance user satisfaction and product usability.',
  },
  {
    title: 'UI Design',
    description:
      'Design visually appealing user interfaces that captivate your audience. Our UI design services include creating interactive prototypes and implementing design systems for consistency.',
  },
  {
    title: 'Machine Learning Solutions',
    description:
      'Leverage the power of machine learning to gain insights and automate tasks. We offer custom machine learning models, data analysis, and predictive analytics for various industries.',
  },
  {
    title: 'Desktop Applications',
    description:
      'Develop desktop applications tailored to your specific requirements. Our desktop app development services cover Windows, macOS, and Linux platforms, ensuring cross-platform compatibility.',
  },
  {
    title: 'Game Development',
    description:
      'Create captivating and interactive games for various platforms. Our game development expertise spans mobile, PC, console, and virtual reality (VR) platforms.',
  },
  {
    title: 'Data Analytics',
    description:
      'Analyze and visualize data to make informed business decisions. Our data analytics services include data cleaning, exploratory data analysis (EDA), and dashboard development.',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Harness the power of cloud computing for scalability and efficiency. We offer cloud migration, infrastructure setup, and serverless application development on leading cloud platforms.',
  },
  // Add more services here
];

const Services = () => {
  return (
    <ServicesWrapper id="services">
      <ServicesHeading>Our Services</ServicesHeading>
      <ServicesDescription>
        At HA TECHS, we offer a wide range of services to meet your digital needs.
        Explore our expertise below:
      </ServicesDescription>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <Slide direction="up" key={index}>
            <ServiceBlock>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDetails>{service.description}</ServiceDetails>
            </ServiceBlock>
          </Slide>
        ))}
      </ServicesGrid>
    </ServicesWrapper>
  );
};

export default Services;
