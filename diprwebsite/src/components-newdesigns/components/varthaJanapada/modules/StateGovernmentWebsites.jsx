import { useState, useEffect } from "react"
import { getStateLinks } from "../../../../services/statepagelinks/StateLinks.js"
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
  { label: "Departments", image: "/state/sidebar.jpg", url: "#" },
  { label: "Directorates", image: "/state/sidebar2.jpg", url: "#" },
  { label: "Organizations & Boards List", image: "/state/sidebar.jpg", url: "#" },
  { label: "Universities", image: "/state/sidebar2.jpg", url: "#" },
  { label: "Tenders", image: "/state/sidebar.jpg", url: "#" },
  { label: "Covid 19 Home Isolation App", image: "/state/sidebar2.jpg", url: "#" },
]

export default function StateGovernmentWebsites({ sites = [], loading = false }) {
  const [isLoading, setIsLoading] = useState(true)
  const [apiSites, setApiSites] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStateLinks = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await getStateLinks()
        setApiSites(response.data || response || [])
      } catch (err) {
        console.error('Error fetching state links:', err)
        setError('Failed to load state links')
        setApiSites([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchStateLinks()
  }, [])

  // Helper function to format API data to match UI structure
  const formatApiData = (apiData) => {
    if (!Array.isArray(apiData)) return []
    
    return apiData.map((item, index) => ({
      label: item.staticpageName || item.English || item.title || item.name || item.label || `Link ${index + 1}`,
      image: item.staticpageImage || item.image || item.icon || (index % 2 === 0 ? "/state/sidebar.jpg" : "/state/sidebar2.jpg"),
      url: item.staticpageLink || item.url || item.link || item.href || "#"
    }))
  }

  // Priority: props sites > API sites > default sites
  const displaySites = sites.length > 0 ? sites : (apiSites.length > 0 ? formatApiData(apiSites) : defaultSites)
  
  // Debug logging to see what data we're getting
  console.log('API Sites:', apiSites)
  console.log('Formatted API Sites:', formatApiData(apiSites))
  console.log('Display Sites:', displaySites)

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
          {displaySites.map((s, i) => (
            <SidebarItem 
              key={i} 
              as="a"
              href={s.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${s.label}`}
            >
              <Avatar $src={s.image} aria-hidden="true" />
              <ItemLabel>{s.label}</ItemLabel>
            </SidebarItem>
          ))}
        </SidebarList>
      )}
    </SidebarCard>
  )
}

