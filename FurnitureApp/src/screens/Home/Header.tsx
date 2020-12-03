import React from 'react';

import {icons, images, SIZES} from '../../constants';
import styled from 'styled-components/native';

const Header = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button onPress={() => console.log('Menu on pressed')}>
          <Icon source={icons.menu} resizeMode="contain" />
        </Button>
        <Button onPress={() => console.log('Cart on pressed')}>
          <Icon source={icons.cart} resizeMode="contain" />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  padding: 0px ${SIZES.padding}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
