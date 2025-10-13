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
  // Parse date for datetime attribute
  const parseDateTimeAttr = (dateStr) => {
    try {
      const parsed = new Date(dateStr);
      return parsed.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  return (
    <BannerWrap 
      as="section" 
      role="region" 
      aria-labelledby="banner-title"
    >
      <h2 
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        Top Story Banner
      </h2>
      <BannerInner as="article" role="article" aria-labelledby="banner-title">
        <BannerImage src={imageSrc} alt={alt} loading="lazy" />
        <Overlay aria-hidden="true" />
        <Content>
          <DateText as="time" dateTime={parseDateTimeAttr(date)}>{date}</DateText>
          <div>{badge ? <Badge aria-label={`Story category: ${badge}`}>{badge}</Badge> : null}</div>
          <Title id="banner-title" as="h3">{title}</Title>
        </Content>
        {/* Full-area link for accessibility */}
        <LinkArea 
          href={href} 
          aria-label={`Read full story: ${title}`}
          tabIndex="0"
        />
      </BannerInner>
    </BannerWrap>
  )
}
