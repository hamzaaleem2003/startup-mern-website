import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';

// Import technology logos
import htmlLogo from '../images/htmllogo.jpg';
import cssLogo from '../images/csslogo.jpg';
import javascriptLogo from '../images/jslogo.jpg';
import reactLogo from '../images/reactlogo.jpg';
import pythonLogo from '../images/pythonlogo.jpg';
import javaLogo from '../images/javalogo.jpg';
import flutterLogo from '../images/flutterlogo.jpg';
import mysqlLogo from '../images/mysqllogo.jpg';
import mongodbLogo from '../images/mongodblogo.jpg';
import githubLogo from '../images/githublogo.jpg';
import csharpLogo from '../images/csharplogo.jpg'; // Import the C# logo

// Import the background video
import backgroundVideo from '../images/backgroundtechnologies.mp4';

const TechnologiesWrapper = styled.section`
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TechnologiesContent = styled.div`
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const TechnologiesHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  color: #fff;
  margin: 20px 0;
  margin-bottom: 40px;
`;

const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TechnologyBlock = styled.div`
  background-color: pink;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease-in-out;
  width: 200px;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const TechnologyTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

const TechnologyLogo = styled.img`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  padding: 10px;
  margin: 0 auto;
`;

const technologiesData = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Flutter', logo: flutterLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'C#', logo: csharpLogo },
  { name: 'GitHub', logo: githubLogo },
];

const Technologies = () => {
  return (
    <TechnologiesWrapper id="technologies">
      
      <VideoBackground autoPlay muted loop>
        {/* tell me why we use autoplay muted loop */}

        

        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <TechnologiesContent>
        <TechnologiesHeading>Our Technologies</TechnologiesHeading>
        <SubHeading>Discover the technologies that power our solutions</SubHeading>
        <TechnologyList>
          {technologiesData.map((technology, index) => (
            <Slide direction="up" key={index}>
              <TechnologyBlock>
                <TechnologyTitle>{technology.name}</TechnologyTitle>
                <TechnologyLogo src={technology.logo} alt={`${technology.name} Logo`} />
              </TechnologyBlock>
            </Slide>
          ))}
        </TechnologyList>
      </TechnologiesContent>
    </TechnologiesWrapper>
  );
};

export default Technologies;








