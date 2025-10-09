import SidebarCard from "./sidebar-card"
import { Aside } from "./news-sidebar.styles"

export default function NewsSidebar({
  items = [
    {
      title: "Karnataka's Cultural Heritage: Temples and Traditions",
      excerpt: "Discover the rich cultural heritage of Karnataka through its ancient temples and traditional practices.",
      date: "June 19, 2025 06:00pm",
      author: "Karnataka Heritage",
      imageSrc: "/state/sidebar.jpg",
    },
    {
      title: "Karnataka's Economic Growth: From Agriculture to Technology",
      excerpt: "Explore how Karnataka transformed from an agricultural state to a technology powerhouse.",
      date: "June 19, 2025 06:00pm",
      author: "Economic Times",
      imageSrc: "/state/sidebar2.jpg",
    },
  ],
}) {
  return (
    <Aside aria-label="March of Karnataka stories">
      {items.map((item, index) => (
        <SidebarCard key={index} {...item} />
      ))}
    </Aside>
  )
}
