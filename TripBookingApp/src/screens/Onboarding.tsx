import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, FONTS, images, SIZES} from '../constants';

import styled from 'styled-components/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const shadow = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  };

  return (
    <Container>
      <Box>
        <Image source={images.onboardingImage} resizeMode="contain" />
      </Box>
      <Box>
        <Info>
          <Title style={FONTS.h2}>Digital Ticket</Title>
          <Subtitle style={FONTS.body3}>
            Easy solution to buy tickets for your travel, business trips,
            transportation, lodging and culinary.
          </Subtitle>
        </Info>
        <StartButton style={shadow} onPress={() => navigation.navigate('Home')}>
          <StyledLinearGradient
            colors={['#46aeff', '#5884ff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <StartText style={FONTS.h3}>Start !</StartText>
          </StyledLinearGradient>
        </StartButton>
      </Box>
    </Container>
  );
};

export default Onboarding;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.white};
`;

const Box = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Info = styled.View`
  align-items: center;
  margin: 0px ${SIZES.padding}px;
`;

const Title = styled.Text``;

const Subtitle = styled.Text`
  color: ${COLORS.gray};
  margin-top: ${SIZES.padding}px;
  text-align: center;
`;

const StartButton = styled.TouchableOpacity`
  margin-top: ${SIZES.padding * 2}px;
  width: 70%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const StartText = styled.Text`
  color: ${COLORS.white};
`;

const StyledLinearGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
