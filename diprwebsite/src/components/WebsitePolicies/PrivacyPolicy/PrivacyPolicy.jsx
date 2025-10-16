import React from "react";
import { Title, Content, Wrapper } from "./PrivacyPolicy.styles";

const PrivacyPolicy = () => {
  return (
    <Wrapper style={{display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"}}>
      <Title style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>Privacy Policy</Title>
      <Content style={{ fontSize: "16px", lineHeight: "1.6", color: "#444", textAlign: "left" }}>
<p>1) Thanks for visiting the website of the Government of Karnataka and reviewing our privacy policy.</p>

<p>2) We collect no personal information, like names or addresses, when you visit our website. If you choose to provide that information to us, it is only used to fulfil your request for information.</p>

<p>3) We do collect some technical information when you visit to make your visit seamless. The section below explains how we handle and collect technical information when you visit our website.</p>

<p>4) Information collected and stored automatically.</p>

<p>5) When you browse, read pages, or download information on this website, we automatically gather and store certain technical information about your visit.</p>

<p>6) This information never identifies who you are. The information we collect and store about your visit is listed below:</p>

<p>7) The Internet domain of your service provider (e.g. mtnl.net.in) and IP address (an IP address is a number that is automatically assigned to your computer whenever you are surfing the web) from which you access our website.</p>

<p>8) The type of browser (such as Firefox, Netscape, or Internet Explorer) and operating system (Windows, Linux) used to access our site.</p>

<p>9) The date and time you access our site.</p>

<p>10) The pages/URLs you have visited, and if you reached this website from another website, the address of that referring website.</p>

<p>11) This information is only used to help us make the site more useful for you. With this data, we learn about the number of visitors to our site and the types of technology our visitors use. We never track or record information about individuals and their visits.</p>

<h3 style={{marginTop: "30px", fontSize: "22px"}}>Cookies</h3>

<p>
  When you visit some websites, they may download small pieces of software on your computer or browsing device known as cookies. 
  Some cookies collect personal information to recognise your computer in the future. We only use non-persistent cookies or 
  “per-session cookies”. Per-session cookies serve technical purposes, like providing seamless navigation through this website. 
  These cookies do not collect personal information on users and they are deleted as soon as you leave our website. The cookies 
  do not permanently record data and they are not stored on your computer’s hard drive. The cookies are stored in memory and are 
  only available during an active browser session. Again, once you close your browser, the cookie disappears.
</p>

<h3 style={{marginTop: "30px", fontSize: "22px"}}>If You Send Us Personal Information</h3>

<p>
  We do not collect personal information for any purpose other than to respond to you (for example, to respond to your questions 
  or provide subscriptions you have chosen). If you choose to provide us with personal information — like filling out a 
  "Contact Us" form with an email address or postal address — and submitting it to us through the website, we use that information 
  to respond to your message and to help you get the information you have requested.
</p>

<p>
  We only share the information you give us with another Government agency if your question relates to that agency, or as otherwise 
  required by law. Our website never collects information or creates individual profiles for commercial marketing.
</p>

<p>
  While you must provide an email address for a localized response to any incoming questions or comments to us, we recommend 
  that you do NOT include any other personal information.
</p>
      </Content>
    </Wrapper>
  );
};

export default PrivacyPolicy;
