import React from 'react';

import {COLORS, FONTS, SIZES} from '../../constants';
import styled from 'styled-components/native';

interface TitleProps {
  title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <Container>
      <MainTitle style={FONTS.largeTitle}>Collection of</MainTitle>
      <SubTitle style={FONTS.largeTitle}>{title}</SubTitle>
    </Container>
  );
};

export default Title;

const Container = styled.View`
  margin: 0px ${SIZES.padding}px;
  margin-top: ${SIZES.padding}px;
`;

const MainTitle = styled.Text`
  color: ${COLORS.black};
`;

const SubTitle = styled.Text`
  color: ${COLORS.black};
`;
