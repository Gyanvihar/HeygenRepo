// Heading
import React from 'react';
import '../App.css';

const Main = () => {
  return (
    <div className="page_wrapper">
    <div
      id="fullscreen-video-container"
      className="fullscreen-video-container"
    >
      <div id="close-video" className="full-screen-close-btn w-embed">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-embed">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n                    .fullscreen_video_wrapper {\n                        aspect-ratio: 16/9;\n                    }\n                ",
          }}
        />
      </div>
      <div className="fullscreen_video_wrapper">
        <div className="w-embed">
          <video
            id="fullscreen-video"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            controls=""
          />
        </div>
      </div>
    </div>
    <section>
      <div className="hero_padding">
        <div className="w-layout-blockcontainer heygen_container w-container">
          <div className="vertical-center-div">
            <div className="max-w-740">
              <div className="ver-center_gap-mid">
                <h1 className="heygrn_hero_heading">
                  <span className="primary_color_span">
                    AI-powered video
                  </span>{" "}
                  creations at scale
                </h1>
                <p className="heygen_hero_para">
                  Effortlessly produce studio quality videos with
                  AI-generated avatars and voices.
                </p>
                <div>
                  <a
                    href="https://app.heygen.com/login"
                    target="_blank"
                    className="button_primary is-head-pc w-inline-block"
                  >
                    <div>Get started for free</div>
                    <div className="btn_right_arrow_icon w-embed">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://app.heygen.com/login"
                    target="_blank"
                    className="button_primary demo_head w-inline-block"
                  >
                    <div>Try Demo</div>
                    <div className="btn_right_arrow_icon w-embed">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </a>
                  <div className="button_subtitle">
                    No credit card needed
                  </div>
                </div>
              </div>
              <div className="logos_padding">
                <div className="w-embed">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                        .logos_row {\n                                            will-change: transform;\n                                            animation: brand-horizontal 150s linear infinite;\n                                        }\n\n                                        @keyframes brand-horizontal {\n                                            from {\n                                                transform: translateX(0);\n                                            }\n                                            to {\n                                                transform: translateX(calc(-100% - 46px));\n                                            }\n                                        }\n\n                                        @media screen and (min-width: 1440px) {\n                                            @keyframes brand-horizontal {\n                                                from {\n                                                    transform: translateX(0);\n                                                }\n                                                to {\n                                                    transform: translateX(calc(-100% - 72px));\n                                                }\n                                            }\n                                        }\n                                    ",
                    }}
                  />
                </div>
                <div className="logos">
                  <div className="logos_row">
                    <a
                      id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c03-8c4e74c2"
                      href="https://www.accenture.com/us-en"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c05-8c4e74c2"
                      href="https://www.amazon.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c07-8c4e74c2"
                      href="https://www.aljazeera.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      href="https://kpmg.com"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c0b-8c4e74c2"
                      href="https://kw.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c0d-8c4e74c2"
                      href="https://www.nvidia.com/en-us/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c11-8c4e74c2"
                      href="https://pattern.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c13-8c4e74c2"
                      href="https://www.salesforce.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c17-8c4e74c2"
                      href="https://www.volvo.com/en/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                  </div>
                  <div className="logos_row">
                    <a
                      id="w-node-_069f9897-76a0-0b51-0358-ff116630c3fe-8c4e74c2"
                      href="https://www.accenture.com/us-en"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_069f9897-76a0-0b51-0358-ff116630c400-8c4e74c2"
                      href="https://www.amazon.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_069f9897-76a0-0b51-0358-ff116630c402-8c4e74c2"
                      href="https://www.aljazeera.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      href="https://kpmg.com"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_069f9897-76a0-0b51-0358-ff116630c406-8c4e74c2"
                      href="https://kw.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_069f9897-76a0-0b51-0358-ff116630c408-8c4e74c2"
                      href="https://www.nvidia.com/en-us/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_069f9897-76a0-0b51-0358-ff116630c40c-8c4e74c2"
                      href="https://pattern.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_069f9897-76a0-0b51-0358-ff116630c40e-8c4e74c2"
                      href="https://www.salesforce.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_069f9897-76a0-0b51-0358-ff116630c410-8c4e74c2"
                      href="https://www.volvo.com/en/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                  </div>
                  <div className="logos_row">
                    <a
                      id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbb-8c4e74c2"
                      href="https://www.accenture.com/us-en"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbd-8c4e74c2"
                      href="https://www.amazon.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbf-8c4e74c2"
                      href="https://www.aljazeera.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      href="https://kpmg.com"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc3-8c4e74c2"
                      href="https://kw.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc5-8c4e74c2"
                      href="https://www.nvidia.com/en-us/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc9-8c4e74c2"
                      href="https://pattern.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dcb-8c4e74c2"
                      href="https://www.salesforce.com/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                    <a
                      id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dcd-8c4e74c2"
                      href="https://www.volvo.com/en/"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
                        loading="lazy"
                        alt=""
                        className="logos_img"
                      />
                    </a>
                  </div>
                </div>
                <div className="logos-shadows right" />
                <div className="logos-shadows" />
              </div>
            </div>
            <div className="hero_video_wrap">
              <div className="video_script_wrap">
                <div className="script_tabs">
                  <aside
                    id="script_tab1"
                    className="script_tab is-active w-node-_19293a8a-3f7c-c6bd-00d9-749ad883517d-8c4e74c2"
                  >
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp"
                      loading="lazy"
                      alt=""
                      className="script_tab_img"
                    />
                  </aside>
                  <div
                    id="script_tab2"
                    className="script_tab w-node-_0163b902-b715-43ac-6bf1-581d47c877bd-8c4e74c2"
                  >
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp"
                      loading="lazy"
                      alt=""
                      className="script_tab_img"
                    />
                  </div>
                  <div
                    id="script_tab3"
                    className="script_tab w-node-_45435275-c362-08f3-14a8-d6d6518a8c29-8c4e74c2"
                  >
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp"
                      loading="lazy"
                      alt=""
                      className="script_tab_img"
                    />
                  </div>
                </div>
                <div id="w-node-acbe90e9-4c8f-0138-a534-db5ffd0856f4-8c4e74c2">
                  <div className="script_heading">Script</div>
                  <div id="hero-script" className="script_para" />
                </div>
              </div>
              <div id="hero-video-1" className="hero_video_tabcontent">
                <div className="w-embed">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                .hero-video::-webkit-media-controls,\n                                .ai_voice_video::-webkit-media-controls,\n                                .muted-video::-webkit-media-controls,\n                                .muted-video::-webkit-media-controls {\n                                    display: none !important;\n                                }\n\n                                .hero-video::-moz-media-controls,\n                                .ai_voice_video::-moz-media-controls,\n                                .muted-video::-moz-media-controls,\n                                .muted-video::-moz-media-controls {\n                                    display: none !important;\n                                }\n\n                                .hero-video::-ms-media-controls,\n                                .ai_voice_video::-ms-media-controls,\n                                .translator_video::-ms-media-controls,\n                                .muted-video::-ms-media-controls {\n                                    display: none !important;\n                                }\n\n                                .video-preview {\n                                    aspect-ratio: 16/9;\n                                    height: auto;\n                                    width: 100%;\n                                    margin-right: auto;\n                                    margin-left: auto;\n                                    object-fit: cover;\n                                    position: relative;\n                                    z-index: 2;\n                                }\n\n                                .hero-video {\n                                    aspect-ratio: 16/9;\n                                    transform: scale(1.01);\n                                    height: auto;\n                                    width: 100%;\n                                    margin-right: auto;\n                                    margin-left: auto;\n                                    object-fit: cover;\n                                    display: flex;\n                                    position: relative;\n                                }\n\n                                .hero_video_tabcontent {\n                                    aspect-ratio: 16/9;\n                                }\n\n                                .muted-video {\n                                    aspect-ratio: 16/9;\n                                    transform: scale(1.01);\n                                    height: auto;\n                                    width: 100%;\n                                    margin-right: auto;\n                                    margin-left: auto;\n                                    object-fit: cover;\n                                    display: flex;\n                                    position: relative;\n                                }\n\n                                @media screen and (max-width: 478px) {\n                                    .hero-video,\n                                    .muted-video,\n                                    .ai_voice_video,\n                                    .translator_video,\n                                    .footer_cta_video {\n                                        display: none;\n                                    }\n                                    .video-preview {\n                                        height: 100%;\n                                        display: block;\n                                    }\n                                }\n                            ",
                    }}
                  />
                  <video
                    className="hero-video"
                    src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4"
                    type="video/mp4"
                    muted=""
                    autoPlay=""
                    loop=""
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 87vw, 100vw"
                  srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1.webp 1440w"
                  alt=""
                  className="video-preview"
                />
                <div className="video_purple_blur" />
                <div className="video_btn_wrap is-hero">
                  <div className="video_btn">
                    <div className="btn_play_icon w-embed">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>Demo</div>
                  </div>
                </div>
              </div>
              <div
                id="hero-video-2"
                className="hero_video_tabcontent is-hidden"
              >
                <div className="w-embed">
                  <video
                    className="hero-video"
                    src="https://resource.heygencdn.com/homepage/header_video_studio_avatar2.mp4"
                    type="video/mp4"
                    muted=""
                    autoPlay=""
                    loop=""
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2.webp 1440w"
                  alt=""
                  className="video-preview"
                />
                <div className="video_purple_blur" />
                <div className="video_btn_wrap is-hero">
                  <div className="video_btn">
                    <div className="btn_play_icon w-embed">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>Demo</div>
                  </div>
                </div>
              </div>
              <div
                id="hero-video-3"
                className="hero_video_tabcontent is-hidden"
              >
                <div className="w-embed">
                  <video
                    className="hero-video"
                    src="https://resource.heygencdn.com/homepage/header_video_instant_avatar2.mp4"
                    type="video/mp4"
                    muted=""
                    autoPlay=""
                    loop=""
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3.webp 1440w"
                  alt=""
                  className="video-preview"
                />
                <div className="video_purple_blur" />
                <div className="video_btn_wrap is-hero">
                  <div className="video_btn">
                    <div className="btn_play_icon w-embed">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>Demo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="background_section">
      <img
        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c4edf1c49ad5ab27cd37b_blur-purple.svg"
        loading="eager"
        alt=""
        className="blur_bg_purple"
      />
    </div>
    <section className="section_purple mobile-z-10">
      <div className="gobal_padding">
        <div className="w-layout-blockcontainer heygen_container w-container">
          <div className="create_heading_wrap">
            <h2 className="heygen_section_heading">
              Create videos for every team
            </h2>
            <p className="create_para">
              Engage, explain, entertain - AI-Powered video creation for any
              need.
            </p>
          </div>
          <div className="create_crads_grid">
            <div
              id="w-node-_9e87974b-df6e-013a-efff-d6e90fb9dbbd-8c4e74c2"
              className="create_crads_col"
            >
              <div className="create_video_card">
                <div className="relative create_video_wrap">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2de9b149e5acd83d8c71_Video%20Frame.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 44vw, 100vw"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2de9b149e5acd83d8c71_Video%20Frame-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2de9b149e5acd83d8c71_Video%20Frame-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2de9b149e5acd83d8c71_Video%20Frame-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2de9b149e5acd83d8c71_Video%20Frame.webp 1440w"
                    alt=""
                    className="video-preview"
                  />
                  <div className="create_video_wrap w-embed">
                    <video
                      className="muted-video"
                      src="https://resource.heygencdn.com/homepage/usecase_sales2.mp4"
                      type="video/mp4"
                      muted=""
                      autoPlay=""
                      loop=""
                    ></video>
                  </div>
                  <div className="button_play is-create-mobile">
                    <div className="btn_play_video_icon w-embed">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.01389 1.41453C3.22794 1.29767 3.48872 1.30701 3.69386 1.43889L13.0272 7.43889C13.218 7.56156 13.3334 7.77283 13.3334 7.99967C13.3334 8.22652 13.218 8.43779 13.0272 8.56046L3.69386 14.5605C3.48872 14.6923 3.22794 14.7017 3.01389 14.5848C2.79985 14.468 2.66669 14.2435 2.66669 13.9997V1.99967C2.66669 1.7558 2.79985 1.53139 3.01389 1.41453ZM4.00002 3.22079V12.7786L11.4338 7.99967L4.00002 3.22079Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="create_card_content is-relative">
                  <div className="create_card_details">
                    <div>
                      <h3 className="create_cred_head">
                        Sales outreach
                        <br />
                        <span className="light-purple_span">
                          that converts
                        </span>
                      </h3>
                      <div className="create_cred_info">
                        Create personalized outreach videos at scale
                      </div>
                    </div>
                    <div className="create_card_btns">
                      <a
                        href="https://app.heygen.com/login"
                        target="_blank"
                        className="button_primary is-create w-inline-block"
                      >
                        <div>Get started</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                      <div className="button_play">
                        <div className="btn_play_video_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01389 1.41453C3.22794 1.29767 3.48872 1.30701 3.69386 1.43889L13.0272 7.43889C13.218 7.56156 13.3334 7.77283 13.3334 7.99967C13.3334 8.22652 13.218 8.43779 13.0272 8.56046L3.69386 14.5605C3.48872 14.6923 3.22794 14.7017 3.01389 14.5848C2.79985 14.468 2.66669 14.2435 2.66669 13.9997V1.99967C2.66669 1.7558 2.79985 1.53139 3.01389 1.41453ZM4.00002 3.22079V12.7786L11.4338 7.99967L4.00002 3.22079Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="create_card_mask is-below" />
                </div>
              </div>
              <div className="create_video_card">
                <div className="relative create_video_wrap">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deaccc6bb0b43259ac6_Video%20Frame%20(1).webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 44vw, 100vw"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deaccc6bb0b43259ac6_Video%20Frame%20(1)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deaccc6bb0b43259ac6_Video%20Frame%20(1)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deaccc6bb0b43259ac6_Video%20Frame%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deaccc6bb0b43259ac6_Video%20Frame%20(1).webp 1440w"
                    alt=""
                    className="video-preview"
                  />
                  <div className="create_video_wrap w-embed">
                    <video
                      className="muted-video"
                      src="https://resource.heygencdn.com/homepage/usecase_mailchimp2.mp4"
                      type="video/mp4"
                      muted=""
                      autoPlay=""
                      loop=""
                    ></video>
                  </div>
                  <div className="button_play is-create-mobile">
                    <div className="btn_play_video_icon w-embed">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.01389 1.41453C3.22794 1.29767 3.48872 1.30701 3.69386 1.43889L13.0272 7.43889C13.218 7.56156 13.3334 7.77283 13.3334 7.99967C13.3334 8.22652 13.218 8.43779 13.0272 8.56046L3.69386 14.5605C3.48872 14.6923 3.22794 14.7017 3.01389 14.5848C2.79985 14.468 2.66669 14.2435 2.66669 13.9997V1.99967C2.66669 1.7558 2.79985 1.53139 3.01389 1.41453ZM4.00002 3.22079V12.7786L11.4338 7.99967L4.00002 3.22079Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="create_card_content is-relative">
                  <div className="create_card_details">
                    <div>
                      <h3 className="create_cred_head">
                        Content marketing
                        <br />‍
                        <span className="light-purple_span">
                          that engage
                        </span>
                      </h3>
                      <div className="create_cred_info">
                        Supercharge your content calendar with videos
                      </div>
                    </div>
                    <div className="create_card_btns">
                      <a
                        href="https://app.heygen.com/login"
                        target="_blank"
                        className="button_primary is-create w-inline-block"
                      >
                        <div>Get started</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                      <div className="button_play">
                        <div className="btn_play_video_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01389 1.41453C3.22794 1.29767 3.48872 1.30701 3.69386 1.43889L13.0272 7.43889C13.218 7.56156 13.3334 7.77283 13.3334 7.99967C13.3334 8.22652 13.218 8.43779 13.0272 8.56046L3.69386 14.5605C3.48872 14.6923 3.22794 14.7017 3.01389 14.5848C2.79985 14.468 2.66669 14.2435 2.66669 13.9997V1.99967C2.66669 1.7558 2.79985 1.53139 3.01389 1.41453ZM4.00002 3.22079V12.7786L11.4338 7.99967L4.00002 3.22079Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="create_card_mask is-below" />
                </div>
              </div>
            </div>
            <div
              id="w-node-a4e5afa5-c9c5-7cb7-c74a-6442a809679c-8c4e74c2"
              className="create_col-2"
            >
              <p className="create_para-_pc">
                Engage, explain, entertain. AI-powered video creation for
                any need.
              </p>
              <div
                id="w-node-f981df19-6f0d-952b-c930-593ac824a8f2-8c4e74c2"
                className="create_crads_col"
              >
                <div className="create_video_card">
                  <div className="relative create_video_wrap">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2df02321a8598c6f3083_Frame.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 44vw, 100vw"
                      srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2df02321a8598c6f3083_Frame-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2df02321a8598c6f3083_Frame-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2df02321a8598c6f3083_Frame-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2df02321a8598c6f3083_Frame.webp 1440w"
                      alt=""
                      className="video-preview"
                    />
                    <div className="create_video_wrap w-embed">
                      <video
                        className="muted-video"
                        src="https://resource.heygencdn.com/homepage/usecase_productmarketing2.mp4
"
                        type="video/mp4"
                        muted=""
                        autoPlay=""
                        loop=""
                      ></video>
                    </div>
                    <div className="button_play is-create-mobile">
                      <div className="btn_play_video_icon w-embed">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.01389 1.41453C3.22794 1.29767 3.48872 1.30701 3.69386 1.43889L13.0272 7.43889C13.218 7.56156 13.3334 7.77283 13.3334 7.99967C13.3334 8.22652 13.218 8.43779 13.0272 8.56046L3.69386 14.5605C3.48872 14.6923 3.22794 14.7017 3.01389 14.5848C2.79985 14.468 2.66669 14.2435 2.66669 13.9997V1.99967C2.66669 1.7558 2.79985 1.53139 3.01389 1.41453ZM4.00002 3.22079V12.7786L11.4338 7.99967L4.00002 3.22079Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="create_card_content is-relative">
                    <div className="create_card_details">
                      <div>
                        <h3 className="create_cred_head">
                          Product marketing
                          <br />‍
                          <span className="light-purple_span">
                            that resonates
                          </span>
                        </h3>
                        <div className="create_cred_info">
                          Produce engaging &amp; concise product videos
                        </div>
                      </div>
                      <div className="create_card_btns">
                        <a
                          href="https://app.heygen.com/login"
                          target="_blank"
                          className="button_primary is-create w-inline-block"
                        >
                          <div>Get started</div>
                          <div className="btn_right_arrow_icon w-embed">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                                fill="white"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </a>
                        <div className="button_play">
                          <div className="btn_play_video_icon w-embed">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.01389 1.41453C3.22794 1.29767 3.48872 1.30701 3.69386 1.43889L13.0272 7.43889C13.218 7.56156 13.3334 7.77283 13.3334 7.99967C13.3334 8.22652 13.218 8.43779 13.0272 8.56046L3.69386 14.5605C3.48872 14.6923 3.22794 14.7017 3.01389 14.5848C2.79985 14.468 2.66669 14.2435 2.66669 13.9997V1.99967C2.66669 1.7558 2.79985 1.53139 3.01389 1.41453ZM4.00002 3.22079V12.7786L11.4338 7.99967L4.00002 3.22079Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="create_card_mask is-below" />
                  </div>
                </div>
                <div className="create_video_card">
                  <div className="relative create_video_wrap">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deda795ed37cbb36946_Frame%20Extractor.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 44vw, 100vw"
                      srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deda795ed37cbb36946_Frame%20Extractor-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deda795ed37cbb36946_Frame%20Extractor-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deda795ed37cbb36946_Frame%20Extractor-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d2deda795ed37cbb36946_Frame%20Extractor.webp 1440w"
                      alt=""
                      className="video-preview"
                    />
                    <div className="create_video_wrap w-embed">
                      <video
                        className="muted-video"
                        src="https://resource.heygencdn.com/website/vera_remove/usecase_lnd2_new_output.mp4"
                        type="video/mp4"
                        muted=""
                        autoPlay=""
                        loop=""
                      ></video>
                    </div>
                    <div className="button_play is-create-mobile">
                      <div className="btn_play_video_icon w-embed">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.01389 1.41453C3.22794 1.29767 3.48872 1.30701 3.69386 1.43889L13.0272 7.43889C13.218 7.56156 13.3334 7.77283 13.3334 7.99967C13.3334 8.22652 13.218 8.43779 13.0272 8.56046L3.69386 14.5605C3.48872 14.6923 3.22794 14.7017 3.01389 14.5848C2.79985 14.468 2.66669 14.2435 2.66669 13.9997V1.99967C2.66669 1.7558 2.79985 1.53139 3.01389 1.41453ZM4.00002 3.22079V12.7786L11.4338 7.99967L4.00002 3.22079Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="create_card_content is-relative">
                    <div className="create_card_details">
                      <div>
                        <h3 className="create_cred_head">
                          Learning &amp; development
                          <br />
                          <span className="light-purple_span">
                            that teaches
                          </span>
                        </h3>
                        <div className="create_cred_info">
                          Create training videos your team will actually
                          watch
                        </div>
                      </div>
                      <div className="create_card_btns">
                        <a
                          href="https://app.heygen.com/login"
                          target="_blank"
                          className="button_primary is-create w-inline-block"
                        >
                          <div>Get started</div>
                          <div className="btn_right_arrow_icon w-embed">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                                fill="white"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </a>
                        <div className="button_play">
                          <div className="btn_play_video_icon w-embed">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.01389 1.41453C3.22794 1.29767 3.48872 1.30701 3.69386 1.43889L13.0272 7.43889C13.218 7.56156 13.3334 7.77283 13.3334 7.99967C13.3334 8.22652 13.218 8.43779 13.0272 8.56046L3.69386 14.5605C3.48872 14.6923 3.22794 14.7017 3.01389 14.5848C2.79985 14.468 2.66669 14.2435 2.66669 13.9997V1.99967C2.66669 1.7558 2.79985 1.53139 3.01389 1.41453ZM4.00002 3.22079V12.7786L11.4338 7.99967L4.00002 3.22079Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="create_card_mask is-below" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="background_section is-under">
      <div className="blur_bg_black" />
    </div>
    <section>
      <div className="how_padding">
        <div className="w-layout-blockcontainer heygen_container w-container">
          <div className="div-block-273">
            <h2
              id="w-node-_9ddfc2ad-d786-57b7-abfc-64f9a18d17c3-8c4e74c2"
              className="heygen_section_heading is-black"
            >
              How it works
            </h2>
            <div className="how_video">
              <div className="how_video_wrap w-embed">
                <video
                  className="muted-video"
                  src="https://resource.heygencdn.com/website/vera_remove/howitworks_new2.mp4"
                  type="video/mp4"
                  muted=""
                  autoPlay=""
                  loop=""
                ></video>
              </div>
              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3738ce05a3b01d9ab358_Video.webp"
                loading="lazy"
                sizes="100vw"
                srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3738ce05a3b01d9ab358_Video-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3738ce05a3b01d9ab358_Video-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3738ce05a3b01d9ab358_Video-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3738ce05a3b01d9ab358_Video.webp 1440w"
                alt=""
                className="video-preview"
              />
              <div className="video_purple_blur" />
              <div className="video_btn_wrap">
                <div className="video_btn">
                  <div className="btn_play_icon w-embed">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>Demo</div>
                </div>
              </div>
            </div>
            <a
              id="w-node-_7cd5bfe7-c9d5-d905-ae95-982e866b0046-8c4e74c2"
              href="https://app.heygen.com/login"
              target="_blank"
              className="button_primary w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp"
                loading="lazy"
                alt=""
                className="image-82"
              />
              <div>Get started for free</div>
              <div className="btn_right_arrow_icon w-embed">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <div
              id="w-node-b02be2ee-7fa1-2174-402e-55adf03ec90a-8c4e74c2"
              className="how_para"
            >
              <p className="heygen_para">
                Whether you're a professional or beginner, you can create
                stunning videos in minutes instead of hours.
              </p>
            </div>
          </div>
        </div>
        <div className="how_cards">
          <div
            id="w-node-_5ba5d9f0-f139-a3f8-b24a-ca4c91a4b1c0-8c4e74c2"
            className="how_card"
          >
            <div>
              <h2 className="how_card_num">01</h2>
              <h3 className="how_card_head">Create or choose an avatar</h3>
              <p className="how_card_para">
                Choose from over 100+ AI avatars or customize your own.
              </p>
            </div>
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01.webp"
              loading="lazy"
              id="w-node-_6150de54-99dd-30b3-ed15-7add9384b288-8c4e74c2"
              sizes="(max-width: 479px) 236px, (max-width: 991px) 293px, (max-width: 1439px) 23vw, 294.65625px"
              alt=""
              srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01.webp 522w"
            />
          </div>
          <div
            id="w-node-_344ad384-c340-d081-f420-e3b8b914cae5-8c4e74c2"
            className="how_card padding-0"
          >
            <div
              id="w-node-b44b867b-373b-0eae-d602-44a3c7fe0bef-8c4e74c2"
              className="div-block-277"
            >
              <h2 className="how_card_num">02</h2>
              <h3 className="how_card_head">Record or choose a voice</h3>
              <p className="how_card_para">
                Choose from a collection of high-quality voices or record
                your own.
              </p>
            </div>
            <div
              id="w-node-cc7b7c79-0813-bd24-37cd-1c6f7683ec6b-8c4e74c2"
              className="div-block-276"
            >
              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560dc6ccd59219021d1e076_vibe.svg"
                alt=""
                className="voice-scrolling-img"
              />
              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560dc6ccd59219021d1e076_vibe.svg"
                alt=""
                className="voice-scrolling-img"
              />
              <div className="w-embed">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                .voice-scrolling-img {\n                                    will-change: transform;\n                                    animation: voice-horizontal 150s linear infinite;\n                                }\n\n                                @keyframes voice-horizontal {\n                                    from {\n                                        transform: translateX(0);\n                                    }\n                                    to {\n                                        transform: translateX(-100%);\n                                    }\n                                }\n                            ",
                  }}
                />
              </div>
              <div className="div-block-278">
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560dea5caeea449781b1402_how-card-btn1.webp"
                  loading="lazy"
                  id="w-node-_69b350e4-6a61-659b-14a3-ed02adf03629-8c4e74c2"
                  alt=""
                  className="image-84 shadows_3"
                />
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560dea5e4754f9e471d758f_how-card-btn2.webp"
                  loading="lazy"
                  id="w-node-c124413a-d710-820b-c454-3cfd1010d0c4-8c4e74c2"
                  alt=""
                  className="image-84 shadows_3"
                />
              </div>
            </div>
          </div>
          <div
            id="w-node-_33c8d3d5-23e6-abdc-e2a4-06f312009747-8c4e74c2"
            className="how_card padding-0"
          >
            <div
              id="w-node-_33c8d3d5-23e6-abdc-e2a4-06f312009748-8c4e74c2"
              className="div-block-277"
            >
              <h2 className="how_card_num">03</h2>
              <h3 className="how_card_head">
                Select a template or start from scratch
              </h3>
              <p className="how_card_para">
                Select from an extensive array of ready-to-use templates for
                any scenario, or begin with a clean slate.
              </p>
            </div>
            <div
              id="w-node-_33c8d3d5-23e6-abdc-e2a4-06f31200974f-8c4e74c2"
              className="how_3_scrolling_wrap"
            >
              <div className="how_3_scrolling_row_wrap">
                <div className="how_3_scrolling_row">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp"
                    alt=""
                    sizes="(max-width: 479px) 100vw, 535.5625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp 1064w"
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp"
                    alt=""
                    sizes="(max-width: 479px) 100vw, 535.5625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp 1064w"
                    className="how_3_scrolling_img"
                  />
                </div>
                <div className="how_3_scrolling_row">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp"
                    alt=""
                    sizes="(max-width: 479px) 100vw, 535.5625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp 1064w"
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp"
                    alt=""
                    sizes="(max-width: 479px) 100vw, 535.5625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp 1064w"
                    className="how_3_scrolling_img"
                  />
                </div>
                <div className="how_3_scrolling_row">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp"
                    alt=""
                    sizes="(max-width: 479px) 100vw, 535.5625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp 1064w"
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp"
                    alt=""
                    sizes="(max-width: 479px) 100vw, 535.5625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65677c600d63e879657b2895_3row1.webp 1064w"
                    className="how_3_scrolling_img"
                  />
                </div>
              </div>
              <div className="how_3_scrolling_row_wrap">
                <div className="how_3_scrolling_row row2">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp"
                    alt=""
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp"
                    alt=""
                    className="how_3_scrolling_img"
                  />
                </div>
                <div className="how_3_scrolling_row row2">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp"
                    alt=""
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp"
                    alt=""
                    className="how_3_scrolling_img"
                  />
                </div>
                <div className="how_3_scrolling_row row2">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp"
                    alt=""
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp"
                    alt=""
                    className="how_3_scrolling_img"
                  />
                </div>
                <div className="how_3_scrolling_row row2">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a5b6b6fc76413d21c_feature_031.webp"
                    alt=""
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65850a94f4acae46f5fb2392_feature_031.webp"
                    alt=""
                    sizes="398.65625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65850a94f4acae46f5fb2392_feature_031-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65850a94f4acae46f5fb2392_feature_031.webp 792w"
                    className="how_3_scrolling_img"
                  />
                </div>
              </div>
              <div className="how_3_scrolling_row_wrap">
                <div className="how_3_scrolling_row">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp"
                    alt=""
                    sizes="398.65625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp 792w"
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp"
                    alt=""
                    sizes="398.65625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp 792w"
                    className="how_3_scrolling_img"
                  />
                </div>
                <div className="how_3_scrolling_row">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp"
                    alt=""
                    sizes="398.65625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp 792w"
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp"
                    alt=""
                    sizes="398.65625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp 792w"
                    className="how_3_scrolling_img"
                  />
                </div>
                <div className="how_3_scrolling_row">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp"
                    alt=""
                    sizes="398.65625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp 792w"
                    className="how_3_scrolling_img"
                  />
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp"
                    alt=""
                    sizes="398.65625px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65b2593a934f65c19a1cfdba_feature_032.webp 792w"
                    className="how_3_scrolling_img"
                  />
                </div>
              </div>
              <div className="w-embed">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                .how_3_scrolling_row {\n                                    will-change: transform;\n                                    animation: how3-horizontal 250s linear infinite;\n                                }\n\n                                .how_3_scrolling_row.row2 {\n                                    will-change: transform;\n                                    animation: how3-2-horizontal 250s linear infinite;\n                                }\n\n                                @keyframes how3-horizontal {\n                                    from {\n                                        transform: translateX(0);\n                                    }\n                                    to {\n                                        transform: translateX(-100%);\n                                    }\n                                }\n\n                                @keyframes how3-2-horizontal {\n                                    from {\n                                        transform: translateX(0);\n                                    }\n                                    to {\n                                        transform: translateX(100%);\n                                    }\n                                }\n                            ",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section_dark">
      <div className="avatar_padding">
        <div className="w-layout-blockcontainer heygen_container w-container">
          <div className="avatars_head">
            <div className="section_head_padding_2">
              <div className="section_head_padding">
                <h2 className="heygen_section_heading is-center">
                  AI avatars
                </h2>
                <p className="heygen_para is-light avatar">
                  Choose your perfect avatar covering different ethnicities,
                  ages, poses and clothes.
                </p>
              </div>
              <div className="_2_btns_or_wrap">
                <a
                  href="https://app.heygen.com/login"
                  target="_blank"
                  className="button_primary w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp"
                    loading="lazy"
                    alt=""
                    className="image-82"
                  />
                  <div>Get started for free</div>
                  <div className="btn_right_arrow_icon w-embed">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
                <div>or</div>
                <a
                  href="/create-avatar"
                  className="button_secondary w-inline-block"
                >
                  <div className="btn_video_icon w-embed">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1847_36)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.4717 4.07373C16.6938 4.18799 16.8333 4.41678 16.8333 4.6665V11.3332C16.8333 11.5829 16.6938 11.8117 16.4717 11.9259C16.2497 12.0402 15.9824 12.0208 15.7792 11.8757L11.1125 8.54233C10.9373 8.41719 10.8333 8.21514 10.8333 7.99984C10.8333 7.78454 10.9373 7.58249 11.1125 7.45735L15.7792 4.12401C15.9824 3.97887 16.2497 3.95946 16.4717 4.07373ZM12.647 7.99984L15.5 10.0377V5.96196L12.647 7.99984Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.83334 3.99984C2.46515 3.99984 2.16668 4.29831 2.16668 4.6665V11.3332C2.16668 11.7014 2.46515 11.9998 2.83334 11.9998H10.1667C10.5349 11.9998 10.8333 11.7014 10.8333 11.3332V4.6665C10.8333 4.29831 10.5349 3.99984 10.1667 3.99984H2.83334ZM0.833344 4.6665C0.833344 3.56193 1.72877 2.6665 2.83334 2.6665H10.1667C11.2712 2.6665 12.1667 3.56193 12.1667 4.6665V11.3332C12.1667 12.4377 11.2712 13.3332 10.1667 13.3332H2.83334C1.72877 13.3332 0.833344 12.4377 0.833344 11.3332V4.6665Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1847_36">
                          <rect
                            width={16}
                            height={16}
                            fill="white"
                            transform="translate(0.833344)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>Create your own custom avatar</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="avatars_cards_wrapper">
          <div className="avatars_wrap">
            <div className="avatars_row_wrap">
              <div className="avatars_row">
                <div className="avatars_row_items">
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccf7db78031ca7c4c2d_01.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65854d2b5bd2e3203e00e948_Avatar.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd08397f73bfbbc02fb_03.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd4c0886512e6dc092c_05.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd403de1871d2d426cb_07.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccebdf82350d6317b90_08.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd894bb4d7d86799639_13.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd909abf7d03dbac4fb_10.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd2a7d01fc94a727fab_06.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd7da46e743b668a1d5_12.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                </div>
              </div>
              <div className="avatars_row">
                <div className="avatars_row_items">
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccf7db78031ca7c4c2d_01.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65854d2b5bd2e3203e00e948_Avatar.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd08397f73bfbbc02fb_03.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd4c0886512e6dc092c_05.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd403de1871d2d426cb_07.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccebdf82350d6317b90_08.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd894bb4d7d86799639_13.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd909abf7d03dbac4fb_10.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd2a7d01fc94a727fab_06.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd7da46e743b668a1d5_12.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                </div>
              </div>
              <div className="avatars_row">
                <div className="avatars_row_items">
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccf7db78031ca7c4c2d_01.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65854d2b5bd2e3203e00e948_Avatar.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd08397f73bfbbc02fb_03.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd4c0886512e6dc092c_05.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd403de1871d2d426cb_07.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ccebdf82350d6317b90_08.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd894bb4d7d86799639_13.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd909abf7d03dbac4fb_10.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd2a7d01fc94a727fab_06.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cd7da46e743b668a1d5_12.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                </div>
              </div>
            </div>
            <div className="avatars_row_wrap">
              <div className="avatars_row row2">
                <div className="avatars_row_items">
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cdb7d557bdc613b6c5c_16.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4111dd4df1ef2ad75_18.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4e5478bae9e191561_19.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4d5b2d0fa8af4ca2d_20.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bbbb99d6f30f6127a6c_Avatar-7.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce5f05eb306f94cdf5b_22.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce5b97e22e1e396eca8_23.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bc0bdd2b122ad7e25e5_Avatar-10.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cee111dd4df1ef2b15b_25.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                </div>
              </div>
              <div className="avatars_row row2">
                <div className="avatars_row_items">
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cdb7d557bdc613b6c5c_16.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4111dd4df1ef2ad75_18.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4e5478bae9e191561_19.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4d5b2d0fa8af4ca2d_20.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bbbb99d6f30f6127a6c_Avatar-7.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce5f05eb306f94cdf5b_22.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce5b97e22e1e396eca8_23.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bc0bdd2b122ad7e25e5_Avatar-10.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cee111dd4df1ef2b15b_25.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                </div>
              </div>
              <div className="avatars_row row2">
                <div className="avatars_row_items">
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cdb7d557bdc613b6c5c_16.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4111dd4df1ef2ad75_18.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4e5478bae9e191561_19.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce4d5b2d0fa8af4ca2d_20.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bbbb99d6f30f6127a6c_Avatar-7.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce5f05eb306f94cdf5b_22.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3ce5b97e22e1e396eca8_23.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65675bc0bdd2b122ad7e25e5_Avatar-10.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                  <div className="avatar_card">
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656b3cee111dd4df1ef2b15b_25.webp"
                      alt=""
                    />
                    <div className="avatar_btn_wrap">
                      <a
                        href="/create-avatar"
                        className="button_avatar_card w-inline-block"
                      >
                        <div>Customize</div>
                        <div className="btn_right_arrow_icon w-embed">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="avatar_card_mask" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dark_section_light_blur_bg" />
          <div className="w-embed">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                        .avatars_row {\n                            will-change: transform;\n                            animation: avatar-horizontal 250s linear infinite;\n                        }\n\n                        .avatars_row.row2 {\n                            will-change: transform;\n                            animation: avatar-left-horizontal 250s linear infinite;\n                        }\n\n                        @keyframes avatar-horizontal {\n                            from {\n                                transform: translateX(0);\n                            }\n                            to {\n                                transform: translateX(-100%);\n                            }\n                        }\n\n                        @keyframes avatar-left-horizontal {\n                            from {\n                                transform: translateX(0);\n                            }\n                            to {\n                                transform: translateX(100%);\n                            }\n                        }\n                    ",
              }}
            />
          </div>
        </div>
        <div className="w-layout-blockcontainer heygen_container w-container">
          <div className="avatar_video_list">
            <div className="avatar_video_item">
              <div className="avatar_video_heading_wrapper">
                <div className="avatar_video_head">
                  <h3 className="avatar_video_heading">Instant avatar</h3>
                  <p className="heygen_para is-light is-small">
                    A lifestyle avatar in a natural setting
                  </p>
                </div>
                <a
                  href="https://app.heygen.com/login"
                  target="_blank"
                  className="button_primary w-inline-block"
                >
                  <div>Get started for free</div>
                  <div className="btn_right_arrow_icon w-embed">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="avatar_video">
                <div className="avatar_video_wrap w-embed">
                  <video
                    className="muted-video"
                    src="https://resource.heygencdn.com/homepage/AIavatar_instant4.mp4"
                    type="video/mp4"
                    muted=""
                    autoPlay=""
                    loop=""
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d364fce05a3b01d9a0a31_Video%20(1).webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 93vw, 100vw"
                  srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d364fce05a3b01d9a0a31_Video%20(1)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d364fce05a3b01d9a0a31_Video%20(1)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d364fce05a3b01d9a0a31_Video%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d364fce05a3b01d9a0a31_Video%20(1).webp 1440w"
                  alt=""
                  className="video-preview"
                />
                <div className="video_purple_blur" />
                <div className="video_btn_wrap">
                  <div className="video_btn_square">
                    <div className="btn_play_icon w-embed">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="avatars_section_item_line w-embed">
                <svg
                  width={626}
                  height={4}
                  viewBox="0 0 626 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.74846e-07"
                    y1={2}
                    x2={626}
                    y2="2.00005"
                    stroke="url(#paint0_linear_1726_5082)"
                    strokeWidth={4}
                    strokeDasharray="1 2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1726_5082"
                      x1="587.059"
                      y1="5.00434"
                      x2="-2.16798e-07"
                      y2="5.00421"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7559FF" />
                      <stop
                        offset={1}
                        stopColor="#7559FF"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="avatar_video_item">
              <div className="avatar_video_heading_wrapper">
                <div className="avatar_video_head">
                  <h3 className="avatar_video_heading">Studio avatar</h3>
                  <p className="heygen_para is-light is-small">
                    A professional-grade avatar for diverse application
                  </p>
                </div>
                <a
                  href="https://app.heygen.com/login"
                  target="_blank"
                  className="button_primary w-inline-block"
                >
                  <div>Get started for free</div>
                  <div className="btn_right_arrow_icon w-embed">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="avatar_video">
                <div className="avatar_video_wrap w-embed">
                  <video
                    className="muted-video"
                    src="https://resource.heygencdn.com/website/vera_remove/aiavatar_studio3.mp4"
                    type="video/mp4"
                    muted=""
                    autoPlay=""
                    loop=""
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36450b2fc19ffd03ccfd_Frame%20(1).webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 93vw, 100vw"
                  srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36450b2fc19ffd03ccfd_Frame%20(1)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36450b2fc19ffd03ccfd_Frame%20(1)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36450b2fc19ffd03ccfd_Frame%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36450b2fc19ffd03ccfd_Frame%20(1).webp 1440w"
                  alt=""
                  className="video-preview"
                />
                <div className="video_purple_blur" />
                <div className="video_btn_wrap">
                  <div className="video_btn_square">
                    <div className="btn_play_icon w-embed">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="avatars_section_item_line w-embed">
                <svg
                  width={626}
                  height={4}
                  viewBox="0 0 626 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.74846e-07"
                    y1={2}
                    x2={626}
                    y2="2.00005"
                    stroke="url(#paint0_linear_1726_5082)"
                    strokeWidth={4}
                    strokeDasharray="1 2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1726_5082"
                      x1="587.059"
                      y1="5.00434"
                      x2="-2.16798e-07"
                      y2="5.00421"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7559FF" />
                      <stop
                        offset={1}
                        stopColor="#7559FF"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="avatar_video_item">
              <div className="avatar_video_heading_wrapper">
                <div className="avatar_video_head">
                  <h3 className="avatar_video_heading">Photo avatar</h3>
                  <p className="heygen_para is-light is-small">
                    A dynamically animated photograph
                  </p>
                </div>
                <a
                  href="https://app.heygen.com/login"
                  target="_blank"
                  className="button_primary w-inline-block"
                >
                  <div>Get started for free</div>
                  <div className="btn_right_arrow_icon w-embed">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="avatar_video">
                <div className="avatar_video_wrap w-embed">
                  <video
                    className="muted-video"
                    src="https://resource.heygencdn.com/homepage/AIavatar_photo4.mp4"
                    type="video/mp4"
                    muted=""
                    autoPlay=""
                    loop=""
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36513eaa4596658937ac_Video%20Frame%20(2).webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 93vw, 100vw"
                  srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36513eaa4596658937ac_Video%20Frame%20(2)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36513eaa4596658937ac_Video%20Frame%20(2)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36513eaa4596658937ac_Video%20Frame%20(2)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d36513eaa4596658937ac_Video%20Frame%20(2).webp 1440w"
                  alt=""
                  className="video-preview"
                />
                <div className="video_purple_blur" />
                <div className="video_btn_wrap">
                  <div className="video_btn_square">
                    <div className="btn_play_icon w-embed">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="avatars_section_item_line w-embed">
                <svg
                  width={626}
                  height={4}
                  viewBox="0 0 626 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.74846e-07"
                    y1={2}
                    x2={626}
                    y2="2.00005"
                    stroke="url(#paint0_linear_1726_5082)"
                    strokeWidth={4}
                    strokeDasharray="1 2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1726_5082"
                      x1="587.059"
                      y1="5.00434"
                      x2="-2.16798e-07"
                      y2="5.00421"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7559FF" />
                      <stop
                        offset={1}
                        stopColor="#7559FF"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="voices_padding">
        <div className="w-layout-blockcontainer heygen_container w-container">
          <div className="voices_wrap">
            <div className="voices_content">
              <div className="section_head_padding_2">
                <div className="section_head_padding voice">
                  <h2 className="heygen_section_heading is-black">
                    AI voices
                  </h2>
                  <p className="heygen_para">
                    Select a premium voice across any style or language.
                    Benefit from our AI-Driven text reader, infusing
                    human-like intonation and inflections with exceptional
                    accuracy.
                  </p>
                </div>
                <div className="_2_btns_or_wrap voices">
                  <a
                    href="https://app.heygen.com/login"
                    target="_blank"
                    className="button_primary w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6560d706514c51af627b9c97_how-btn-img.webp"
                      loading="lazy"
                      alt=""
                      className="image-82"
                    />
                    <div>Get started for free</div>
                    <div className="btn_right_arrow_icon w-embed">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="w-node-_308966cd-076e-95bb-ba41-8ea73468f53e-8c4e74c2"
              className="voices_play_btns_wrapper"
            >
              <div className="voices_slider shadows_2 voice-fixed1">
                <div className="voice_slider_heading_div">
                  <h3 className="voices_slider_heading">
                    <span className="purple-span">300+</span> voices
                  </h3>
                  <div className="slider_control_wrap">
                    <div
                      id="voices_prev_btn"
                      className="btn_slide_left_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.41681 10C3.41681 9.58579 3.7526 9.25 4.16681 9.25L15.8335 9.25C16.2477 9.25 16.5835 9.58579 16.5835 10C16.5835 10.4142 16.2477 10.75 15.8335 10.75L4.16681 10.75C3.7526 10.75 3.41681 10.4142 3.41681 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.63648 10.5305C3.34359 10.2376 3.34359 9.76273 3.63648 9.46983L9.46982 3.6365C9.76271 3.34361 10.2376 3.34361 10.5305 3.6365C10.8234 3.92939 10.8234 4.40427 10.5305 4.69716L5.22747 10.0002L10.5305 15.3032C10.8234 15.5961 10.8234 16.0709 10.5305 16.3638C10.2376 16.6567 9.76271 16.6567 9.46981 16.3638L3.63648 10.5305Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      id="voices_next_btn"
                      className="btn_slide_right_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5833 10C16.5833 10.4142 16.2475 10.75 15.8333 10.75L4.16658 10.75C3.75237 10.75 3.41658 10.4142 3.41658 10C3.41658 9.58579 3.75237 9.25 4.16658 9.25L15.8333 9.25C16.2475 9.25 16.5833 9.58579 16.5833 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3636 9.46951C16.6565 9.7624 16.6565 10.2373 16.3636 10.5302L10.5302 16.3635C10.2374 16.6564 9.76248 16.6564 9.46959 16.3635C9.17669 16.0706 9.17669 15.5957 9.46959 15.3028L14.7726 9.99984L9.46959 4.69683C9.17669 4.40394 9.17669 3.92907 9.46959 3.63617C9.76248 3.34328 10.2374 3.34328 10.5302 3.63617L16.3636 9.46951Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  id="voice-slider"
                  className="splide w-node-e69c063c-7c9d-5e98-a231-9ba72e2b5b53-8c4e74c2"
                >
                  <div className="splide__track">
                    <div className="splide__list voices_slider_content">
                      <div className="splide__slide button_ai_voice">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/LeviFriendly_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">Levi</div>
                          <div className="ai_voice_chracter">Friendly</div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/CharlesNatural_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">Charles</div>
                          <div className="ai_voice_chracter">Natural</div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/EthanProfess_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">Ethan</div>
                          <div className="ai_voice_chracter">
                            Professional
                          </div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/Scarlettpro_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">Scarlett</div>
                          <div className="ai_voice_chracter">
                            Professional
                          </div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/BelleNatur_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">Belle</div>
                          <div className="ai_voice_chracter">Natural</div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/Alisoncheerful_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">Alison</div>
                          <div className="ai_voice_chracter">Cheerful</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="voices_slider shadows_2 voice-fixed2">
                <div className="voice_slider_heading_div">
                  <h3 className="voices_slider_heading">
                    <span className="purple-span">40+</span> languages
                  </h3>
                  <div className="slider_control_wrap">
                    <div
                      id="languages_prev_btn"
                      className="btn_slide_left_icon w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.41681 10C3.41681 9.58579 3.7526 9.25 4.16681 9.25L15.8335 9.25C16.2477 9.25 16.5835 9.58579 16.5835 10C16.5835 10.4142 16.2477 10.75 15.8335 10.75L4.16681 10.75C3.7526 10.75 3.41681 10.4142 3.41681 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.63648 10.5305C3.34359 10.2376 3.34359 9.76273 3.63648 9.46983L9.46982 3.6365C9.76271 3.34361 10.2376 3.34361 10.5305 3.6365C10.8234 3.92939 10.8234 4.40427 10.5305 4.69716L5.22747 10.0002L10.5305 15.3032C10.8234 15.5961 10.8234 16.0709 10.5305 16.3638C10.2376 16.6567 9.76271 16.6567 9.46981 16.3638L3.63648 10.5305Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      id="languages_next_btn"
                      className="btn_slide_right_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5833 10C16.5833 10.4142 16.2475 10.75 15.8333 10.75L4.16658 10.75C3.75237 10.75 3.41658 10.4142 3.41658 10C3.41658 9.58579 3.75237 9.25 4.16658 9.25L15.8333 9.25C16.2475 9.25 16.5833 9.58579 16.5833 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3636 9.46951C16.6565 9.7624 16.6565 10.2373 16.3636 10.5302L10.5302 16.3635C10.2374 16.6564 9.76248 16.6564 9.46959 16.3635C9.17669 16.0706 9.17669 15.5957 9.46959 15.3028L14.7726 9.99984L9.46959 4.69683C9.17669 4.40394 9.17669 3.92907 9.46959 3.63617C9.76248 3.34328 10.2374 3.34328 10.5302 3.63617L16.3636 9.46951Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="language-slider" className="splide">
                  <div className="splide__track">
                    <div className="splide__list voices_slider_content">
                      <div className="splide__slide button_ai_voice_language">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/Japanese_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">🇯🇵 Japanese</div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice_language">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/Spanish_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">🇪🇸 Spanish</div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice_language">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/Germany_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">🇩🇪 Germany</div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice_language">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/French_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">🇫🇷 French</div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice_language">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/Korean_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">🇰🇷 Korean</div>
                        </div>
                      </div>
                      <div className="splide__slide button_ai_voice_language">
                        <div className="audio_voice w-embed">
                          <audio
                            preload="none"
                            src="https://resource.heygencdn.com/homepage/Italian_out.mp3"
                          />
                        </div>
                        <div className="btn_play_voice_icon w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.01388 1.41502C3.22793 1.29816 3.4887 1.3075 3.69384 1.43938L13.0272 7.43938C13.218 7.56204 13.3333 7.77332 13.3333 8.00016C13.3333 8.22701 13.218 8.43828 13.0272 8.56095L3.69384 14.5609C3.4887 14.6928 3.22793 14.7022 3.01388 14.5853C2.79983 14.4684 2.66667 14.244 2.66667 14.0002V2.00016C2.66667 1.75629 2.79983 1.53188 3.01388 1.41502ZM4.00001 3.22127V12.7791L11.4338 8.00016L4.00001 3.22127Z"
                              fill="#0C062C"
                            />
                          </svg>
                        </div>
                        <div className="btn_playing_voice_icon is-hidden w-embed">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
                              fill="#7559FF"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
                              fill="#7559FF"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="ai_voice_name">🇮🇹 Italian</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="caf9285d-5c9b-7374-d024-82fe7a9e7cf8"
            className="ai_voice_script"
          >
            <div className="ai_voice_script_grid">
              <div className="ai_voice_script_script">
                <div>
                  <div className="text-block-90">Script</div>
                  <div id="ai_voices_script" className="ai_voices_script" />
                </div>
                <a href="/voice-cloning" className="button-10 w-button">
                  Generate voice
                </a>
                <div className="html-embed-14 w-embed">
                  <svg
                    viewBox="0 0 488 302"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 158.5L174.5 119"
                      stroke="white"
                      strokeWidth={4}
                      strokeDasharray="1 2"
                    />
                    <path
                      d="M1.5 158.5L309.5 300"
                      stroke="white"
                      strokeWidth={4}
                      strokeDasharray="1 2"
                    />
                    <path
                      d="M1.5 158.5L371.5 2.5"
                      stroke="white"
                      strokeWidth={4}
                      strokeDasharray="1 2"
                    />
                    <path
                      d="M1.5 158.5H488"
                      stroke="white"
                      strokeWidth={4}
                      strokeDasharray="1 2"
                    />
                  </svg>
                </div>
              </div>
              <div className="voices_videos_wrapper">
                <div className="voice_script_card _4">
                  <div className="voices_btn_wrap_voice">
                    <div className="video_btn_square is-short">
                      <div className="btn_play_icon w-embed">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div>Spanish</div>
                    </div>
                  </div>
                  <div className="ai_voice_video_wrap w-embed">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .ai_voice_video {\n                                            aspect-ratio: 16/9;\n                                            height: 100%;\n                                            max-height: 250px;\n                                            width: auto;\n                                            margin-right: auto;\n                                            margin-left: auto;\n                                            object-fit: cover;\n                                            position: relative;\n                                        }\n                                    ",
                      }}
                    />
                    <video
                      className="ai_voice_video"
                      src="https://resource.heygencdn.com/homepage/aivoices3_2.mp4"
                      type="video/mp4"
                      muted=""
                      autoPlay=""
                      loop=""
                    ></video>
                  </div>
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d369e812df05307549258_avatar-voice-preview.webp"
                    loading="lazy"
                    alt=""
                    className="video-preview"
                  />
                </div>
                <div className="voice_script_card _1">
                  <div className="voices_btn_wrap_voice">
                    <div className="video_btn_square is-short">
                      <div className="btn_play_icon w-embed">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div>English</div>
                    </div>
                  </div>
                  <div className="ai_voice_video_wrap w-embed">
                    <video
                      className="ai_voice_video"
                      src="https://resource.heygencdn.com/homepage/aivoices1_2.mp4"
                      type="video/mp4"
                      muted=""
                      autoPlay=""
                      loop=""
                    ></video>
                  </div>
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3699a4e346961e52a711_avatar-voice-preview-1.webp"
                    loading="lazy"
                    alt=""
                    className="video-preview"
                  />
                </div>
                <div className="voice_script_card _3">
                  <div className="voices_btn_wrap_voice">
                    <div className="video_btn_square is-short">
                      <div className="btn_play_icon w-embed">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div>French</div>
                    </div>
                  </div>
                  <div className="ai_voice_video_wrap w-embed">
                    <video
                      className="ai_voice_video"
                      src="https://resource.heygencdn.com/homepage/aivoices4_2.mp4"
                      type="video/mp4"
                      muted=""
                      autoPlay=""
                      loop=""
                    ></video>
                  </div>
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d369b4c3117db5e3c03bd_avatar-voice-preview-2.webp"
                    loading="lazy"
                    alt=""
                    className="video-preview"
                  />
                </div>
                <div className="voice_script_card _2">
                  <div className="voices_btn_wrap_voice">
                    <div className="video_btn_square is-short">
                      <div className="btn_play_icon w-embed">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div>Japanese</div>
                    </div>
                  </div>
                  <div className="ai_voice_video_wrap w-embed">
                    <video
                      className="ai_voice_video"
                      src="https://resource.heygencdn.com/homepage/aivoices2_2.mp4"
                      type="video/mp4"
                      muted=""
                      autoPlay=""
                      loop=""
                    ></video>
                  </div>
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d369cb149e5acd842f67b_avatar-voice-preview-3.webp"
                    loading="lazy"
                    alt=""
                    className="video-preview"
                  />
                </div>
              </div>
            </div>
            <div className="ai_voice_script_bg" />
          </div>
        </div>
      </div>
    </section>
    <div className="background_section">
      <img
        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c4edf1c49ad5ab27cd37b_blur-purple.svg"
        alt=""
        className="blur_bg_purple"
      />
    </div>
    <section className="section_purple feature">
      <div className="gobal_padding">
        <div className="w-layout-blockcontainer heygen_container w-container">
          <div className="feature_gaps">
            <div className="features_wrapper">
              <div
                id="w-node-_31c742be-50fd-7404-1cbe-c4610e7b35b4-8c4e74c2"
                className="feature_heading_wrap"
              >
                <h2 className="heygen_section_heading_feature">
                  Features for scale
                </h2>
                <p className="feature_para">
                  A full-featured platform for flawless video creation.
                </p>
              </div>
              <div
                id="w-node-_253ab555-c697-be58-2042-b6da174b5dbe-8c4e74c2"
                className="feature_card_2"
              >
                <div className="video_btn_wrap">
                  <div className="video_btn">
                    <div className="btn_play_icon w-embed">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>Nikki in Spanish</div>
                  </div>
                </div>
                <div className="feature_content_wrap">
                  <h3 className="feature_card_head font-white">
                    Video translator
                  </h3>
                  <p className="feature_card_para font-white">
                    Effortlessly translate your videos using our one-click
                    solution that clones your natural speaking voice and
                    style for seamless delivery in other languages.
                  </p>
                  <a
                    href="/video-translate"
                    className="button_primary w-inline-block"
                  >
                    <div>Learn more</div>
                  </a>
                </div>
                <div className="translater_video_wrap w-embed">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .translator_video {\n                                        aspect-ratio: 9/16;\n                                        height: auto;\n                                        width: 100%;\n                                        margin-right: auto;\n                                        margin-left: auto;\n                                        object-fit: cover;\n                                        position: relative;\n                                    }\n                                ",
                    }}
                  />
                  <video
                    className="translator_video"
                    src="https://resource.heygencdn.com/homepage/vt5s2.mp4"
                    type="video/mp4"
                    muted=""
                    autoPlay=""
                    loop=""
                  ></video>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3817f95e2fb8c1897db6_Frame%20Extractor%20(1).webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3817f95e2fb8c1897db6_Frame%20Extractor%20(1)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656d3817f95e2fb8c1897db6_Frame%20Extractor%20(1).webp 720w"
                  alt=""
                  className="video-preview feature-1"
                />
              </div>
              <div
                id="w-node-_8535cf39-702b-1a8b-780a-ca82bd13d3c2-8c4e74c2"
                className="feature_card_1"
              >
                <div className="feature_content_wrap">
                  <h3 className="feature_card_head">API</h3>
                  <p className="feature_card_para">
                    Integrate HeyGen’s powerful AI capabilities into your
                    product and create amazing avatar videos
                    programmatically with HeyGen's API.
                  </p>
                </div>
                <div className="div-block-302">
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, (max-width: 1439px) 49vw, 574px"
                    srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-500.png 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-800.png 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-1080.png 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature.webp 1142w"
                    alt=""
                    className="full-width-img"
                  />
                </div>
              </div>
            </div>
            <div className="feature_row_grid_2">
              <div className="feature_card_3">
                <div>
                  <h3 className="feature_card_head">
                    ChatGPT script writer
                  </h3>
                  <p className="feature_card_para">
                    Accelerate your video creation with our AI writing
                    assistant.
                  </p>
                </div>
                <div
                  data-w-id="ef041e90-3d1c-955c-2c47-18b6268bc50f"
                  className="gpt_video_wrap"
                >
                  <img
                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564332ddcbd1d3b7f4c98bd_feature_script_img.svg"
                    loading="lazy"
                    alt=""
                    className="full-width-img"
                  />
                  <div className="gpt_video w-embed">
                    <video
                      className="muted-video"
                      src="https://resource.heygencdn.com/homepage/scriptgenai2.mp4"
                      type="video/mp4"
                      muted=""
                      autoPlay=""
                      loop=""
                    ></video>
                  </div>
                </div>
              </div>
              <div className="feature_card_4">
                <div className="feature_content_wrap">
                  <h3 className="feature_card_head font-white">
                    AI outfits
                  </h3>
                  <p className="feature_card_para is-white">
                    Elevate your avatar for any occasion with a wide range
                    of customizable clothing options.
                  </p>
                </div>
                <img
                  src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 29vw, 370px"
                  srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4.webp 738w"
                  alt=""
                  className="full-width-img"
                />
              </div>
            </div>
            <div className="feature_row_grid_4">
              <div className="feature_card_5">
                <div className="feature_content_wrap">
                  <h3 className="feature_card_head font-white">
                    Integrations
                  </h3>
                  <p className="feature_card_para is-white">
                    Using HeyGen couldn’t be easier, streamline your video
                    creation process from your favorite platform.
                  </p>
                </div>
                <div className="feature_integration_logos_wrap">
                  <div className="feature_integration_logos">
                    <div className="integration_logos_row">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437be31f6f4a6fe2e16a6_zapier.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437c09837db5b566a7bae_canva.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437bdf32c4fcae5438b29_chatgpt.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566d9b35fd911cd666cc204_discord.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                    </div>
                    <div className="integration_logos_row">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437be31f6f4a6fe2e16a6_zapier.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437c09837db5b566a7bae_canva.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437bdf32c4fcae5438b29_chatgpt.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566d9b35fd911cd666cc204_discord.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                    </div>
                    <div className="integration_logos_row">
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437be31f6f4a6fe2e16a6_zapier.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437c09837db5b566a7bae_canva.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656437bdf32c4fcae5438b29_chatgpt.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                      <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566d9b35fd911cd666cc204_discord.webp"
                        loading="lazy"
                        alt=""
                        className="feature_integration_logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-embed">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .integration_logos_row {\n                                        will-change: transform;\n                                        animation: feature-horizontal 150s linear infinite;\n                                    }\n\n                                    @keyframes feature-horizontal {\n                                        from {\n                                            transform: translateX(0);\n                                        }\n                                        to {\n                                            transform: translateX(-100%);\n                                        }\n                                    }\n                                ",
                    }}
                  />
                </div>
              </div>
              <div className="feature_card_6">
                <div className="feature_gird_6_head">
                  <h3 className="feature_card_head">
                    Templates for everything
                  </h3>
                </div>
                <div className="feature_6_controls">
                  <div className="feature_6_tabs">
                    <div className="feature_template_tab is-selected">
                      <div>Popular</div>
                    </div>
                    <div className="feature_template_tab">
                      <div>Learning &amp; Development</div>
                    </div>
                    <div className="feature_template_tab">
                      <div>Ecommerce</div>
                    </div>
                  </div>
                  <div className="slider_control_wrap_feature">
                    <div
                      id="popular_prev_btn"
                      className="btn_slide_left_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.41681 10C3.41681 9.58579 3.7526 9.25 4.16681 9.25L15.8335 9.25C16.2477 9.25 16.5835 9.58579 16.5835 10C16.5835 10.4142 16.2477 10.75 15.8335 10.75L4.16681 10.75C3.7526 10.75 3.41681 10.4142 3.41681 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.63648 10.5305C3.34359 10.2376 3.34359 9.76273 3.63648 9.46983L9.46982 3.6365C9.76271 3.34361 10.2376 3.34361 10.5305 3.6365C10.8234 3.92939 10.8234 4.40427 10.5305 4.69716L5.22747 10.0002L10.5305 15.3032C10.8234 15.5961 10.8234 16.0709 10.5305 16.3638C10.2376 16.6567 9.76271 16.6567 9.46981 16.3638L3.63648 10.5305Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      id="popular_next_btn"
                      className="btn_slide_right_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5833 10C16.5833 10.4142 16.2475 10.75 15.8333 10.75L4.16658 10.75C3.75237 10.75 3.41658 10.4142 3.41658 10C3.41658 9.58579 3.75237 9.25 4.16658 9.25L15.8333 9.25C16.2475 9.25 16.5833 9.58579 16.5833 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3636 9.46951C16.6565 9.7624 16.6565 10.2373 16.3636 10.5302L10.5302 16.3635C10.2374 16.6564 9.76248 16.6564 9.46959 16.3635C9.17669 16.0706 9.17669 15.5957 9.46959 15.3028L14.7726 9.99984L9.46959 4.69683C9.17669 4.40394 9.17669 3.92907 9.46959 3.63617C9.76248 3.34328 10.2374 3.34328 10.5302 3.63617L16.3636 9.46951Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="slider_control_wrap_feature is-hidden">
                    <div
                      id="advertising_prev_btn"
                      className="btn_slide_left_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.41681 10C3.41681 9.58579 3.7526 9.25 4.16681 9.25L15.8335 9.25C16.2477 9.25 16.5835 9.58579 16.5835 10C16.5835 10.4142 16.2477 10.75 15.8335 10.75L4.16681 10.75C3.7526 10.75 3.41681 10.4142 3.41681 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.63648 10.5305C3.34359 10.2376 3.34359 9.76273 3.63648 9.46983L9.46982 3.6365C9.76271 3.34361 10.2376 3.34361 10.5305 3.6365C10.8234 3.92939 10.8234 4.40427 10.5305 4.69716L5.22747 10.0002L10.5305 15.3032C10.8234 15.5961 10.8234 16.0709 10.5305 16.3638C10.2376 16.6567 9.76271 16.6567 9.46981 16.3638L3.63648 10.5305Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      id="advertising_next_btn"
                      className="btn_slide_right_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5833 10C16.5833 10.4142 16.2475 10.75 15.8333 10.75L4.16658 10.75C3.75237 10.75 3.41658 10.4142 3.41658 10C3.41658 9.58579 3.75237 9.25 4.16658 9.25L15.8333 9.25C16.2475 9.25 16.5833 9.58579 16.5833 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3636 9.46951C16.6565 9.7624 16.6565 10.2373 16.3636 10.5302L10.5302 16.3635C10.2374 16.6564 9.76248 16.6564 9.46959 16.3635C9.17669 16.0706 9.17669 15.5957 9.46959 15.3028L14.7726 9.99984L9.46959 4.69683C9.17669 4.40394 9.17669 3.92907 9.46959 3.63617C9.76248 3.34328 10.2374 3.34328 10.5302 3.63617L16.3636 9.46951Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="slider_control_wrap_feature is-hidden">
                    <div
                      id="ecommerce_prev_btn"
                      className="btn_slide_left_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.41681 10C3.41681 9.58579 3.7526 9.25 4.16681 9.25L15.8335 9.25C16.2477 9.25 16.5835 9.58579 16.5835 10C16.5835 10.4142 16.2477 10.75 15.8335 10.75L4.16681 10.75C3.7526 10.75 3.41681 10.4142 3.41681 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.63648 10.5305C3.34359 10.2376 3.34359 9.76273 3.63648 9.46983L9.46982 3.6365C9.76271 3.34361 10.2376 3.34361 10.5305 3.6365C10.8234 3.92939 10.8234 4.40427 10.5305 4.69716L5.22747 10.0002L10.5305 15.3032C10.8234 15.5961 10.8234 16.0709 10.5305 16.3638C10.2376 16.6567 9.76271 16.6567 9.46981 16.3638L3.63648 10.5305Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div
                      id="ecommerce_next_btn"
                      className="btn_slide_right_icon is-active w-embed"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5833 10C16.5833 10.4142 16.2475 10.75 15.8333 10.75L4.16658 10.75C3.75237 10.75 3.41658 10.4142 3.41658 10C3.41658 9.58579 3.75237 9.25 4.16658 9.25L15.8333 9.25C16.2475 9.25 16.5833 9.58579 16.5833 10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3636 9.46951C16.6565 9.7624 16.6565 10.2373 16.3636 10.5302L10.5302 16.3635C10.2374 16.6564 9.76248 16.6564 9.46959 16.3635C9.17669 16.0706 9.17669 15.5957 9.46959 15.3028L14.7726 9.99984L9.46959 4.69683C9.17669 4.40394 9.17669 3.92907 9.46959 3.63617C9.76248 3.34328 10.2374 3.34328 10.5302 3.63617L16.3636 9.46951Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="popular-slider" className="splide">
                  <div className="splide__track">
                    <div className="splide__list feature_template_card_wrap">
                      <a
                        href="https://app.heygen.com/login"
                        target="_blank"
                        className="splide__slide feature_template_card w-inline-block"
                      >
                        <img
                          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1).webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 76vw, 313px"
                          srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-1600.webp 1600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-2000.webp 2000w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-2600.webp 2600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1)-p-3200.webp 3200w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed3be1c2612138ae168_Slide%2016_9%20-%201%20(1).webp 5760w"
                          alt=""
                          className="full-width-img _100-height"
                        />
                      </a>
                      <a
                        href="https://app.heygen.com/login"
                        target="_blank"
                        className="splide__slide feature_template_card w-inline-block"
                      >
                        <img
                          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 76vw, 313px"
                          srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-1600.webp 1600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-2000.webp 2000w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-2600.webp 2600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training-p-3200.webp 3200w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4e6f237ca9b671b28_Compliance%20Training.webp 5760w"
                          alt=""
                          className="full-width-img _100-height"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div id="advertising-slider" className="splide">
                  <div className="splide__track">
                    <div className="splide__list feature_template_card_wrap is-hidden">
                      <a
                        href="https://app.heygen.com/login"
                        target="_blank"
                        className="splide__slide feature_template_card w-inline-block"
                      >
                        <img
                          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1).webp"
                          loading="lazy"
                          sizes="100vw"
                          srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1)-p-1600.webp 1600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1)-p-2000.webp 2000w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1)-p-2600.webp 2600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1)-p-3200.webp 3200w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed4683c507311d369f8_CEO%27s%20message%20script%201%20(1).webp 5760w"
                          alt=""
                          className="full-width-img _100-height"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div id="ecommerce-slider" className="splide">
                  <div className="splide__track">
                    <div className="splide__list feature_template_card_wrap is-hidden">
                      <a
                        href="https://app.heygen.com/login"
                        target="_blank"
                        className="splide__slide feature_template_card w-inline-block"
                      >
                        <img
                          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3).webp"
                          loading="lazy"
                          sizes="100vw"
                          srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3)-p-1600.webp 1600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3)-p-2000.webp 2000w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3)-p-2600.webp 2600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3)-p-3200.webp 3200w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed0683c507311d36846_Slide%2016_9%20-%207%20(3).webp 5760w"
                          alt=""
                          className="full-width-img _100-height"
                        />
                      </a>
                      <a
                        href="https://app.heygen.com/login"
                        target="_blank"
                        className="splide__slide feature_template_card w-inline-block"
                      >
                        <img
                          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1).webp"
                          loading="lazy"
                          sizes="100vw"
                          srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1)-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1)-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1)-p-1600.webp 1600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1)-p-2000.webp 2000w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1)-p-2600.webp 2600w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1)-p-3200.webp 3200w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65661ed2c6f9bf09eb7ec929_Password%20Management%20cover%20(1).webp 5760w"
                          alt=""
                          className="full-width-img _100-height"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="background_section is-center">
      <div className="blur_bg_black feature" />
    </div>
  </div>
  );
};

export default Main;
