import styled from "styled-components";
import Map from "../../img/map.png";
import Phone from "../../img/phone.png";
import Send from "../../img/send.png";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  ${mobile({ flexDirection: "column" })}
`;
const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h1`
  margin-left: 210px;
  margin-bottom: 20px;
  ${mobile({ marginLeft: "50px" })}
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column" })}
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  ${mobile({ height: "50%", marginRight: "0px" })}
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ height: "50%"})}

`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  ${mobile({ padding: "5px"})}

`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  ${mobile({ padding: "5px",marginTop:"20px"})}

`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  ${mobile({ padding: "5px",fontSize:"14px"})}
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "100%",marginTop:"20px" })}

`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  ${mobile({  marginBottom: "20px" })}
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  ${mobile({  width: "15px" })}

`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  ${mobile({  fontSize: "15px" })}

`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions?
            <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="YourMessage" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue ST., New Yorrk, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 123 6456 789</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>carlos@touchof.tech</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
