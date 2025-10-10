import {
  SidebarCard,
  SidebarHeader,
  SidebarList,
  SidebarItem,
  Avatar,
  ItemLabel,
} from "./StateGovernmentWebsites.styles"

const defaultSites = [
  { label: "Departments", image: "/state/sidebar.jpg" },
  { label: "Directorates", image: "/state/sidebar2.jpg" },
  { label: "Organizations & Boards List", image: "/state/sidebar.jpg" },
  { label: "Universities", image: "/state/sidebar2.jpg" },
  { label: "Tenders", image: "/state/sidebar.jpg" },
  { label: "Covid 19 Home Isolation App", image: "/state/sidebar2.jpg" },
]

export default function StateGovernmentWebsites({ sites = defaultSites }) {
  return (
    <SidebarCard aria-labelledby="state-sites-heading">
      <SidebarHeader id="state-sites-heading">State Government Websites</SidebarHeader>
      <SidebarList>
        {sites.map((s, i) => (
          <SidebarItem key={i}>
            <Avatar $src={s.image} aria-hidden="true" />
            <ItemLabel>{s.label}</ItemLabel>
          </SidebarItem>
        ))}
      </SidebarList>
    </SidebarCard>
  )
}

