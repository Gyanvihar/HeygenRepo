// CookieBanner.js

import React from 'react';
import '../App.css';


const CookieBanner = () => {
  return (
    <div
      data-w-id="db263a74-07b5-9a59-3c7f-e5bc2c69abd4"
      className="cookie-wrapper"
    >
      <div id="cookiesPopUp" className="cookies-pop-up">
          <div className="cookies-heading">This website uses cookies</div>
          <p className="cookies-para">
            In addition to cookies that are essential to operate our website, we
            use cookies and similar technologies to analyze traffic, personalize
            content and ads, to provide social media features and to improve our
            products and services. These technologies are set by third parties,
            including our social media, advertising and analytics partners.
            Please read our{" "}
            <a href="/policy" className="link-underline">
              privacy policy
            </a>{" "}
            for additional info.
          </p>
          <div className="cookies-button-wrapper">
            <a
              href="#"
              id="rejectButton"
              className="btn small border-gray w-button"
            >
              Reject All
            </a>
            <div
              data-w-id="db263a74-07b5-9a59-3c7f-e5bc2c69abdd"
              className="cookies-button-wrapper block"
            >
              <a href="#" id="acceptAllBtn" className="btn small fill w-button">
                Accept All
              </a>
              <a
                id="customBtn"
                data-w-id="db263a74-07b5-9a59-3c7f-e5bc2c69abe0"
                href="#"
                className="btn small ghost custom_md w-button"
              >
                Customize
              </a>
            </div>
            <a
              id="acceptSelectedBtn"
              data-w-id="db263a74-07b5-9a59-3c7f-e5bc2c69abe2"
              href="#"
              className="btn small fill accept_all w-node-db263a74-07b5-9a59-3c7f-e5bc2c69abe2-2c69abd4 w-button"
            >
              Accept Selected
            </a>
            <a
              id="customBtnMobile"
              data-w-id="db263a74-07b5-9a59-3c7f-e5bc2c69abe4"
              href="#"
              className="btn small ghost custom_sm w-node-db263a74-07b5-9a59-3c7f-e5bc2c69abe4-2c69abd4 w-button"
            >
              Cookie Customize
            </a>
          </div>
          <div
            data-w-id="db263a74-07b5-9a59-3c7f-e5bc2c69abe6"
            className="cookies-customize-wrapper"
          >
            <div className="cookies-select essential">
              <div className="cookies-select-icon">
                <div className="cookies-select-checkbox selected">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/655339422f2b2d24a083acd2_checkbox-icon.svg"
                    loading="lazy"
                    alt=""
                    className="icon_cookies_check_essential _50"
                  />
                </div>
              </div>
              <div className="cookies-custom-btn-text">Essential</div>
            </div>
            <div
              id="anlyticCheckBtn"
              data-check="unchecked"
              className="cookies-select"
            >
              <div className="cookies-select-icon">
                <div className="cookies-select-checkbox unchecked">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/655339422f2b2d24a083acd2_checkbox-icon.svg"
                    loading="lazy"
                    alt=""
                    className="icon_cookies_check unchecked"
                  />
                </div>
              </div>
              <div className="cookies-custom-btn-text">Analytic</div>
            </div>
            <div
              id="AdsCheckBtn"
              data-check="unchecked"
              className="cookies-select"
            >
              <div className="cookies-select-icon">
                <div className="cookies-select-checkbox unchecked">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/655339422f2b2d24a083acd2_checkbox-icon.svg"
                    loading="lazy"
                    alt=""
                    className="icon_cookies_check unchecked"
                  />
                </div>
              </div>
              <div className="cookies-custom-btn-text">Ads &amp; Social</div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default CookieBanner;
