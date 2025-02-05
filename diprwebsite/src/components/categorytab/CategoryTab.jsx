import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { TabContainer, TabsWrapper, TabItem, ProfileIcon } from "../categorytab/CategoryTab.styles";

const tabs = ["All", "Latest News", "Magazine", "Exclusive", "About us", "Contact us"];

const CategoryTab = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <TabContainer>
      <TabsWrapper>
        {tabs.map((tab) => (
          <TabItem 
            key={tab} 
            active={activeTab === tab} 
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </TabItem>
        ))}
      </TabsWrapper>
      <ProfileIcon />
    </TabContainer>
  );
};

export default CategoryTab;
