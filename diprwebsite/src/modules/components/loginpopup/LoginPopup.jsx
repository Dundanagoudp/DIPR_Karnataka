import { Overlay, PopupContainer, Title, Subtitle, SignInButton } from "./LoginPopup.styles"
import { useNavigate } from "react-router-dom"
import { IoClose } from "react-icons/io5"
import Cookies from "js-cookie"

const LoginPopup = ({ isOpen, onClose, title = "Like this content?", subtitle = "Login to access this content." }) => {
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleLoginClick = () => {
    // Check if there's a redirect URL stored in cookies
    const redirectUrl = Cookies.get("redirectUrl")
    
    // Close the popup
    onClose()
    
    // Navigate to login page
    navigate('/login')
  }

  return (
    <Overlay role="dialog" aria-modal="true" aria-label="Sign in to access content">
      <PopupContainer>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          aria-label="Close popup"
        >
          <IoClose />
        </button>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <SignInButton onClick={handleLoginClick} aria-label="Sign in to your account">
          Login
        </SignInButton>
      </PopupContainer>
    </Overlay>
  )
}

export default LoginPopup
