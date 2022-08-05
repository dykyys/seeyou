import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import About from '../../pages/About';
// import Products from '../../pages/Products';
import Home from '../../pages/Home';
import Ownership from '../../pages/Ownership';
import Help from '../../pages/Help';
import Download from '../../pages/Download';
import Release from '../../pages/Release';
import Privacy from '../../pages/Privacy';
import Terms from '../../pages/Terms';
import Report from '../../pages/Report';
import Suggest from '../../pages/Suggest';
import Zoom from '../../pages/Zoom';
import Webex from '../../pages/Webex';
import Google from '../../pages/Google/Google'
import Microsoft from '../../pages/MicrosoftTeams/Microsoft'
import Bluejeans from '../../pages/Bluejeans/Bluejeans'
import Star from '../../pages/StarLeaf/StarLeaf'
import Huawei from '../../pages/Huawei/Huawei'
import Request from '../../pages/Request';
import Delete from '../../pages/DeleteAccount';
import End from '../../pages/EndEncryption';
import Problem from '../../pages/Problem';

import googleAnalytics from '../../hooks/GoogleAnalytics.js';
import privacyStatement from '../../PDF/SEEYOU_PRIVACY_STATEMENT.pdf';
function App() {

    googleAnalytics();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="co-ownership" element={<Ownership />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Help />} />
        <Route path="downloads" element={<Download />} />
        <Route path="release" element={<Release />} />
        <Route path="terms" element={<Terms />} />
        <Route path="problem" element={<Report />} />
        <Route path="feature" element={<Suggest />} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="providers-zoom" element={<Zoom />} />
        <Route path="providers-webex" element={<Webex />} />
        <Route path="providers-google" element={<Google />} />
        <Route path="providers-starleaf" element={<Star />} />
        <Route path="providers-microsoft" element={<Microsoft />} />
        <Route path="providers-bluejeans" element={<Bluejeans />} />
        <Route path="providers-huawei" element={<Huawei />} />
        <Route path="request-access" element={<Request />} />
        <Route path="delete-account" element={<Delete />} />
        <Route path="end-to-end-encryption" element={<End />} />
        <Route path="problem2" element={<Problem />} />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
}

export default App;
