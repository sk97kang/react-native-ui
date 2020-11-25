import React from 'react';

// Constants
import {COLORS, FONTS, icons, SIZES, images} from '../../constants';

// Style
import styled from 'styled-components/native';

const AddedFriend = () => {
  // Dummy Data
  const [friendList, setFriendList] = React.useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
    },
  ]);

  // Render
  function renderFriendsComponent() {
    if (friendList.length === 0) {
      return null;
    } else if (friendList.length <= 3) {
      return friendList.map((item, index) => (
        <FriendContainer key={`friend-${index}`} first={index === 0}>
          <Friend source={item.img} resizeMode="cover" />
        </FriendContainer>
      ));
    } else {
      return (
        <FriendTextContainer>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <FriendContainer key={`friend-${index}`} first={index === 0}>
                  <Friend source={item.img} resizeMode="cover" />
                </FriendContainer>
              );
            }
          })}
          <FriendText>+{friendList.length - 3} More</FriendText>
        </FriendTextContainer>
      );
    }
  }

  return (
    <Container>
      <Background>
        <Main>
          <Title>Added Friends</Title>
          <Subtitle>{friendList.length} Total</Subtitle>
          <FriendsContainer>
            <Friends>{renderFriendsComponent()}</Friends>
            <AddFriendContainer>
              <ActionTitle>Add New</ActionTitle>
              <ActionButton
                onPress={() => {
                  console.log('Add friend on pressed');
                }}>
                <ActionImage source={icons.plus} resizeMode="contain" />
              </ActionButton>
            </AddFriendContainer>
          </FriendsContainer>
        </Main>
      </Background>
    </Container>
  );
};

export default AddedFriend;

const Container = styled.View`
  height: 20%;
  background-color: ${COLORS.lightGray};
`;

const Background = styled.View`
  flex: 1;
  background-color: ${COLORS.lightGray};
`;

const Main = styled.View`
  margin: 0px ${SIZES.padding}px;
  margin-top: ${SIZES.radius}px;
`;

const Title = styled.Text`
  color: ${COLORS.secondary};
  font-family: ${FONTS.h2.fontFamily};
  font-size: ${FONTS.h2.fontSize}px;
  line-height: ${FONTS.h2.lineHeight}px;
`;

const Subtitle = styled.Text`
  color: ${COLORS.secondary};
  font-family: ${FONTS.body3.fontFamily};
  font-size: ${FONTS.body3.fontSize}px;
  line-height: ${FONTS.body3.lineHeight}px;
`;

// Firend

const FriendsContainer = styled.View`
  flex-direction: row;
  height: 60%;
`;

const Friends = styled.View`
  flex: 1.3;
  flex-direction: row;
  align-items: center;
`;

const AddFriendContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const FriendContainer = styled.View<{first: boolean}>`
  flex-direction: row;
  margin-left: ${({first}) => (first ? 0 : -20)}px;
`;

const Friend = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 3px;
  border-color: ${COLORS.primary};
`;

const FriendTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FriendText = styled.Text`
  margin-left: 5px;
  color: ${COLORS.secondary};
  font-family: ${FONTS.body3.fontFamily};
  font-size: ${FONTS.body3.fontSize}px;
  line-height: ${FONTS.body3.lineHeight}px;
`;

const ActionTitle = styled.Text`
  color: ${COLORS.secondary};
  font-family: ${FONTS.body3.fontFamily};
  font-size: ${FONTS.body3.fontSize}px;
  line-height: ${FONTS.body3.lineHeight}px;
`;

const ActionButton = styled.TouchableOpacity`
  margin-left: ${SIZES.base}px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.gray};
`;

const ActionImage = styled.Image`
  width: 20px;
  height: 20px;
`;
