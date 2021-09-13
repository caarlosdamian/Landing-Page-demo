import styled from "styled-components";
import Search from "../../img/search.png";
import {mobile} from '../../responsive'
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 150px;
  padding: 20px;
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  ${mobile({ width:"50px" })}

`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
    margin-top: 10px;
    text-align: center;
  ${mobile({ fontSize:"14px" })}

`;

const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet consectrtur.</Text>
    </Container>
  );
};

export default MiniCard;
