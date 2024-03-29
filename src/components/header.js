// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Header = () => {
    const [useCasesOpen, setUseCasesOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    const handleMouseEnter = (dropdown) => {
        switch (dropdown) {
            case 'useCases':
                setUseCasesOpen(!useCasesOpen);
                setFeaturesOpen(false);
                setResourcesOpen(false);
                break;
            case 'features':
                setFeaturesOpen(!featuresOpen);
                setUseCasesOpen(false);
                setResourcesOpen(false);
                break;
            case 'resources':
                setResourcesOpen(!resourcesOpen);
                setUseCasesOpen(false);
                setFeaturesOpen(false);
                break;
            default:
                setUseCasesOpen(false);
                setFeaturesOpen(false);
                setResourcesOpen(false);
                break;
        }
    };

    const handleMouseLeave = () => {
        setUseCasesOpen(false);
        setFeaturesOpen(false);
        setResourcesOpen(false);
    };

    return (
        <div
            data-animation="default"
            data-easing="ease"
            data-collapse="medium"
            data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc58"
            role="banner"
            data-duration={400}
        >
            <div className="nav_bg" />
            <div className="navbar_container">
                <a
                    href="/"
                    aria-current="page"
                    className="navbar_logo-link w-nav-brand w--current"
                >
                    <img
                        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
                        loading="lazy"
                        width={83}
                        alt="logo-horizonal-light"
                        className="navbar_logo"
                    />
                </a>
                <nav
                    role="navigation"
                    id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc5d-bf19dc58"
                    className="navbar_menu shadows_3_pc_none w-nav-menu"
                >
                    <div
                        data-hover="true"
                        data-delay={200}
                        data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc5e"
                        className={`navbar_menu-dropdown w-dropdown ${useCasesOpen ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnter('useCases')}
                onMouseLeave={handleMouseLeave}
                    >
                      <div className="navbar_dropdwn-toggle w-dropdown-toggle">
                            <div>Use Cases</div>
                            <div className="dropdown-chevron w-embed">
                                <svg
                                    width=" 100%"
                                    height=" 100%"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <nav className="navbar_dropdown-list w-dropdown-list">
                            <a
                                href="/personalized-video-3"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Sales Outreach
                            </a>
                            <a
                                href="/explainer-video-maker"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Product Marketing{" "}
                            </a>
                            <a
                                href="/marketing-videos"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Content Marketing{" "}
                            </a>
                            <a
                                href="/learning-development"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Learning &amp; Development
                            </a>
                        </nav>
                    </div>
                    <div
                        data-hover="true"
                        data-delay={200}
                        data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc6c"
                        className={`navbar_menu-dropdown w-dropdown ${featuresOpen ? 'open' : ''}`}
                        onMouseEnter={() => handleMouseEnter('features')}
                        onMouseLeave={handleMouseLeave}
                    >
                       <div className="navbar_dropdwn-toggle w-dropdown-toggle">
                            <div>Features</div>
                            <div className="dropdown-chevron w-embed">
                                <svg
                                    width=" 100%"
                                    height=" 100%"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <nav className="navbar_dropdown-list w-dropdown-list">
                            <a
                                href="/instant-avatar"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Instant Avatar
                            </a>
                            <a
                                href="/studio-avatar"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Studio Avatar
                            </a>
                            <a
                                href="/video-translate"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Video Translate
                            </a>
                            <a
                                href="/voice-cloning"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Voice Cloning
                            </a>
                            <a
                                href="/photo-avatar"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Photo Avatar
                            </a>
                            <a
                                href="/ai-voices"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                AI Voices
                            </a>
                            <a
                                href="/personalized-video-3"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Personalized Video
                            </a>
                            <a
                                href="/streaming-avatar"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Streaming Avatar
                            </a>
                            <a
                                href="/avatars"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                AI Avatars
                            </a>
                            <a
                                href="/video-template"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Templates
                            </a>
                            <a
                                href="https://www.heygen.com/integration/zapier"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Zapier
                            </a>
                        </nav>
                    </div>
                    <div
                        data-hover="true"
                        data-delay={200}
                        data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc82"
                        className={`navbar_menu-dropdown w-dropdown ${resourcesOpen ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
                    >
                         <div className="navbar_dropdwn-toggle w-dropdown-toggle">
                            <div>Resources</div>
                            <div className="dropdown-chevron w-embed">
                                <svg
                                    width=" 100%"
                                    height=" 100%"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <nav className="navbar_dropdown-list w-dropdown-list">
                            <a
                                href="/blog"
                                data-track-data="type=weekly-demo"
                                data-track-event="CLK_TO_NAV_WHILTE"
                                data-with-sid="true"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Blog
                            </a>
                            <a
                                href="https://lu.ma/wt04jn70?utm_source=3w"
                                data-track-data="type=weekly-demo"
                                data-track-event="CLK_TO_NAV_WHILTE"
                                data-with-sid="true"
                                target="_blank"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Weekly Webinar
                            </a>
                            <a
                                href="/case-studies"
                                data-track-data="type=weekly-demo"
                                data-track-event="CLK_TO_NAV_WHILTE"
                                data-with-sid="true"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Case Studies
                            </a>
                            <a
                                href="https://help.heygen.com/en/"
                                data-track-data="type=help-center"
                                data-track-event="CLK_TO_NAV_WHILTE"
                                data-with-sid="true"
                                target="_blank"
                                className="navbar_dropdown-link w-dropdown-link"
                            >
                                Help Center
                            </a>
                        </nav>
                    </div>
                    {/* ... (other code) ... */}
                    <a href="/pricing" className="navbar_link w-nav-link">
                        Pricing
                    </a>
                </nav>
                <div
                    id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc92-bf19dc58"
                    className="navbar_button-wrapper"
                >
                    <a
                        href="https://am8evw00qys.typeform.com/enterprisecall"
                        target="_blank"
                        className="navbar_link_nocolor w-nav-link"
                    >
                        Contact Sales
                    </a>
                    <a
                        href="https://app.heygen.com/login"
                        target="_blank"
                        className="button_primary_nav shadows_3 w-button"
                    >
                        Get started
                    </a>
                    <div className="navbar_menu-button w-nav-button">
                        <div className="menu-icon2">
                            <div className="menu-icon2_line-top" />
                            <div className="menu-icon2_line-middle">
                                <div className="menu-icon_line-middle-inner" />
                            </div>
                            <div className="menu-icon2_line-bottom" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
