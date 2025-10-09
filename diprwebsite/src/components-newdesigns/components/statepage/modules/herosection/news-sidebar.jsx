import SidebarCard from "./sidebar-card"
import { Aside } from "./news-sidebar.styles"

export default function NewsSidebar({
  items = [
    {
      title: "Yadgir District Tourist Places",
      excerpt: "Norem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "June 19, 2025 06:00pm",
      author: "james",
      imageSrc: "/state/sidebar.jpg",
    },
    {
      title: "Yadgir District Tourist Places",
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
