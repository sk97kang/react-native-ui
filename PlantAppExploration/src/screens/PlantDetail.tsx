import React from 'react';

// Constant
import {icons, images, COLORS, SIZES, FONTS} from '../constants';

// Style
import styled from 'styled-components/native';

// Component
import {
  Footer,
  Header,
  RequirementBar,
  RequirementDetail,
} from '../components/PlantDetail';

const PlantDetail = () => {
  // Render

  function renderHeader() {
    return <Header />;
  }

  function renderRequirementsBar() {
    return (
      <RequirementsBarContainer>
        <RequirementBar icon={icons.sun} barPercentage="50%" />
        <RequirementBar icon={icons.drop} barPercentage="25%" />
        <RequirementBar icon={icons.temperature} barPercentage="80%" />
        <RequirementBar icon={icons.garden} barPercentage="30%" />
        <RequirementBar icon={icons.seed} barPercentage="50%" />
      </RequirementsBarContainer>
    );
  }

  function renderRequirements() {
    return (
      <Requirements>
        <RequirementDetail icon={icons.sun} label="Sunlight" detail="15°C" />
        <RequirementDetail
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail
          icon={icons.temperature}
          label="Room Temp"
          detail="25°C"
        />
        <RequirementDetail icon={icons.garden} label="Soil" detail="3 Kg" />
        <RequirementDetail
          icon={icons.seed}
          label="Fertilizer"
          detail="150 Mg"
        />
      </Requirements>
    );
  }

  function renderFooter() {
    return <Footer />;
  }

  return (
    <Container>
      {/* Banner Photo */}
      <BannerContainer>
        <Banner source={images.bannerBg} resizeMode="cover" />
      </BannerContainer>
      {/* Requirements */}
      <RequirementsContainer>
        <RequirementsTitle>Requirements</RequirementsTitle>
        {renderRequirementsBar()}
        {renderRequirements()}
        {renderFooter()}
      </RequirementsContainer>
      {renderHeader()}
    </Container>
  );
};

export default PlantDetail;

const Container = styled.View`
  flex: 1;
`;

const BannerContainer = styled.View`
  height: 35%;
`;

const Banner = styled.Image`
  width: 100%;
  height: 100%;
`;

const RequirementsContainer = styled.View`
  flex: 1;
  margin-top: -40px;
  background-color: ${COLORS.lightGray};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: ${SIZES.padding}px 0px;
`;

const RequirementsTitle = styled.Text`
  padding: 0px ${SIZES.padding}px;
  color: ${COLORS.secondary};
  font-family: ${FONTS.h1.fontFamily};
  font-size: ${FONTS.h1.fontSize}px;
  line-height: ${FONTS.h1.lineHeight}px;
`;

const RequirementsBarContainer = styled.View`
  flex-direction: row;
  margin-top: ${SIZES.padding}px;
  padding: 0px ${SIZES.padding}px;
  justify-content: space-between;
`;

const Requirements = styled.View`
  flex: 3;
  margin-top: ${SIZES.padding}px;
  padding: 0px ${SIZES.padding}px;
  justify-content: space-around;
`;
