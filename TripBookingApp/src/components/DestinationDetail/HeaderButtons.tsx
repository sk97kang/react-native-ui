import React from 'react';

// constant
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';

// style
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const HeaderButtons = () => {
  // state

  // navigation
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.navigate('Home')}>
        <ButtonImage source={icons.back} resizeMode="cover" />
      </Button>
      <Button onPress={() => console.log('Menu on pressed')}>
        <ButtonImage source={icons.menu} resizeMode="cover" />
      </Button>
    </Container>
  );
};

export default HeaderButtons;

const Container = styled.View`
  position: absolute;
  top: 50px;
  left: 20px;
  right: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity``;

const ButtonImage = styled.Image`
  width: 30px;
  height: 30px;
`;
