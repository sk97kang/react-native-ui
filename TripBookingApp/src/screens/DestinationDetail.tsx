import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// constant
import {COLORS} from '../constants';

// style
import styled from 'styled-components/native';

// component
import Header from '../components/DestinationDetail/Header';
import Body from '../components/DestinationDetail/Body';
import Footer from '../components/DestinationDetail/Footer';

const DestinationDetail = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

export default DestinationDetail;

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;
