import React from 'react';
import {FlatList} from 'react-native';

// Constants
import {COLORS, FONTS, icons, SIZES} from '../../constants';

// Style
import styled from 'styled-components/native';

interface NewPlantsProps {
  newPlants: any;
}

const NewPlants = ({newPlants}: NewPlantsProps) => {
  // Render
  function renderNewPlants(item: any, index: number) {
    return (
      <PlantContainer>
        <PlantImage source={item.img} resizeMode="cover" />
        <PlantTag>
          <PlantTagText>{item.name}</PlantTagText>
        </PlantTag>
        <PlantFavourite onPress={() => console.log('favourite On Pressed')}>
          <PlantFavouriteImage
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
          />
        </PlantFavourite>
      </PlantContainer>
    );
  }

  return (
    <Container>
      <Background>
        <ContentContainer>
          <Header>
            <Title>New Plants</Title>
            <ActionButton onPress={() => console.log('Focus on password')}>
              <ActionImage source={icons.focus} resizeMode="contain" />
            </ActionButton>
          </Header>
          <List>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={newPlants}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item, index}) => renderNewPlants(item, index)}
            />
          </List>
        </ContentContainer>
      </Background>
    </Container>
  );
};

export default NewPlants;

// New Plants
const Container = styled.View`
  height: 30%;
  background-color: ${COLORS.white};
`;

const Background = styled.View`
  flex: 1;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: ${COLORS.primary};
`;

const ContentContainer = styled.View`
  margin: 0px ${SIZES.padding}px;
  margin-top: ${SIZES.padding * 2}px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  color: ${COLORS.white};
  font-family: ${FONTS.h2.fontFamily};
  font-size: ${FONTS.h2.fontSize}px;
  line-height: ${FONTS.h2.lineHeight}px;
`;

const ActionButton = styled.TouchableOpacity``;

const ActionImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const List = styled.View`
  margin-top: ${SIZES.base}px;
`;

const PlantContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0px ${SIZES.base}px;
`;

const PlantImage = styled.Image`
  width: ${SIZES.width * 0.23}px;
  height: 82%;
  border-radius: 15px;
`;

const PlantTag = styled.View`
  position: absolute;
  bottom: 17%;
  right: 0;
  background-color: ${COLORS.primary};
  padding: 0px ${SIZES.base}px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const PlantTagText = styled.Text`
  color: ${COLORS.white};
  font-family: ${FONTS.body4.fontFamily};
  font-size: ${FONTS.body4.fontSize}px;
  line-height: ${FONTS.body4.lineHeight}px;
`;

const PlantFavourite = styled.TouchableOpacity`
  position: absolute;
  top: 15%;
  left: 7px;
`;

const PlantFavouriteImage = styled.Image`
  width: 20px;
  height: 20px;
`;
