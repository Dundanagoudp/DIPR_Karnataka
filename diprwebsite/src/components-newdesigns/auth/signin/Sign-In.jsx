import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaApple } from "react-icons/fa";
import GoogleIcon from "../../../assets/Google.png";
import {
  Container,
  Card,
  Header,
  HeaderLeft,
  HeaderRight,
  Subtitle,
  Title,
  NoAccountText,
  StyledLink,
  SocialButtonsContainer,
  SocialButton,
  IconButton,
  IconButtonsWrapper,
  Form,
  FormGroup,
  Label,
  Input,
  ForgotPasswordContainer,
  SubmitButton,
} from "./Sign-In.styles";
import { LoginPageApi } from "../../../services/auth/LoginApi";
import { useToast } from "../../../context/ToastContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { showSuccess, showError, showWarning } = useToast();
  const Navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
   try{
    const payload={
       email : formData.email.trim().toLowerCase(),
       password : formData.password

    }

    const response = await LoginPageApi(payload);

    if(response?.success){
      showSuccess("Login successful");
      Cookies.set("sessionToken", response.token, {
        expires: 7,
        secure: true,
      });
      Cookies.set("userId", response.userId, {
        expires: 7,
        secure: true,
      });

      Navigate("/");
      
    }
    else{
      showError("Login failed. Please try again.");
    }

   }
   catch(err){
    console.log(err)
   }

   
  };

  return (
    <Container>
      <Card>
        <Header>
          <HeaderLeft>
            <Subtitle>
              Welcome to <span className="highlight">DIPR</span>
            </Subtitle>
            <Title>Sign in</Title>
          </HeaderLeft>
          <HeaderRight>
            <NoAccountText>No Account ?</NoAccountText>
            <StyledLink as={Link} to="/signup">
              Sign up
            </StyledLink>
          </HeaderRight>
        </Header>

        <SocialButtonsContainer>
          <SocialButton>
            <img src={GoogleIcon} alt="Google" className="icon" />
            Sign in with Google
          </SocialButton>
          <IconButtonsWrapper>
            <IconButton>
              <FaFacebook className="icon facebook" />
            </IconButton>
            <IconButton>
              <FaApple className="icon apple" />
            </IconButton>
          </IconButtonsWrapper>
        </SocialButtonsContainer>

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

          <FormGroup>
            <Label>Enter your Password</Label>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <ForgotPasswordContainer>
              <StyledLink as={Link} to="/forgot-password">
                Forgot Password
              </StyledLink>
            </ForgotPasswordContainer>
          </FormGroup>

          <SubmitButton type="submit">Sign in</SubmitButton>
        </Form>
      </Card>
    </Container>
  );
};

export default SignIn;
