import React from 'react';

// constant
import {COLORS, FONTS, SIZES} from '../../constants';

// style
import styled from 'styled-components/native';

const About = () => {
  return (
    <Container>
      <Title style={FONTS.h2}>About</Title>
      <Content style={FONTS.body3}>
        Located at the Alps with an altitude of 1,702 meters. The ski area is
        the largest ski area in the world and is known as the best place to ski.
        Many other facilities, such as fitness center, sauna, steam room to
        star-rated restaurants.
      </Content>
    </Container>
  );
};

export default About;

const Container = styled.View`
  margin-top: ${SIZES.padding}px;
  padding: 0px ${SIZES.padding}px;
`;

const Title = styled.Text``;

const Content = styled.Text`
  margin-top: ${SIZES.radius}px;
  color: ${COLORS.gray};
`;
