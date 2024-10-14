import React, { useState } from 'react';
import styled from 'styled-components';

const CareersWrapper = styled.section`
  background-color: lightblue;
  padding: 50px 20px;
  text-align: center;
  color: #fff;
`;

const CareersHeading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: darkblue;
`;

const CareersIntro = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
  color: darkblue;
`;

const CareerContainer = styled.div`
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const CareerItem = styled.div`
  margin-bottom: 20px;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightgreen;
  }
`;

const Label = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: darkgreen;
  display: inline-block;
  margin-right: 10px;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  margin-left: 10px;
  transform: ${(props) => (props.showPoints ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
  vertical-align: middle;
`;

const CareerPoints = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 10px;
  font-weight: bold;
  color: #fff;
  background-color: black;
`;

const Point = styled.li`
  background-color: black;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 0;
`;

const careersData = [
    {
      title: 'Senior Front End Developer',
      eligibility: [
        '2 to 3 years of experience in front-end development',
        'Hands-on experience with HTML, CSS, JavaScript, and React',
        'Strong problem-solving skills',
        'Experience with responsive web design',
        'Familiarity with version control systems (e.g., Git)',
      ],
    },
    {
      title: 'Senior Backend Developer',
      eligibility: [
        'Proven experience in server-side technologies (e.g., Node.js, Python, Java)',
        '3+ years of hands-on development experience',
        'Experience with databases and API development',
        'Knowledge of RESTful API design principles',
        'Understanding of security best practices in web development',
      ],
    },
    {
      title: 'App Developer',
      eligibility: [
        'Experience in mobile app development (iOS, Android)',
        'Proficiency in programming languages (e.g., Swift, Kotlin)',
        'Strong problem-solving skills',
        'Knowledge of mobile app design guidelines and principles',
        'Familiarity with mobile app testing and debugging tools',
      ],
    },
    {
      title: 'ML Engineer',
      eligibility: [
        'Experience in machine learning and AI',
        'Proficiency in Python and relevant ML frameworks (e.g., TensorFlow, PyTorch)',
        'Strong understanding of data structures and algorithms',
        'Experience with data preprocessing and feature engineering',
        'Ability to train and fine-tune machine learning models',
      ],
    },
    {
      title: 'Senior Data Scientist',
      eligibility: [
        'Experience with data analysis and machine learning',
        'Proficiency in programming languages like Python or R',
        'Experience with data visualization tools (e.g., Matplotlib, Tableau)',
        'Strong statistical analysis and data interpretation skills',
        'Ability to communicate data-driven insights effectively',
      ],
    },
    {
      title: 'Senior UX Designer',
      eligibility: [
        '5+ years of UX design experience',
        'Strong portfolio showcasing user research and design work',
        'Proficiency in design tools (e.g., Sketch, Figma)',
        'Experience with user testing and usability studies',
        'Excellent understanding of user-centered design principles',
      ],
    },
    {
      title: 'UI Designer',
      eligibility: [
        'Experience in user interface design',
        'Proficiency in design tools (e.g., Adobe XD, Figma)',
        'Strong creative and visual design skills',
        'Knowledge of design systems and UI/UX best practices',
        'Ability to create wireframes and prototypes',
      ],
    },
    {
      title: 'Cloud Developer',
      eligibility: [
        'Experience in cloud technologies (e.g., AWS, Azure, Google Cloud)',
        'Proficiency in at least one programming language',
        'Experience with containerization and orchestration (e.g., Docker, Kubernetes)',
        'Familiarity with Infrastructure as Code (IaC)',
        'Understanding of cloud security and compliance',
      ],
    },
    {
      title: 'Desktop Application Developer',
      eligibility: [
        'Experience in desktop application development',
        'Proficiency in programming languages (e.g., Java, C++, C#)',
        'Strong problem-solving skills',
        'Knowledge of cross-platform development frameworks (e.g., Electron)',
        'Experience with software testing and debugging',
      ],
    },
    {
      title: 'Graphical Designer',
      eligibility: [
        'Experience in graphic design and visual communication',
        'Proficiency in design software (e.g., Adobe Creative Suite)',
        'Strong creativity and attention to detail',
        'Knowledge of typography and layout design',
        'Ability to create visually appealing marketing materials',
      ],
    },
    {
      title: 'Video Editor',
      eligibility: [
        'Experience in video editing and post-production',
        'Proficiency in video editing software (e.g., Adobe Premiere, Final Cut Pro)',
        'Strong storytelling and visual skills',
        'Knowledge of video effects and motion graphics',
        'Ability to edit and enhance video content',
      ],
    },
    // Add more careers here...
  ];
  

const Careers = () => {
  const [showPoints, setShowPoints] = useState({});

  const handleTogglePoints = (careerTitle) => {
    setShowPoints({
      ...showPoints,
      [careerTitle]: !showPoints[careerTitle],
    });
  };

  return (
    <CareersWrapper id="careers">
      <CareersHeading>Interested in joining us?</CareersHeading>
      <CareersIntro>See Current Openings and Share Your Resume/CV</CareersIntro>
      {careersData.map((career, index) => (
        <div key={index}>
          <CareerItem>
            <Label>{career.title}</Label>
            <ArrowButton
              onClick={() => handleTogglePoints(career.title)}
              showPoints={showPoints[career.title]}
            >
              &#9660;
            </ArrowButton>
          </CareerItem>
          {showPoints[career.title] && (
            <CareerContainer>
              <CareerPoints>
                {career.eligibility.map((point, pointIndex) => (
                  <Point key={pointIndex}>{point}</Point>
                ))}
              </CareerPoints>
            </CareerContainer>
          )}
        </div>
      ))}
    </CareersWrapper>
  );
};

export default Careers;                                                       