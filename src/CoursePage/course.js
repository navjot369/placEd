import React from 'react';
import { AppLogo, UserAccount } from './../navbar.js';
import { NavMenu } from './courseNavbar.js';
import Section1 from './HeroSection.js';
import './course.css';

function Course() {
    return (<div>
        <AppLogo />
        <UserAccount isLogin=""/>
        <NavMenu />
        <Section1 />
    </div>);
}

export { Course };