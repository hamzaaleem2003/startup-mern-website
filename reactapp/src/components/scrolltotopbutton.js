import React from 'react';
import styled from 'styled-components';

const ScrollButton = styled.button`
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
  transition: background-color 0.3s, bottom 0.3s, right 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
  }
`;

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollButton onClick={scrollToTop}>
      &#8593;
    </ScrollButton>
  );
};

export default ScrollToTopButton;
