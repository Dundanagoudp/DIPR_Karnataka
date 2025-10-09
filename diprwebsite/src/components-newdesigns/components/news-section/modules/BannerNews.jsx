import {
  BannerWrap,
  BannerInner,
  BannerImage,
  Overlay,
  Content,
  DateText,
  Title,
  Badge,
  LinkArea,
} from "./BannerNews.styles"

export default function Banner({
  date = "March 18, 2025",
  title = "Get Your Daily Dose of Sports News and Analysis with Trendzi's Comprehensive Coverage",
  imageSrc = "/state/newsbaner.png",
  alt = "press briefing with microphones and officials outdoors",
  href = "#",
  badge = "Top Story",
}) {
  return (
    <BannerWrap aria-label="Top story banner">
      <BannerInner>
        <BannerImage src={imageSrc} alt={alt} />
        <Overlay aria-hidden="true" />
        <Content>
          <DateText>{date}</DateText>
          <div>{badge ? <Badge aria-label="Story badge">{badge}</Badge> : null}</div>
          <Title>{title}</Title>
        </Content>
        {/* Full-area link for accessibility */}
        <LinkArea href={href} aria-label={`Read: ${title}`} />
      </BannerInner>
    </BannerWrap>
  )
}
