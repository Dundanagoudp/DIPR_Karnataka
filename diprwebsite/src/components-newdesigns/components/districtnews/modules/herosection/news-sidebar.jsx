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
    <Aside aria-label="Latest stories">
      {items.map((item, index) => (
        <SidebarCard key={index} {...item} />
      ))}
    </Aside>
  )
}

