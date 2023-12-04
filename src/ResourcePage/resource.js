import React from 'react';
import { useEffect } from 'react';
import './resource.css';
import { AppLogo, UserAccount } from './../navbar.js';
import NavMenu from './Navbar.js';
import CoverSec from './CoverSection.js';
import InfoSec from './InfoSection.js';
import VideoSection from './VideoSection.js';
import BlogSection from './BlogsSec.js';
import DocSection from './DocumentSec.js';
import { Footer } from '../Sections.js';

export default function Resource() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(<div>
        <AppLogo />
        <UserAccount isLogin=""/>
        <NavMenu />
        <CoverSec />
        <InfoSec />
        <VideoSection />
        <BlogSection />
        <DocSection />
        <Footer />
    </div>);
}