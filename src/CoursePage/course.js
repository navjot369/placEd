import React from 'react';
<<<<<<< HEAD
import { AppLogo, UserAccount } from './../navbar.js';
import { NavMenu } from './courseNavbar.js';
import Section1 from './HeroSection.js';
import './course.css';
=======
import './course.css';
import { AppLogo, UserAccount } from './../navbar.js';
import { NavMenu } from './courseNavbar.js';
import Section1 from './HeroSection.js';
import UspSection from './UspSection.js';
import Features from './FeaturesSec.js';
import HiringSec from './HiringSection.js';
import SpeakerSec from './SpeakerSec.js';
import { Footer } from './../Sections.js';

>>>>>>> 3d8e3fc (Add course landing page features)

function Course() {
    return (<div>
        <AppLogo />
        <UserAccount isLogin=""/>
        <NavMenu />
        <Section1 />
<<<<<<< HEAD
=======
        <UspSection />
        <Features />
        <HiringSec />
        <SpeakerSec />
        <Footer />
>>>>>>> 3d8e3fc (Add course landing page features)
    </div>);
}

export { Course };