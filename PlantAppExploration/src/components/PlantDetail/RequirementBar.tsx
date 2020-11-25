import React from 'react';
import {ImageSourcePropType} from 'react-native';

// Constants
import {COLORS, SIZES} from '../../constants';

// Style
import styled from 'styled-components/native';

interface RequirementBarProps {
  icon: ImageSourcePropType;
  barPercentage: string;
}

const imageTintColor = {tintColor: COLORS.secondary};

const RequirementBar = ({icon, barPercentage}: RequirementBarProps) => {
  return (
    <Container>
      <ImageContainer>
        <Image source={icon} resizeMode="cover" style={[imageTintColor]} />
      </ImageContainer>

      {/* Bar */}
      <BackgroundBar />
      <ForegroundBar barPercentage={barPercentage} />
    </Container>
  );
};

export default RequirementBar;

const Container = styled.View`
  height: 60px;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${COLORS.gray};
`;

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

const BackgroundBar = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  margin-top: ${SIZES.base}px;
  background-color: ${COLORS.gray};
`;

const ForegroundBar = styled.View<{barPercentage: string}>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({barPercentage}) => barPercentage};
  height: 3px;
  margin-top: ${SIZES.base}px;
  background-color: ${COLORS.primary};
`;
