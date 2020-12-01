import React from 'react';
import {StyleSheet} from 'react-native';

// constant
import {COLORS, FONTS, images, SIZES} from '../../constants';

// style
import styled from 'styled-components/native';
import StarReview from './StarReview';
import HeaderButtons from './HeaderButtons';

const Header = () => {
  return (
    <Container>
      <Banner source={images.skiVillaBanner} resizeMode="cover" />
      <Content style={styles.shadow}>
        <InfoContainer>
          <Cover style={styles.shadow}>
            <CoverImage source={images.skiVilla} resizeMode="cover" />
          </Cover>

          <Info>
            <Title style={FONTS.h3}>Ski Villa</Title>
            <Subtitle style={FONTS.body3}>France</Subtitle>
            <StarReview rate={4.5} />
          </Info>
        </InfoContainer>

        <Description>
          <DescriptionText style={FONTS.body3}>
            Ski Villa offers simple rooms with mountain views in front of the
            ski lift to the Ski Resort
          </DescriptionText>
        </Description>
      </Content>

      <HeaderButtons />
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

const Container = styled.View`
  flex: 2;
`;

const Banner = styled.Image`
  width: 100%;
  height: 80%;
`;

// Content
const Content = styled.View`
  position: absolute;
  bottom: 5%;
  left: 5%;
  right: 5%;
  border-radius: 15px;
  padding: ${SIZES.padding}px;
  background-color: ${COLORS.white};
`;

const InfoContainer = styled.View`
  flex-direction: row;
`;

const Cover = styled.View``;

const CoverImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 15px;
`;

const Info = styled.View`
  margin: 0px ${SIZES.radius}px;
  justify-content: space-around;
`;

const Title = styled.Text``;

const Subtitle = styled.Text`
  color: ${COLORS.gray};
`;

const Description = styled.View`
  margin-top: ${SIZES.radius}px;
`;

const DescriptionText = styled.Text`
  color: ${COLORS.gray};
`;
