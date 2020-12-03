import React from 'react';

import {COLORS, icons, SIZES} from '../../constants';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Icon source={icons.dashboard} style={{tintColor: COLORS.gray}} />
      </Button>
      <CenterButton onPress={() => console.log('Profile on clicked')}>
        <Icon
          source={icons.plus}
          style={{width: 20, height: 20, tintColor: COLORS.white}}
        />
      </CenterButton>
      <Button onPress={() => console.log('Profile on clicked')}>
        <Icon source={icons.user} style={{tintColor: COLORS.gray}} />
      </Button>
    </Container>
  );
};

export default Footer;

const Container = styled.View`
  position: absolute;
  bottom: 5%;
  left: ${SIZES.padding}px;
  right: ${SIZES.padding}px;
  flex-direction: row;
  height: 70px;
  background-color: ${COLORS.white};
  border-radius: 35px;

  justify-content: space-around;
  align-items: center;
  padding: 0 ${SIZES.padding}px;
`;

const Button = styled.TouchableOpacity``;

const CenterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: ${COLORS.primary};
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
