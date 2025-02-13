import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {
  TabContainer,
  TabsWrapper,
  TabItem,
  ProfileIcon,
} from "../categorytab/CategoryTab.styles";

const tabs = [
  { name: "All", path: "/" },
  { name: "Latest News", path: "/latestnews" },
  { name: "Magazine", path: "/magazinepages" },
  { name: "Gallery", path: "/Gallery" },
  { name: "About us", path: "/aboutuspage" },
  { name: "Contact us", path: "/contactus" },
];

const CategoryTab = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <TabContainer>
      <TabsWrapper>
        {tabs.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            onClick={() => setActiveTab(path)}
            style={{ textDecoration: "none" }}
          >
            <TabItem active={activeTab === path}>{name}</TabItem>
          </Link>
        ))}
      </TabsWrapper>
      <ProfileIcon>
        <FaUserCircle size={24} />
      </ProfileIcon>
    </TabContainer>
  );
};

export default CategoryTab;
