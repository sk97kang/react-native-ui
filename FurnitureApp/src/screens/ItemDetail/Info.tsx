import React from 'react';
import {useRoute} from '@react-navigation/native';

import {COLORS, FONTS, SIZES} from '../../constants';
import styled from 'styled-components/native';

import Header from './Header';

const Info = () => {
  const route = useRoute();
  const {itemInfo}: any = route.params;
  if (!itemInfo) {
    return null;
  }

  return (
    <Container source={itemInfo.image} resizeMode="cover">
      <Header />
      {/* Product Tag */}
      <PointOuter>
        <PointInner></PointInner>
      </PointOuter>
      <PointInfo>
        <PointInfoProductName>
          <PointInfoProductNameText style={FONTS.h3}>
            {itemInfo.productName}
          </PointInfoProductNameText>
        </PointInfoProductName>
        <PointInfoPrice>
          <PointInfoPriceText style={FONTS.h3}>
            $ {itemInfo.price.toFixed(2)}
          </PointInfoPriceText>
        </PointInfoPrice>
      </PointInfo>

      <Content>
        <Title style={FONTS.body2}>Furniture</Title>
        <ProductName style={FONTS.h1}>{itemInfo.productName}</ProductName>
      </Content>
    </Container>
  );
};

export default Info;

const Container = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const PointOuter = styled.View`
  position: absolute;
  top: 45%;
  left: 15%;
  border-radius: 80px;
  background-color: ${COLORS.transparentLightGray};
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

const PointInner = styled.View`
  border-radius: 20px;
  background-color: ${COLORS.blue};
  height: 10px;
  width: 10px;
`;

const PointInfo = styled.View`
  position: absolute;
  top: 43%;
  left: 30%;
  flex-direction: row;
  padding: ${SIZES.radius * 1.5}px;
  background-color: ${COLORS.transparentLightGray};
  width: 50%;
  border-radius: 10px;
`;

const PointInfoProductName = styled.View`
  flex: 2;
`;

const PointInfoProductNameText = styled.Text`
  color: ${COLORS.darkGray};
`;

const PointInfoPrice = styled.View`
  flex: 1.5;
  align-items: flex-end;
  justify-content: flex-end;
`;

const PointInfoPriceText = styled.Text`
  color: ${COLORS.darkGreen};
`;

const Content = styled.View`
  position: absolute;
  bottom: 20%;
  left: ${SIZES.padding}px;
  right: ${SIZES.padding}px;
`;

const Title = styled.Text`
  color: ${COLORS.lightGray2};
`;

const ProductName = styled.Text`
  margin-top: ${SIZES.radius}px;
  color: ${COLORS.white};
`;
