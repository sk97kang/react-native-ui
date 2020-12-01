import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
// constant
import {COLORS, FONTS, SIZES} from '../../constants';

// style
import styled from 'styled-components/native';

const Footer = () => {
  return (
    <Container>
      <Box
        colors={['#edf0fc', '#d6dfff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Content>
          <Price>
            <PriceText style={FONTS.h1}>$1000</PriceText>
          </Price>
          <BookingButton>
            <ButtonGradient
              colors={['#46aeff', '#5884ff']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <BookingButtonText style={FONTS.h2}>BOOKING</BookingButtonText>
            </ButtonGradient>
          </BookingButton>
        </Content>
      </Box>
    </Container>
  );
};

export default Footer;

const Container = styled.View`
  flex: 0.5;
  padding: 0px ${SIZES.padding}px;
`;

const Box = styled(LinearGradient)`
  height: 70px;
  width: 100%;
  border-radius: 15px;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.View`
  flex: 1;
  margin: 0px ${SIZES.padding}px;
  justify-content: center;
`;

const PriceText = styled.Text``;

const BookingButton = styled.TouchableOpacity`
  width: 130px;
  height: 80%;
  margin: 0px ${SIZES.radius}px;
`;

const ButtonGradient = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const BookingButtonText = styled.Text`
  color: ${COLORS.white};
`;
