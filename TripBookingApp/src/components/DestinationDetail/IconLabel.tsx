import React from 'react';

// constant
import {COLORS, FONTS, SIZES} from '../../constants';

// style
import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';

interface IconLabelProps {
  icon: ImageSourcePropType;
  label: string;
}

const IconLabel = ({icon, label}: IconLabelProps) => {
  return (
    <Container>
      <Image source={icon} resizeMode="cover" />
      <Text style={FONTS.h3}>{label}</Text>
    </Container>
  );
};

export default IconLabel;

const Container = styled.View`
  align-items: center;
`;

const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

const Text = styled.Text`
  margin-top: ${SIZES.padding}px;
  color: ${COLORS.gray};
`;
