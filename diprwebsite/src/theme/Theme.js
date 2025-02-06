const theme = {
      colors: {
        primary: "#1E88E5",
        background:"#ffffff",
        secondary: "#1E88E5",
        success: "#28a745",
        error: "#DD403C",
        warning: "#ffc107",
        info: "#DEDEDE",
        light: "#E1E8FF",
        text: "#262524",
        sidebarBgColor: "#475569",
        textgray:"#c2c3c4",
        black: "#000000",
        lightgreen: "#ebfced",
        backgray:"#e0e0e0",
        button:"#1E88E5",
        margin:"#C5CEDA",
        icons:"#787878"
      },

      fonts: {
        body: "'poppins', sans-serif",
        heading: "'poppins', sans-serif",
        monospace: "'Source Sans 3', monospace",
        accent: "'Nunito', sans-serif",
        display: "'Outfit', sans-serif",
      },
      // breakpoints: {
      //   mobile: "480px",
      //   tablet: "768px",
      //   desktop: "1024px",
      // },

      breakpoints: {
        mobile: "320px",
        desktop: "1024px", 
        tablet: "768px",  
        mobileM: "375px",  
        mobileL: "425px",  
        tabletS: "600px", 
        tabletL: "820px",  
        laptopL: "1440px", 
        desktop2: "1600px", 
      },
      spacing: (factor) => `${factor * 8}px`,
    };
    
    export default theme;
    