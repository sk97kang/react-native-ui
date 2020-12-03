import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {COLORS, FONTS, SIZES} from '../../constants';
import styled from 'styled-components/native';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

interface ScrollableCardProps {
  productList: any;
}

const ScrollableCard = ({productList}: ScrollableCardProps) => {
  const navigation = useNavigation();

  const renderCard = ({item}: any) => (
    <Card onPress={() => navigation.navigate('ItemDetail', {itemInfo: item})}>
      <Info>
        <Cover source={item.image} resizeMode="cover" />

        <Content>
          <Title style={FONTS.h3}>Furniture</Title>
          <ProductName style={FONTS.h2}>{item.productName}</ProductName>
        </Content>

        <Price>
          <H2 style={FONTS.h2}>$ {item.price.toFixed(2)}</H2>
        </Price>
      </Info>
    </Card>
  );

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={(item) => `${item.productId}`}
      />
    </Container>
  );
};

export default ScrollableCard;

const Container = styled.View`
  margin-top: ${SIZES.padding}px;
`;

const Card = styled.TouchableOpacity`
  margin-left: ${SIZES.padding}px;
`;

const Info = styled.View`
  width: ${SIZES.width / 2}px;
`;

const Cover = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${SIZES.radius * 2}px;
`;

const Content = styled.View`
  position: absolute;
  top: 15px;
  left: 10%;
  right: 10%;
`;

const Title = styled.Text`
  color: ${COLORS.lightGray2};
`;

const ProductName = styled.Text`
  margin-top: ${SIZES.base}px;
  color: ${COLORS.white};
`;

const Price = styled.View`
  position: absolute;
  bottom: 20px;
  left: 30px;
  border-radius: 15px;
  padding: 10px 15px;
  background-color: ${COLORS.transparentLightGray};
`;

const H2 = styled.Text``;
