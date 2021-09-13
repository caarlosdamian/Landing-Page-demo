import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 10%;
  background-color: crimson;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px" })}
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
  ${mobile({ marginRight: "10px", fontSize: "15px" })}
`;
const Copyright = styled.span`
  ${mobile({  fontSize: "15px" })}

`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Damian {new Date().getFullYear()} &copy;</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
