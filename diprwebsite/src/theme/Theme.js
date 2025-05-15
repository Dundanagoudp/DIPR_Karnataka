const theme = {
      colors: {
        primary: "#1E88E5",
        primaryRgb: "26, 115, 232",
        background:"#ffffff",
        white:"#ffffff",
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
        Footerbg:"#235FCD",
        Footerstrip:"#1A4492",
        margin:"#C5CEDA",
        icons:"#787878",
        bggrey:"#F3F3F3",
        maincolor:"#372670",
        trcloure:"hsla(0, 0.00%, 100.00%, 0.20)",    
      },
      fonts: {
        body: "'poppins', sans-serif",
        heading: "'poppins', sans-serif",
        monospace: "'Source Sans 3', monospace",
        accent: "'Nunito', sans-serif",
        display: "'Outfit', sans-serif",
      },
      breakpoints: {
        mobile: "480px",
        tablet: "768px",
        desktop: "1024px",
      },
      spacing: (factor) => `${factor * 8}px`,
    };
    
    export default theme;
    