import { useState, useEffect } from "react"
import {
  SidebarCard,
  SidebarHeader,
  SidebarList,
  SidebarItem,
  Avatar,
  ItemLabel,
  SkeletonItem,
  SkeletonAvatar,
  SkeletonLabel,
} from "./StateGovernmentWebsites.styles"

const defaultSites = [
  { label: "Departments", image: "/state/sidebar.jpg" },
  { label: "Directorates", image: "/state/sidebar2.jpg" },
  { label: "Organizations & Boards List", image: "/state/sidebar.jpg" },
  { label: "Universities", image: "/state/sidebar2.jpg" },
  { label: "Tenders", image: "/state/sidebar.jpg" },
  { label: "Covid 19 Home Isolation App", image: "/state/sidebar2.jpg" },
]

export default function StateGovernmentWebsites({ sites = defaultSites, loading = false }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Skeleton loading component
  const SkeletonLoader = () => (
    <SidebarList aria-label="Loading government websites">
      {[1, 2, 3, 4, 5, 6].map((_, idx) => (
        <SkeletonItem key={idx}>
          <SkeletonAvatar />
          <SkeletonLabel />
        </SkeletonItem>
      ))}
    </SidebarList>
  )

  return (
    <SidebarCard aria-labelledby="state-sites-heading">
      <SidebarHeader id="state-sites-heading">State Government Websites</SidebarHeader>
      {isLoading || loading ? (
        <SkeletonLoader />
      ) : (
        <SidebarList aria-label="Government websites list">
          {sites.map((s, i) => (
            <SidebarItem key={i} aria-label={`Visit ${s.label}`}>
              <Avatar $src={s.image} aria-hidden="true" />
              <ItemLabel>{s.label}</ItemLabel>
            </SidebarItem>
          ))}
        </SidebarList>
      )}
    </SidebarCard>
  )
}

