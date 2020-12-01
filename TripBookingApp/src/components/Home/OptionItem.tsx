import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, FONTS, SIZES} from '../../constants';

import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';
import Icon from '../Icon';

interface OptionItemProsps {
  bgColor: [string, string];
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void;
}

const OptionItem = ({bgColor, icon, label, onPress}: OptionItemProsps) => {
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
    <Container onPress={onPress}>
      <IconContainer>
        <StyledLinearGradient
          style={shadow}
          colors={bgColor}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Icon
            source={icon}
            resizeMode="cover"
            tintColor={COLORS.white}
            size={30}
          />
        </StyledLinearGradient>
      </IconContainer>
      <Title style={FONTS.body3}>{label}</Title>
    </Container>
  );
};

export default OptionItem;

const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.View`
  width: 60px;
  height: 60px;
`;

const StyledLinearGradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const Title = styled.Text`
  margin-top: ${SIZES.base}px;
  color: ${COLORS.gray};
`;
