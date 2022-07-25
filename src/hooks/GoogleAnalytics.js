import {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
      ReactGA.initialize("G-2278FR98P6");
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log('analytics');
    }, [location])
}

export default GoogleAnalytics;
