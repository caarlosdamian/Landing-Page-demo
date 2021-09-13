import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  ${mobile({ padding: "10px", marginRight: "0px", marginBottom: "10px" })}
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  ${mobile({ fontSize: "20px" })}
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0px;
  border: 1.5px solid crimson;
  background-color: white;
  color: crimson;
  border-radius: 20px;
  ${mobile({ display: "none" })}
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0px;
  ${mobile({ margin: "15px 0", fontsize: "15px" })}
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  ${mobile({ padding: "10px", fontsize: "12px" })}
`;

const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>

      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>{" "}
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
