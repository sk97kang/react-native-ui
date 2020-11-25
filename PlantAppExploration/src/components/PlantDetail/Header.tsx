import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Constants
import {COLORS, FONTS, icons, SIZES} from '../../constants';

// Style
import styled from 'styled-components/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ActionContainer>
        <BackButtonContainer>
          <BackButton
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <BackIamge source={icons.back} resizeMode="contain" />
          </BackButton>
        </BackButtonContainer>
        <CaptureButton
          onPress={() => {
            console.log('Focus on pressed');
          }}>
          <CaptureImage source={icons.focus} resizeMode="contain" />
        </CaptureButton>
      </ActionContainer>
      <TitleContainer>
        <Title>
          <TitleText>Glory Mantas</TitleText>
        </Title>
        <DummySpace></DummySpace>
      </TitleContainer>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  position: absolute;
  top: 50px;
  left: ${SIZES.padding}px;
  right: ${SIZES.padding}px;
`;

const ActionContainer = styled.View`
  flex-direction: row;
`;

const BackButtonContainer = styled.View`
  flex: 1;
`;

const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const BackIamge = styled.Image`
  width: 20px;
  height: 20px;
`;

const CaptureButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

const CaptureImage = styled.Image`
  width: 25px;
  height: 25px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  margin-top: 10%;
`;

const Title = styled.View`
  flex: 1;
`;

const TitleText = styled.Text`
  color: ${COLORS.white};
  font-family: ${FONTS.largeTitle.fontFamily};
  font-size: ${FONTS.largeTitle.fontSize}px;
  line-height: ${FONTS.largeTitle.lineHeight}px;
`;

const DummySpace = styled.View`
  flex: 1;
`;
