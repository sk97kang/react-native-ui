import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Constants
import {COLORS, FONTS, SIZES, images} from '../../constants';

// Style
import styled from 'styled-components/native';

const TodaysShare = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Background>
        <Main>
          <Header>
            <Title>Today's Share</Title>
            <ActionButton onPress={() => console.log('See All On Pressed')}>
              <ActionTitle>See All</ActionTitle>
            </ActionButton>
          </Header>
          <Content>
            <LeftImageContainer>
              <TopImage onPress={() => navigation.navigate('PlantDetail')}>
                <Image source={images.plant5} />
              </TopImage>
              <BottomImage onPress={() => navigation.navigate('PlantDetail')}>
                <Image source={images.plant6} />
              </BottomImage>
            </LeftImageContainer>
            <RightImageContainer>
              <RightImage onPress={() => navigation.navigate('PlantDetail')}>
                <Image source={images.plant7} />
              </RightImage>
            </RightImageContainer>
          </Content>
        </Main>
      </Background>
    </Container>
  );
};

export default TodaysShare;

const Container = styled.View`
  height: 50%;
  background-color: ${COLORS.lightGray};
`;

const Background = styled.View`
  flex: 1;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: ${COLORS.white};
`;

const Main = styled.View`
  margin: 0px ${SIZES.padding}px;
  margin-top: ${SIZES.font}px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  color: ${COLORS.secondary};
  font-family: ${FONTS.h2.fontFamily};
  font-size: ${FONTS.h2.fontSize}px;
  line-height: ${FONTS.h2.lineHeight}px;
`;

const ActionButton = styled.TouchableOpacity``;

const ActionTitle = styled.Text``;

const Content = styled.View`
  flex-direction: row;
  height: 88%;
  margin-top: ${SIZES.base}px;
`;

const LeftImageContainer = styled.View`
  flex: 1;
`;

const RightImageContainer = styled.View`
  flex: 1.3;
`;

const TopImage = styled.TouchableOpacity`
  flex: 1;
`;

const BottomImage = styled.TouchableOpacity`
  flex: 1;
  margin-top: ${SIZES.font}px;
`;

const RightImage = styled.TouchableOpacity`
  flex: 1;
  margin-left: ${SIZES.font}px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
