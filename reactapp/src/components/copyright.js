import React from 'react';
import styled from 'styled-components';

const CopyrightContainer = styled.div`
  background-color: #000;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-align: center;
`;

const Copyright = () => {
  return (
    <CopyrightContainer>
      © Copyright 2023 HA TECHS, All rights reserved.
    </CopyrightContainer>
  );
};

export default Copyright;
