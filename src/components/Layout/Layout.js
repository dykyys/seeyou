import { Outlet } from 'react-router-dom';
// import { GlobalStyle } from '../GlobalStyle';
import AppBar from '../AppBar';
import CookieConsent from "react-cookie-consent";


const Layout = () => {
  return (
    <>

      <AppBar />
      <Outlet />
      {/* 
      <CookieConsent
          location="bottom"
          buttonText="Sure"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
        </CookieConsent>
        */}
    </>
  );
};

export default Layout;
