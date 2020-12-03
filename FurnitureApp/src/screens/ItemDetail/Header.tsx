import React from 'react';

import {COLORS, icons, images, SIZES} from '../../constants';
import styled from 'styled-components/native';

const Header = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button onPress={() => console.log('Menu on pressed')}>
          <Icon
            source={icons.menu}
            resizeMode="contain"
            style={{tintColor: COLORS.white}}
          />
        </Button>
        <Button onPress={() => console.log('Cart on pressed')}>
          <Icon
            source={icons.cart}
            resizeMode="contain"
            style={{tintColor: COLORS.white}}
          />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  margin: 0 ${SIZES.padding}px;
  top: 5%;
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
