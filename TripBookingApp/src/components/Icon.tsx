import React from 'react';
import {ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

import styled from 'styled-components/native';

interface IconProps {
  source: ImageSourcePropType;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
  style?: StyleProp<ImageStyle>;
  size?: number;
  tintColor?: string;
}

const getStyle = (size: number, tintColor?: string) => ({
  width: size,
  height: size,
  tintColor: tintColor,
});

const Icon = ({
  source,
  resizeMode = 'cover',
  style,
  size = 24,
  tintColor,
}: IconProps) => {
  const customStyle = getStyle(size, tintColor);

  return (
    <Container
      source={source}
      resizeMode={resizeMode}
      style={[style, customStyle]}
    />
  );
};

export default Icon;

const Container = styled.Image``;
