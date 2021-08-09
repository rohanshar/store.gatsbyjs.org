import React from 'react';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';
import { handleAuthentication } from '../utils/auth';
import { colors, fonts } from '../utils/styles';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  overflow: none;
`;

const Message = styled.h1`
  color: ${colors.text};
  font-family: ${fonts.heading};
`;

const callback = () => {
  handleAuthentication(() => navigate('/'));

  return (
    <Container>
      <Message>Logging you in...</Message>
    </Container>
  );
};

export default callback;
