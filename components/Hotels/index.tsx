import styled from "styled-components";
import React from "react";

import { Hotel } from "schema";

const Item = styled.a`
  width: 100%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  height: 80px;
  width: 100%;
  display: flex;
  margin: 10px 0;
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

const Content = styled.div`
  padding: 10px;
`;

interface Props {
  hotels: Array<Hotel>;
}

const HotelItems = ({ hotels }: Props) => (
  <>
    {hotels.map((hotel) => (
      <Item key={hotel.code} onClick={() => alert(`${hotel.name}: is clicked`)}>
        <ImageWrapper>
          <img src={hotel.photo} />
        </ImageWrapper>
        <Content>{hotel.name}</Content>
      </Item>
    ))}
  </>
);

export default HotelItems;
