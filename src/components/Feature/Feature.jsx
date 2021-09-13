import styled from "styled-components";
import Phone from "../../img/app.png";
import AnimatedShapes from "../AnimatedShapes/AnimatedShapes";
import { mobile } from "../../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection:"column",padding:"30px" })}

`;
const Left = styled.div`
  width: 50%;
  ${mobile({ display:"none" })}

`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ width:"100%" })}

`;
const Image = styled.img`
  width: 70%;
  
`;
const Title = styled.span`
  font-size: 70px;
  ${mobile({ fontSize:"50px" })}

`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 200px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
`;
const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={Phone} />
      </Left>
      <Right>
        <Title>
          <b>good</b> desing <br />
          <b>good</b> bussiness
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
