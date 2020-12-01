import React from 'react';

import {COLORS, icons, images, SIZES} from '../constants';

// style
import styled from 'styled-components/native';

// components
import OptionItem from '../components/Home/OptionItem';
import {FlatList, ImageSourcePropType} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  // navigation
  const navigation = useNavigation();

  // Dummy Data
  const [destinations, setDestinations] = React.useState([
    {
      id: 0,
      name: 'Ski Villa',
      img: images.skiVilla,
    },
    {
      id: 1,
      name: 'Climbing Hills',
      img: images.climbingHills,
    },
    {
      id: 2,
      name: 'Frozen Hills',
      img: images.frozenHills,
    },
    {
      id: 3,
      name: 'Beach',
      img: images.beach,
    },
  ]);

  // Render
  function renderDestinations({
    item,
    index,
  }: {
    item: {id: number; name: string; img: ImageSourcePropType};
    index: number;
  }) {
    let destinationStyle = {};

    if (index == 0) {
      destinationStyle = {marginLeft: SIZES.padding};
    }

    return (
      <DestinationItem
        style={destinationStyle}
        onPress={() => navigation.navigate('DestinationDetail')}>
        <DestinationImage source={item.img} resizeMode="cover" />
        <DestinationText>{item.name}</DestinationText>
      </DestinationItem>
    );
  }

  return (
    <Container>
      {/* Banner */}
      <BannerContainer>
        <Banner source={images.homeBanner} resizeMode="cover" />
      </BannerContainer>
      {/* Options */}
      <OptionsContainer>
        <Options>
          <OptionItem
            icon={icons.airplane}
            bgColor={['#46aeff', '#5884ff']}
            label="Flight"
            onPress={() => {
              console.log('Flight');
            }}
          />
          <OptionItem
            icon={icons.train}
            bgColor={['#fddf90', '#fcda13']}
            label="Train"
            onPress={() => {
              console.log('Train');
            }}
          />
          <OptionItem
            icon={icons.bus}
            bgColor={['#e973ad', '#da5df2']}
            label="Bus"
            onPress={() => {
              console.log('Bus');
            }}
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={['#fcaba8', '#fe6bba']}
            label="Taxi"
            onPress={() => {
              console.log('Taxi');
            }}
          />
        </Options>
        <Options>
          <OptionItem
            icon={icons.bed}
            bgColor={['#ffc465', '#ff9c5f']}
            label="Hotel"
            onPress={() => {
              console.log('Hotel');
            }}
          />
          <OptionItem
            icon={icons.eat}
            bgColor={['#7cf1fb', '#4ebefd']}
            label="Eats"
            onPress={() => {
              console.log('Eats');
            }}
          />
          <OptionItem
            icon={icons.compass}
            bgColor={['#7be993', '#46caaf']}
            label="Adventure"
            onPress={() => {
              console.log('Adventure');
            }}
          />
          <OptionItem
            icon={icons.event}
            bgColor={['#fca397', '#fc7b6c']}
            label="Event"
            onPress={() => {
              console.log('Event');
            }}
          />
        </Options>
      </OptionsContainer>
      {/* Destination */}
      <DestinationContainer>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderDestinations}
        />
      </DestinationContainer>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;

// Banner
const BannerContainer = styled.View`
  flex: 1;
  margin-top: ${SIZES.base}px;
  padding: 0px ${SIZES.padding}px;
`;

const Banner = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

// Options
const OptionsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const Options = styled.View`
  flex-direction: row;
  margin-top: ${SIZES.padding}px;
  padding: 0px ${SIZES.base}px;
`;

// Destination
const DestinationContainer = styled.View`
  flex: 1;
`;

const DestinationItem = styled.TouchableOpacity`
  justify-content: center;
  margin: 0px ${SIZES.base}px;
`;

const DestinationImage = styled.Image`
  width: ${SIZES.width * 0.28}px;
  height: 82%;
  border-radius: 15px;
`;

const DestinationText = styled.Text`
  margin-top: ${SIZES.base / 2}px;
`;
