import styled from "styled-components";
import React from "react";
import theme from "utils/theme";

const StyledDeals = styled.div``;

const Title = styled.h1`
  padding: 16px;
  border-bottom: 1px solid ${theme.grey};
`;

const Link = styled.a`
  border-bottom: 1px solid ${theme.grey};
  padding: 16px;
  font-family: "SourceSansPro";
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #${theme.black};
  display: flex;
`;

const dealsArray = [
  "Arragementen",
  "Valk Voordeel",
  "Feestdagen",
  "Last Minutes",
  "Non Refundables",
  "Early Birds",
];

const clickEvent = (item) => {
  alert(`${item}: is clicked`);
};

const Deals = () => {
  return (
    <StyledDeals>
      <Title>Alle deals</Title>
      {dealsArray.map((link: string) => (
        <Link
          title={link}
          alt={link}
          key={link}
          onClick={() => clickEvent(link)}
        >
          {link}
        </Link>
      ))}
    </StyledDeals>
  );
};

export default Deals;
