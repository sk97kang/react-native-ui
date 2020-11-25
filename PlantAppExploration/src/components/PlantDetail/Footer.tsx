import React from 'react';

// Constants
import {COLORS, FONTS, icons, SIZES} from '../../constants';

// Style
import styled from 'styled-components/native';

const iamgeTintColor = {
  tintColor: COLORS.secondary,
};

const Footer = () => {
  return (
    <Container>
      <ActionButton
        onPress={() => {
          console.log('Take Action');
        }}>
        <ActionText>Take Action</ActionText>
        <ActionImage source={icons.chevron} resizeMode="contain" />
      </ActionButton>

      <GrowContainer>
        <GrowText>Almost 2 weeks of growing time</GrowText>
        <GrowImage
          source={icons.downArrow}
          resizeMode="contain"
          style={[iamgeTintColor]}
        />
      </GrowContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: ${SIZES.padding}px 0px;
`;

const ActionButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding: 0px ${SIZES.padding}px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: ${COLORS.primary};
`;

const ActionText = styled.Text`
  color: ${COLORS.white};
  font-family: ${FONTS.h2.fontFamily};
  font-size: ${FONTS.h2.fontSize}px;
  line-height: ${FONTS.h2.lineHeight}px;
`;

const ActionImage = styled.Image`
  margin-left: ${SIZES.padding}px;
  width: 20px;
  height: 20px;
`;

const GrowContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px ${SIZES.padding}px;
`;

const GrowText = styled.Text`
  flex: 1;
  color: ${COLORS.secondary};
  font-family: ${FONTS.h3.fontFamily};
  font-size: ${FONTS.h3.fontSize}px;
  line-height: ${FONTS.h3.lineHeight}px;
`;

const GrowImage = styled.Image`
  margin-left: ${SIZES.base}px;
  width: 20px;
  height: 20px;
`;
