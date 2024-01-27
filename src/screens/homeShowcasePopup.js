import React from 'react';
import '../App.css';

const HomeShowcasePopup = ({ id, videoSrc, postLink, tryNowLink }) => {
  return (
    <div className={`home_showcase_pop-up-${id}`}>
      <div className="showcase-pop-up-container">
        <div className="home_show-case-pop-up-body">
          <div className="hori-between-div">
            <div className="home-show-case-user" />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/63fdcbe48aa020540d4936da_close.svg"
              loading="lazy"
              alt=""
              className="showcase-close-btn-home"
            />
          </div>
          <div className="home-showcase-video">
            {videoSrc.includes('youtube') ? (
              <div style={{ paddingTop: '56.17021276595745%' }} className="w-embed-youtubevideo">
                <iframe
                  src={videoSrc}
                  frameBorder={0}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'auto',
                  }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen=""
                  title=""
                />
              </div>
            ) : (
              <div className="w-embed">
                <video src={videoSrc} type="video/mp4" className="showcase-video" controls="" />
              </div>
            )}
          </div>
          <div className="flex-horizontal-center items-center gap-16">
            <a href={postLink} target="_blank" className="btn small-w-120 w-button">
              view post
            </a>
            <a href={tryNowLink} target="_blank" className="btn small-w-120 fill w-button">
              try now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShowcasePopup;
