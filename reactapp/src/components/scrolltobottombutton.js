import React from 'react';
import styled from 'styled-components';

const ScrollButton = styled.button`
  margin-bottom:30px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ScrollToBottomButton = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <ScrollButton onClick={scrollToBottom}>
      &#8595; {/* Down arrow */}
    </ScrollButton>
  );
};

export default ScrollToBottomButton;