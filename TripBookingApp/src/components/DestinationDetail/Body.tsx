import React from 'react';

// constant
import {icons, SIZES} from '../../constants';

// style
import styled from 'styled-components/native';
import IconLabel from './IconLabel';
import About from './About';

const Body = () => {
  return (
    <Container>
      {/* Icons */}
      <Icons>
        <IconLabel icon={icons.villa} label="Villa" />
        <IconLabel icon={icons.parking} label="Parking" />
        <IconLabel icon={icons.wind} label="4 °C" />
      </Icons>
      {/* About */}
      <About />
    </Container>
  );
};

export default Body;

const Container = styled.View`
  flex: 1.5;
`;

const Icons = styled.View`
  flex-direction: row;
  margin-top: ${SIZES.base}px;
  padding: 0px ${SIZES.padding * 2}px;
  justify-content: space-between;
`;
