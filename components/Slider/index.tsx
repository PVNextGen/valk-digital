import styled from "styled-components";
import React from "react";

import theme from "utils/theme";
import pricing from "utils/pricing";
import { Deal } from "schema";

const SliderItems = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Title = styled.h1`
  padding: 20px 16px 0 16px;
`;

const SliderItem = styled.div`
  width: 280px;
  height: 268px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  margin: 10px 16px;
  flex: 0 0 auto;
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 268px;
  position: relative;
  overflow: hidden;
`;

const Label = styled.div`
  font-size: 12px;
  line-height: 16px;
  position: absolute;
  top: 18px;
  right: 18px;
  border-radius: 16px;
  color: ${theme.white};
  background: ${theme.purple};
  padding: 4px 12px;
`;

const Info = styled.div`
  color: ${theme.white};
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  bottom: 8px;
  left: 20px;
`;

const Content = styled.div`
  width: 100%;
  padding: 16px;
`;

const SubTitle = styled.h2``;

const Description = styled.div`
  color: ${theme.black};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

const PrePrice = styled.div`
  font-size: 12px;
  line-height: 26px;
  margin-right: 5px;
`;

const Price = styled.div`
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

interface ImageProps {
  image: string;
}

interface Props {
  deals: Array<Deal>;
  openDetailPage: (active: boolean) => void;
  setSelectedItem: (item: Deal) => void;
}

const Slider = ({ deals, openDetailPage, setSelectedItem }: Props) => (
  <>
    <Title>Top zomer deals</Title>

    <SliderItems>
      {deals.map((item) => (
        <SliderItem
          key={item.title}
          onClick={() => {
            setSelectedItem(item);
            openDetailPage(true);
          }}
        >
          <ImageWrapper>
            <img src={item.image} />
            <Label>Erg populair</Label>
            <Info>Beschikbaar voor {item.hotels.length} hotels</Info>
          </ImageWrapper>
          <Content>
            <SubTitle>{item.title}</SubTitle>
            <Description>{item.description}</Description>
            <Price>
              <PrePrice>p.p. vanaf</PrePrice> {`${pricing(item.price)},-`}
            </Price>
          </Content>
        </SliderItem>
      ))}
    </SliderItems>
  </>
);

export default Slider;
