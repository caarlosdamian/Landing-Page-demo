import styled from "styled-components";
import PriceCard from "../PriceCard/PriceCard";
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = () => {
  return <Container>
      <PriceCard price="10" type="Basic"/>
      <PriceCard price="20" type="Premium"/>
      <PriceCard price="30" type="Advance"/>
  </Container>;
};

export default Price;
