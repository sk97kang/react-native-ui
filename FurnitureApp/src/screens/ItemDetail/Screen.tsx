import React from 'react';

import {COLORS} from '../../constants';
import styled from 'styled-components/native';

import Info from './Info';
import Footer from './Footer';

const Screen = () => {
  return (
    <Container>
      <Info />
      <Footer />
    </Container>
  );
};

export default Screen;

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;
