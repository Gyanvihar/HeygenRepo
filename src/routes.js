import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import CookieBanner from './components/cookieBanner';
import Main from './screens/main';
import HomeShowcasePopup from './screens/homeShowcasePopup';
import SectionCreatedOn from './screens/sectionCreatedOn';
import SectionSafety from './screens/sectionSafety';
import Footer from './components/footer';

const Routes = () => {
  return (
    <Router>
      <div>
        <Header />
        <CookieBanner />
        <Main />
        <HomeShowcasePopup
        id={1}
        videoSrc="https://www.youtube.com/embed/PNGYQUR4R9g?rel=0&controls=1&autoplay=0&mute=0&start=0"
        postLink="https://www.youtube.com/watch?v=PNGYQUR4R9g"
        tryNowLink="https://app.heygen.com/login"
      />

      <HomeShowcasePopup
        id={2}
        videoSrc="https://video.twimg.com/amplify_video/1710485687391416320/vid/avc1/1280x720/O0C_o-VQgqktLBax.mp4?tag=14"
        postLink="https://twitter.com/mrjonfinger/status/1710485964307706035"
        tryNowLink="https://app.heygen.com/login"
      />

      <HomeShowcasePopup
        id={3}
        videoSrc="https://www.youtube.com/embed/rjVTe_5HXow?rel=0&controls=1&autoplay=0&mute=0&start=0"
        postLink="https://www.youtube.com/embed/rjVTe_5HXow"
        tryNowLink="https://app.heygen.com/login"
      />

      <HomeShowcasePopup
        id={4}
        videoSrc="https://video.twimg.com/ext_tw_video/1706360392056713216/pu/vid/avc1/1920x1080/VLb_U2LCs2EdXWAX.mp4?tag=14"
        postLink="https://twitter.com/bramk/status/1706362316722208773?s=20"
        tryNowLink="https://app.heygen.com/login"
      />

      <HomeShowcasePopup
        id={5}
        videoSrc="https://video.twimg.com/ext_tw_video/1719736945545285632/pu/vid/avc1/1280x720/wlzm1ycKrA4jpS5C.mp4?tag=12"
        postLink="https://twitter.com/AlexSprogis/status/1719737053166887392?s=20"
        tryNowLink="https://app.heygen.com/login"
      />

      <HomeShowcasePopup
        id={6}
        videoSrc="https://www.youtube.com/embed/22EYNbO0pjc?rel=0&controls=1&autoplay=0&mute=0&start=0"
        postLink="https://www.youtube.com/watch?v=22EYNbO0pjc"
        tryNowLink="https://app.heygen.com/login"
      />

      <HomeShowcasePopup
        id={7}
        videoSrc="https://cdn.inflact.com/media/10000000_3709692876018911_1403563982896088948_n.mp4?url=https://instagram.fjog3-1.fna.fbcdn.net/v/t66.30100-16/10000000_3709692876018911_1403563982896088948_n.mp4?_nc_ht%3Dinstagram.fjog3-1.fna.fbcdn.net%26_nc_cat%3D111%26_nc_ohc%3Dqaz5ywCaqLMAX-M_VP_%26edm%3DAP_V10EBAAAA%26ccb%3D7-5%26oh%3D00_AfCUWlA2P5lc1_L9JStpipK2IoxKIbXfrgVNusABwq7-sQ%26oe%3D656DE492%26_nc_sid%3D2999b8&time=1701601200&key=5513f55bdfa604dd157de2c5846385dd"
        postLink="https://www.instagram.com/reel/CzW5a3Br9T8/?igshid=MThmMWhndmxiemdwYw%3D%3D"
        tryNowLink="https://app.heygen.com/login"
      />

      <SectionCreatedOn />
      <SectionSafety />

        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
