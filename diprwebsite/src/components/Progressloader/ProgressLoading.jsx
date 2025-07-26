import { useState, useEffect } from "react"
import {
  LoadingContainer,
  LogoContainer,
  LogoBox,
  LogoText,
  ProgressBar,
  ProgressFill,
  LoadingText,
  DotsContainer,
  Dot,
  Logo,
  MainContentContainer
} from "./ProgressLoading.styles"
import logo2 from "../../assets/logo2.png"

export default function LoadingProgressBar({ children }) {
  const [isLoading, setIsLoading] = useState(() => {
    // Check localStorage for first visit
    return localStorage.getItem("hasVisited") !== "true"
  })
  const [progress, setProgress] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (!isLoading) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsFading(true)
          setTimeout(() => {
            setIsLoading(false)
            localStorage.setItem("hasVisited", "true")
          }, 1000) // Changed to 2000ms for fade out
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isLoading])

  if (!isLoading) {
    return <MainContentContainer>{children}</MainContentContainer>
  }

  return (
    <LoadingContainer $isFading={isFading}>
      <LogoContainer>
        <LogoBox>
          <Logo src={logo2 || "/placeholder.svg"} alt="Government of Karnataka Logo" />
        </LogoBox>
        <LogoText>Karnataka Varthe</LogoText>
      </LogoContainer>

      <ProgressBar>
        <ProgressFill progress={progress} />
      </ProgressBar>

      <LoadingText>Welcome to Karnataka Varthe...</LoadingText>

      <DotsContainer>
        <Dot delay={0} />
        <Dot delay={0.2} />
        <Dot delay={0.4} />
      </DotsContainer>
    </LoadingContainer>
  )
}