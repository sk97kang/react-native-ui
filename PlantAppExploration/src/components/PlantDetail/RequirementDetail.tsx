import React from 'react';
import {ImageSourcePropType} from 'react-native';

// Constants
import {COLORS, FONTS, SIZES} from '../../constants';

// Style
import styled from 'styled-components/native';

interface RequirementDetailProps {
  icon: ImageSourcePropType;
  label: string;
  detail: string;
}

const imageTintColor = {tintColor: COLORS.secondary};

const RequirementDetail = ({icon, label, detail}: RequirementDetailProps) => {
  return (
    <Container>
      <LeftContainer>
        <Image source={icon} resizeMode="cover" style={[imageTintColor]} />
        <Label>{label}</Label>
      </LeftContainer>
      <RightContainer>
        <Detail>{detail}</Detail>
      </RightContainer>
    </Container>
  );
};

export default RequirementDetail;

const Container = styled.View`
  flex-direction: row;
`;

const LeftContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const RightContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

const Label = styled.Text`
  margin-left: ${SIZES.base}px;
  color: ${COLORS.secondary};
  font-family: ${FONTS.h2.fontFamily};
  font-size: ${FONTS.h2.fontSize}px;
  line-height: ${FONTS.h2.lineHeight}px;
`;

const Detail = styled.Text`
  margin-left: ${SIZES.base}px;
  color: ${COLORS.gray};
  font-family: ${FONTS.h2.fontFamily};
  font-size: ${FONTS.h2.fontSize}px;
  line-height: ${FONTS.h2.lineHeight}px;
`;
