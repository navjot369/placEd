import React from 'react';
import './course.css';
import { AppLogo, UserAccount } from './../navbar.js';
import { NavMenu } from './courseNavbar.js';
import Section1 from './HeroSection.js';
import UspSection from './UspSection.js';
import Features from './FeaturesSec.js';
import HiringSec from './HiringSection.js';
import SpeakerSec from './SpeakerSec.js';
import { Footer } from './../Sections.js';
import { useEffect } from 'react';


function Course() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (<div>
        <AppLogo />
        <UserAccount isLogin=""/>
        <NavMenu />
        <div className="course-Cont">
        <Section1 />
        <UspSection />
        <Features />
        <HiringSec />
        <SpeakerSec />
        </div>
        <Footer />
    </div>);
}

export { Course };