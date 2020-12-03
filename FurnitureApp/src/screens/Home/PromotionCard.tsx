import React from 'react';
import {StyleSheet} from 'react-native';

import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import styled from 'styled-components/native';

const PromotionCard = () => {
  return (
    <Container style={styles.shadow}>
      <ImageContainer>
        <Image source={images.sofa} resizeMode="contain" />
      </ImageContainer>
      {/* Wordings section */}
      <Wordings>
        <H2 style={FONTS.h2}>Special Offer</H2>
        <BODY3 style={FONTS.body3}>Adding to your cart</BODY3>
      </Wordings>
      {/* Button */}
      <ButtonContainer>
        <Button onPress={() => console.log('Promo on pressed')}>
          <Icon source={icons.chevron} resizeMode="contain" />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

const Container = styled.View`
  flex-direction: row;
  margin: 0px ${SIZES.padding}px;
  padding: ${SIZES.radius}px;
  height: 110px;
  border-radius: 20px;
  background-color: ${COLORS.white};
`;

const ImageContainer = styled.View`
  width: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.lightGray2};
  border-radius: 20px;
`;

const Image = styled.Image`
  width: 60%;
  height: 60%;
`;

const Wordings = styled.View`
  flex: 1;
  margin-left: ${SIZES.radius}px;
  justify-content: center;
`;

const H2 = styled.Text``;

const BODY3 = styled.Text``;

const ButtonContainer = styled.View`
  margin-right: ${SIZES.radius}px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  background-color: ${COLORS.primary};
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 40px;
  border-radius: 10px;
`;

const Icon = styled.Image`
  width: 50%;
  height: 50%;
`;
