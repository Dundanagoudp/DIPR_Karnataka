import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Header,
  HeaderLeft,
  HeaderRight,
  Subtitle,
  Title,
  AccountText,
  StyledLink,
  Form,
  FormGroup,
  Label,
  Input,
  GridContainer,
  SubmitButton,
} from "./SignUp-Page.styles";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    contact: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up:", formData);
  };

  return (
    <Container>
      <Card>
        <Header>
          <HeaderLeft>
            <Subtitle>
              Welcome to <span className="highlight">DIPR</span>
            </Subtitle>
            <Title>Sign up</Title>
          </HeaderLeft>
          <HeaderRight>
            <AccountText>Have an Account ?</AccountText>
            <StyledLink as={Link} to="/signin">
              Sign in
            </StyledLink>
          </HeaderRight>
        </Header>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Enter your username or email address</Label>
            <Input
              type="text"
              placeholder="Username or email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </FormGroup>

          <GridContainer>
            <FormGroup>
              <Label>User name</Label>
              <Input
                type="text"
                placeholder="User name"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label>Contact Number</Label>
              <Input
                type="tel"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </FormGroup>
          </GridContainer>

          <FormGroup>
            <Label>Enter your Password</Label>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </FormGroup>

          <SubmitButton type="submit">Sign up</SubmitButton>
        </Form>
      </Card>
    </Container>
  );
};

export default SignUp;
