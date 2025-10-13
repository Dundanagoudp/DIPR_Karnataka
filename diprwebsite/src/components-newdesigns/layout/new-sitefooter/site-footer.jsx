import { useState, useEffect, useCallback } from "react"
import {
  FooterWrapper,
  FooterContainer,
  Grid,
  Left,
  RightColumn,
  Emblem,
  Note,
  ColTitle,
  LinkList,
  LinkItem,
  LinkA,
  Meta,
  Divider,
  BottomBar,
  SrOnly,
} from "./sitefooter.styles"
import { GetTotalVisitorApi, RegisterVisitorApi } from "../../../services/viewsapi/ViewsApi"

export default function SiteFooter({
  policies = [
    { label: "Copyright Policy", href: "#" },
    { label: "Hyperlinking Policy", href: "#" },
    { label: "Security Policy", href: "#" },
    { label: "Guidelines", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Help", href: "#" },
  ],
  emblemSrc = "/header/karntaka.png",
}) {
  const [visitorData, setVisitorData] = useState({
    totalVisitors: 0,
  })
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString())

  const fetchVisitorData = useCallback(async () => {
    try {
      const isVisited = sessionStorage.getItem("isVisited")
      if (!isVisited) {
        await RegisterVisitorApi()
        sessionStorage.setItem("isVisited", "true")
      }
      const totalVisitorsResponse = await GetTotalVisitorApi()
      setVisitorData({
        totalVisitors: totalVisitorsResponse.totalVisits,
      })
    } catch (error) {
      console.error("Error fetching visitor data:", error)
    }
  }, [])

  useEffect(() => {
    fetchVisitorData()
    // Update time every minute for better performance
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString())
    }, 60000)
    return () => clearInterval(intervalId)
  }, [fetchVisitorData])
  return (
    <FooterWrapper role="contentinfo" aria-label="Site footer">
      <FooterContainer>
        <Grid>
          <Left>
            <Emblem src={emblemSrc} alt="Government crest" />
            <Note>
              Please note that this page also provides links to the websites / web pages of Govt.
              Ministries/Departments/Organizations. The content of these websites are owned by the respective
              organizations and they may be contacted for any further information or suggestion.
            </Note>
          </Left>

          <RightColumn>
            <div>
              <ColTitle>Website Policies</ColTitle>
              <nav aria-label="Website policies">
                <LinkList>
                  {policies.map((p, idx) => (
                    <LinkItem key={idx}>
                      <LinkA href={p.href}>{p.label}</LinkA>
                    </LinkItem>
                  ))}
                </LinkList>
              </nav>
            </div>

            <div>
              <ColTitle>Visitors</ColTitle>
              <Meta>
                <div>
                  <strong>Date/Time: </strong>
                  <span aria-live="polite">{currentTime}</span>
                </div>
                <div>
                  <strong>Visitors Counter: </strong>
                  <span aria-live="polite">{visitorData.totalVisitors}</span>
                </div>
                <div>
                  <strong>Version: </strong>
                  <span>C64/KBN 1.3</span>
                </div>
              </Meta>
            </div>
          </RightColumn>
        </Grid>

        <Divider />

        <BottomBar>
          <SrOnly>Footer information</SrOnly>
          Designed, Developed and Hosted by: Digi9 - Web Portal, Government of Karnataka © {new Date().getFullYear()},
          All Rights Reserved.
        </BottomBar>
      </FooterContainer>
    </FooterWrapper>
  )
}
