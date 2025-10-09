import {
  FooterWrapper,
  FooterContainer,
  Grid,
  Left,
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
  visitors = {
    dateTime: "7/25/2025, 3:20:35 PM",
    count: "559",
    version: "C64/KBN",
  },
  emblemSrc = "/images/emblem.png",
}) {
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
                <span>{visitors.dateTime}</span>
              </div>
              <div>
                <strong>Visitors Counter: </strong>
                <span>{visitors.count}</span>
              </div>
              <div>
                <strong>Version: </strong>
                <span>{visitors.version}</span>
              </div>
            </Meta>
          </div>
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
