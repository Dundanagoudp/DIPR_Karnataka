import styled, { keyframes } from 'styled-components';

// Animations
export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

export const rocketMove = keyframes`
  0% { transform: translateX(-100px) rotate(-15deg); }
  50% { transform: translateX(0px) rotate(0deg); }
  100% { transform: translateX(100px) rotate(15deg); }
`;

// Styled Components
export const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
`;

export const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const Star = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #1E88E5;
  border-radius: 50%;
  animation: ${twinkle} 2s infinite;
  
  &:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
  &:nth-child(2) { top: 20%; left: 80%; animation-delay: 0.5s; }
  &:nth-child(3) { top: 30%; left: 20%; animation-delay: 1s; }
  &:nth-child(4) { top: 40%; left: 90%; animation-delay: 1.5s; }
  &:nth-child(5) { top: 50%; left: 5%; animation-delay: 0.3s; }
  &:nth-child(6) { top: 60%; left: 85%; animation-delay: 0.8s; }
  &:nth-child(7) { top: 70%; left: 15%; animation-delay: 1.2s; }
  &:nth-child(8) { top: 80%; left: 75%; animation-delay: 0.7s; }
  &:nth-child(9) { top: 90%; left: 25%; animation-delay: 1.4s; }
  &:nth-child(10) { top: 95%; left: 60%; animation-delay: 0.9s; }
`;

export const CrescentMoon = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  width: 60px;
  height: 60px;
  border: 3px solid #e0e0e0;
  border-radius: 50%;
  border-right: 3px solid transparent;
  animation: ${float} 3s ease-in-out infinite;
`;

export const Satellite = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  width: 40px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
  animation: ${rotate} 8s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 30px;
    background: #e0e0e0;
  }
`;

export const Constellation = styled.div`
  position: absolute;
  top: 15%;
  right: 20%;
  width: 80px;
  height: 60px;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background: #1E88E5;
    border-radius: 50%;
    animation: ${twinkle} 3s infinite;
  }
  
  &::before {
    top: 0;
    left: 0;
    animation-delay: 0s;
  }
  
  &::after {
    top: 20px;
    right: 0;
    animation-delay: 1.5s;
  }
`;

export const Galaxy = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  width: 60px;
  height: 60px;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  animation: ${rotate} 12s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;
`;

export const ErrorNumber = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  color: #000000;
  margin: 0;
  font-family: ${props => props.theme.fonts.heading};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

export const RocketContainer = styled.div`
  position: relative;
  margin: 20px 0;
  animation: ${rocketMove} 4s ease-in-out infinite;
`;

export const Rocket = styled.div`
  width: 80px;
  height: 120px;
  position: relative;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 40px solid #000000;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 60px;
    background: #000000;
    border-radius: 20px 20px 0 0;
  }
`;

export const RocketTrail = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  width: 40px;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    transparent,
    transparent 5px,
    #1E88E5 5px,
    #1E88E5 10px
  );
`;

export const Planet = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  border-radius: 50%;
  position: relative;
  margin: 20px auto;
  animation: ${float} 4s ease-in-out infinite;
`;

export const PlanetRings = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  
  &::before, &::after {
    content: '';
    position: absolute;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 50%;
  }
  
  &::before {
    top: 10px;
    left: 10px;
    width: 100px;
    height: 100px;
  }
  
  &::after {
    top: 20px;
    left: 20px;
    width: 80px;
    height: 80px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #666666;
  margin: 20px 0 30px 0;
  font-family: ${props => props.theme.fonts.body};
`;

export const HomeButton = styled.button`
  background: #1E88E5;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${props => props.theme.fonts.body};
  box-shadow: 0 4px 15px rgba(30, 136, 229, 0.3);
  
  &:hover {
    background: #1976d2;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(30, 136, 229, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`; 