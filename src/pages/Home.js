import { Hero } from '../components/Hero/Hero';
// import { Download } from '../components/Dowmload/Download';
import { Rewarded } from '../components/Rewarded/Rewarded';
import { Conference } from '../components/Conference/Conference';
import { Support } from '../components/Support/Support';
import { Faq } from '../components/Faq/Faq';
export const Home = () => {
  return (
    <>
      <Hero />
      <Rewarded />
      <Conference />
      <Support />
      <Faq />
    </>
  );
};
