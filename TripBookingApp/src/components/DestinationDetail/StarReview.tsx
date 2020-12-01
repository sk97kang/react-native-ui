import React from 'react';

// constant
import {COLORS, FONTS, icons, SIZES} from '../../constants';

// style
import styled from 'styled-components/native';

interface StarReviewProps {
  rate: number;
}

const StarReview = ({rate}: StarReviewProps) => {
  let starComponents = [];
  let fullStar = Math.floor(rate);
  let noStar = Math.floor(5 - rate);
  let halfStar = 5 - fullStar - noStar;

  // Full Star
  for (let i = 0; i < fullStar; i++) {
    starComponents.push(
      <Star key={`full-${i}`} source={icons.starFull} resizeMode="cover" />,
    );
  }

  // Half Star
  for (let i = 0; i < halfStar; i++) {
    starComponents.push(
      <Star key={`half-${i}`} source={icons.starHalf} resizeMode="cover" />,
    );
  }

  // No Star
  for (let i = 0; i < noStar; i++) {
    starComponents.push(
      <Star key={`empty=${i}`} source={icons.starEmpty} resizeMode="cover" />,
    );
  }

  return (
    <Container>
      {starComponents}
      <StarCount style={FONTS.body3}>{rate}</StarCount>
    </Container>
  );
};

export default StarReview;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Star = styled.Image`
  width: 20px;
  height: 20px;
`;

const StarCount = styled.Text`
  margin-left: ${SIZES.base}px;
  color: ${COLORS.gray};
`;
