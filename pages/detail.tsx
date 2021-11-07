import styled from "styled-components";
import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import theme from "utils/theme";
import pricing from "utils/pricing";
import HotelItems from "components/Hotels";

import { Deal, Hotel } from "schema";

const Detail = styled.div<DetailProps>`
  z-index: 1;
  overflow-y: scroll;
  top: 0;
  right: ${(props) => (props.showDetailPage === true ? 0 : "-375px")};
  width: 375px;
  height: 100%;
  min-height: 100%;
  background: ${theme.white};
  position: absolute;
  transition: right 0.3s ease-in-out 0s;
`;

const CloseButton = styled.button`
  font-family: "SourceSansProBold";
  font-size: 30px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  top: 10px;
  left: 10px;
  color: ${theme.black};
  border: 0;
`;

const Description = styled.div`
  color: ${theme.black};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const Price = styled.div`
  font-size: 20px;
  line-height: 28px;
  padding: 16px 0 10px 0;
`;

const ListTitle = styled.div`
  font-family: "SourceSansProSemi";
  font-size: 16px;
  line-height: 24px;
  margin: 10px 0;
`;

const List = styled.ul`
  margin: 5px;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 16px;
  line-height: 24px;
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  padding: 16px;
  min-height: 100%;
`;

const Title = styled.h1``;

const StyledTabList = styled(TabList)`
  list-style-type: none;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  padding: 10px 0;
`;

const StyledTabs = styled(Tabs)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTab = styled(Tab)`
  padding: 5px;
  margin: 5px;
  &.selected {
    border-bottom: 2px solid ${theme.black};
  }
`;

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
`;

const Content = styled.div`
  padding: 20px 0;
`;

const Disclaimer = styled.div`
  font-style: italic;
  color: ${theme.grey};
`;

const BookNowWrapper = styled.div`
  background: ${theme.white};
  padding: 16px;
  position: sticky;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 16px 20px 16px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.4);
`;

const Button = styled.button`
  background: ${theme.orange};
  color: ${theme.white};
  display: flex;
  border: 0;
  padding: 12px 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "SourceSansPro";
  font-size: 16px;
  line-height: 24px;
`;

interface DetailProps {
  showDetailPage: boolean;
}

interface Props {
  deal: Deal;
  hotels: Array<Hotel>;
  showDetailPage: boolean;
  openDetailPage: (active: boolean) => void;
}

const DetailPage = ({
  deal,
  hotels,
  showDetailPage,
  openDetailPage,
}: Props) => {
  if (!deal && !hotels) {
    return null;
  }

  const dealHotels = deal.hotels.map((item) => item.id);
  const availableHotels = hotels.filter((hotel) =>
    dealHotels.includes(hotel.code)
  );

  return (
    <Detail showDetailPage={showDetailPage}>
      <HeaderImage>
        <CloseButton onClick={() => openDetailPage(false)}>X</CloseButton>
        <img src={deal.image} />
      </HeaderImage>

      <ContentWrapper>
        <Title>{deal.title}</Title>
        <Description>{deal.description}</Description>
        <Price>p.p. vanaf {`${pricing(deal.price)},-`}</Price>

        <StyledTabs
          selectedTabClassName="selected"
          selectedTabPanelClassName="selected"
        >
          <StyledTabList>
            <StyledTab>Beschrijving</StyledTab>
            <StyledTab>Beschikbare Hotels ({deal.hotels.length})</StyledTab>
          </StyledTabList>

          <StyledTabPanel>
            <ListTitle>Dit arrangement bevat</ListTitle>
            <List>
              {deal &&
                deal.features.map((item: string) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
            </List>

            <Content>{deal.content}</Content>
            <Disclaimer>{deal.disclaimer}</Disclaimer>
          </StyledTabPanel>
          <StyledTabPanel>
            <HotelItems hotels={availableHotels} />
          </StyledTabPanel>
        </StyledTabs>
      </ContentWrapper>

      <BookNowWrapper>
        <Button onClick={() => alert("Nu boeken: is clicked")}>
          Nu boeken
        </Button>
      </BookNowWrapper>
    </Detail>
  );
};

export default DetailPage;
