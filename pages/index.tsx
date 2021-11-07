import React, { useEffect, useState } from "react";
import styled from "styled-components";

import theme from "utils/theme";
import Container from "./container";
import Slider from "components/Slider";
import Deals from "components/Deals";
import DetailPage from "./detail";

import { Deal } from "schema";

const Header = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  border-bottom: 1px solid ${theme.grey};
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const [showDetailPage, openDetailPage] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Deal>();
  const [hotels, setHotels] = useState([]);
  const [deals, setDeals] = useState([]);

  const fetchDeals = () => {
    fetch("https://valkdigital-mock.netlify.app/api/v1/deals")
      .then((response) => response.json())
      .then((data) => setDeals(data.data));
  };

  const fetchHotels = () => {
    fetch("https://valkdigital-mock.netlify.app/api/v1/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data.data));
  };

  useEffect(() => {
    fetchDeals();
    fetchHotels();
  }, []);

  if (!deals && !hotels) {
    return null;
  }

  return (
    <>
      <Container>
        <Header>Deals</Header>
        <Slider
          deals={deals}
          openDetailPage={openDetailPage}
          setSelectedItem={setSelectedItem}
        />
        <Deals />
      </Container>
      {selectedItem && (
        <DetailPage
          deal={selectedItem}
          hotels={hotels}
          showDetailPage={showDetailPage}
          openDetailPage={openDetailPage}
        />
      )}
    </>
  );
};

export default Home;
