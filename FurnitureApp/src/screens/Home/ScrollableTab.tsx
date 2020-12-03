import React from 'react';

import {COLORS, FONTS, SIZES} from '../../constants';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface ScrollableTabProps {
  tabList: any;
  selectedTab: any;
  onPress: (item: any) => void;
}

const ScrollableTab = ({tabList, selectedTab, onPress}: ScrollableTabProps) => {
  const renderItem = ({item}: any) => (
    <Button>
      <ButtonTitle style={FONTS.h2} onPress={() => onPress(item)}>
        {item.name}
      </ButtonTitle>
      {selectedTab.id === item.id && (
        <IndicatorContainer>
          <Indicator></Indicator>
        </IndicatorContainer>
      )}
    </Button>
  );

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    </Container>
  );
};

export default ScrollableTab;

const Container = styled.View`
  margin-top: ${SIZES.padding}px;
`;

const Button = styled.TouchableOpacity`
  margin: 0px ${SIZES.padding}px;
`;

const ButtonTitle = styled.Text`
  color: ${COLORS.secondary};
`;

const IndicatorContainer = styled.View`
  align-items: center;
  margin-top: ${SIZES.base}px;
`;

const Indicator = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${COLORS.blue};
`;
