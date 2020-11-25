import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';

// Constants
import {images, theme} from '../../constants';

// Image
const {onboarding1, onboarding2, onboarding3} = images;

// Theme
const {COLORS, FONTS, SIZES} = theme;

// Dummy Data
const onBoardings = [
  {
    title: "Let's Travelling",
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding2,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding3,
  },
];

const OnBoarding = () => {
  const [completed, setCompleted] = useState(false);

  const scrollX = new Animated.Value(0);

  useEffect(() => {
    // To check if user has finished scrolling the onboarding pages
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeAllListeners();
  }, []);

  // Render
  function rednerContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onBoardings.map((item, index) => (
          <OnBoardingContainer key={index}>
            {/* Image */}
            <ImageContainer>
              <Image source={item.img} resizeMode="cover" />
            </ImageContainer>
            {/* Text */}
            <Info>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Info>
            {/* Button */}
            <Button>
              <ButtonTitle>{completed ? "Let's Go" : 'Skip'}</ButtonTitle>
            </Button>
          </OnBoardingContainer>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dopPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <DotContainer>
        {onBoardings.map((item, index) => {
          const opacity = dopPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dopPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          const animationStyle = {
            width: dotSize,
            height: dotSize,
            opacity: opacity,
          };
          return <Dot key={`dot-${index}`} style={animationStyle} />;
        })}
      </DotContainer>
    );
  }

  return (
    <Container>
      <Content>{rednerContent()}</Content>
      <Dots>{renderDots()}</Dots>
    </Container>
  );
};

export default OnBoarding;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
`;

const Content = styled.View``;

const Dots = styled.View`
  position: absolute;
  bottom: ${SIZES.height > 700 ? '30%' : '20%'};
`;

const OnBoardingContainer = styled.View`
  width: ${SIZES.width}px;
`;

const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Info = styled.View`
  position: absolute;
  bottom: 10%;
  left: 40px;
  right: 40px;
`;

const Title = styled.Text`
  font-family: ${FONTS.h1.fontFamily};
  font-size: ${FONTS.h1.fontSize}px;
  line-height: ${FONTS.h1.lineHeight}px;
  color: ${COLORS.gray};
  text-align: center;
`;

const Description = styled.Text`
  font-family: ${FONTS.body3.fontFamily};
  font-size: ${FONTS.body3.fontSize}px;
  line-height: ${FONTS.body3.lineHeight}px;
  color: ${COLORS.gray};
  margin-top: ${SIZES.base}px;
  text-align: center;
`;

const DotContainer = styled(Animated.View)`
  flex-direction: row;
  height: ${SIZES.padding}px;
  align-items: center;
  justify-content: center;
`;

const Dot = styled(Animated.View)`
  border-radius: ${SIZES.radius}px;
  background-color: ${COLORS.blue};
  margin: 0px ${SIZES.radius / 2}px;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 60px;
  padding-left: 20px;
  justify-content: center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: ${COLORS.blue};
`;

const ButtonTitle = styled.Text`
  font-family: ${FONTS.h1.fontFamily};
  font-size: ${FONTS.h1.fontSize}px;
  line-height: ${FONTS.h1.lineHeight}px;
  color: ${COLORS.white};
`;
