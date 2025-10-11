import {
  TrendingWrapper,
  TrendingContainer,
  TrendingLabel,
  TrendingContent,
  TrendingItem,
  Divider,
} from "./TrendingBar.styles";

const TrendingBar = () => {
  const trendingNews = [
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  return (
    <TrendingWrapper>
      <TrendingContainer>
        <TrendingLabel>Trending</TrendingLabel>
        <TrendingContent>
          {trendingNews.map((news, index) => (
            <span key={index}>
              <TrendingItem>{news}</TrendingItem>
              {index < trendingNews.length - 1 && <Divider>|</Divider>}
            </span>
          ))}
        </TrendingContent>
      </TrendingContainer>
    </TrendingWrapper>
  );
};

export default TrendingBar;
