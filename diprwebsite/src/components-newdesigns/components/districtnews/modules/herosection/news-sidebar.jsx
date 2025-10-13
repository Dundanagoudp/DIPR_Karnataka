import SidebarCard from "./sidebar-card"
import { Aside } from "./news-sidebar.styles"

export default function NewsSidebar({
  items = [
    {
      title: "District Tourist Places and Attractions",
      excerpt: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "June 19, 2025 06:00pm",
      author: "james",
      imageSrc: "/state/sidebar.jpg",
    },
    {
      title: "District Cultural Heritage Sites",
      excerpt: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "June 19, 2025 06:00pm",
      author: "james",
      imageSrc: "/state/sidebar2.jpg",
    },
  ],
}) {
  return (
    <Aside role="complementary" aria-labelledby="sidebar-heading">
      <h3 
        id="sidebar-heading" 
        style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        Recent District News
      </h3>
      {items.map((item, index) => (
        <SidebarCard key={index} index={index + 1} {...item} />
      ))}
    </Aside>
  )
}

