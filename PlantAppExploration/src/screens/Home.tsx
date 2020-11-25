import React from 'react';

// Constants
import {images} from '../constants';

// Style
import styled from 'styled-components/native';

// Components
import {AddedFriend, NewPlants, TodaysShare} from '../components/Home';

const Home = () => {
  // Dummy Data
  const [newPlants, setNewPlants] = React.useState([
    {
      id: 0,
      name: 'Plant 1',
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: 'Plant 2',
      img: images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: 'Plant 3',
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: 'Plant 4',
      img: images.plant4,
      favourite: false,
    },
  ]);

  return (
    <Container>
      {/* New Plants */}
      <NewPlants newPlants={newPlants} />
      {/* Today's Share */}
      <TodaysShare />
      {/* Added Friend */}
      <AddedFriend />
    </Container>
  );
};

export default Home;

const Container = styled.View`
  flex: 1;
`;
