import React, { useState } from "react";
import { TabContainer, TabsWrapper, TabItem, ProfileImage } from "../categorytab/CategoryTab.styles";

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
      <ProfileImage src="https://via.placeholder.com/30" alt="Profile" />
    </TabContainer>
  );
};

export default CategoryTab;
