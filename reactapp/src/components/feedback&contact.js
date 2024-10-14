import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: orange;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  max-width: 400px;
  margin: 10px;
  text-align: center;
`;

const ContactInfoHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContactInfoText = styled.p`
  font-size: 15px;
  margin-bottom: 15px;
`;

const ContactInfoSection = styled.div`
  margin-bottom: 15px;
`;

const ContactInfoTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ContactInfoDetails = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

const FeedbackContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: red;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  color: #000;
  max-width: 420px; /* Increased max-width */
  margin: 10px;
  text-align: center;
`;

const FeedbackInput = styled.input`
  width: 90%; /* Decreased width */
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 40px; /* Rounded corners */
  font-size: 16px;
`;

const FeedbackTextArea = styled.textarea`
  width: 90%; /* Decreased width */
  height: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 20px; /* Rounded corners */
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 80px; /* Decreased width */
  height: 40px;
  padding: 10px;
  background-color: gold;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 20px; /* Rounded corners */
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  font-size: 16px;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: yellow;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
}`;

const ErrorLabel = styled.span`
  color: yellow;
  font-size: 14px;
  margin-top: -10px;
  text-align: left;
`;

const ContactInformation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!comments.trim()) {
      newErrors.comments = 'Comments are required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/save-feedback',
        {
          name,
          email,
          subject,
          comments,
        }
      );

      console.log('Response:', response);

      if (response.status === 201) {
        alert('Feedback submitted successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setComments('');
      } else {
        alert('Failed to submit feedback.');
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        alert(error.response.data);
      } else {
        alert('An error occurred while submitting feedback.');
      }
    }
  };

  return (
    <PageWrapper id="contact">
      <ContactInfoContainer>
        <ContactInfoHeading>Get In Touch</ContactInfoHeading>
        <ContactInfoText>We appreciate your interest in our services. Feel free to reach out if you need to get in touch with us.</ContactInfoText>
        <ContactInfoSection>
          <ContactInfoTitle>Email</ContactInfoTitle>
          <ContactInfoDetails>hamzaaleem93@gmail.com</ContactInfoDetails>
          <ContactInfoDetails>muaazrt@gmail.com</ContactInfoDetails>
        </ContactInfoSection>
        <ContactInfoSection>
          <ContactInfoTitle>Call Us</ContactInfoTitle>
          <ContactInfoDetails>+923002877787 (PAK)</ContactInfoDetails>
          <ContactInfoDetails> +923249876502 (PAK)</ContactInfoDetails>
          
        </ContactInfoSection>
      </ContactInfoContainer>
      <FeedbackContainer>
        <form onSubmit={handleSubmit}>
          <FeedbackInput
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <ErrorLabel>{errors.name}</ErrorLabel>}
          <FeedbackInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <ErrorLabel>{errors.email}</ErrorLabel>}
          <FeedbackInput
            type="text"
            placeholder="Enter your subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <ErrorLabel>{errors.subject}</ErrorLabel>}
          <FeedbackTextArea
            placeholder="Enter your message..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          {errors.comments && <ErrorLabel>{errors.comments}</ErrorLabel>}
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </form>
      </FeedbackContainer>
    </PageWrapper>
  );
};

export default ContactInformation;
