import React from 'react';
import { useEffect } from 'react';
import './speaker.css';
import { AppLogo, UserAccount } from './../navbar.js';
import NavMenu from './SpeakerNav.js';
import SpeakerSection from './Speakersection.js';

export default function Speaker() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(<div>
        <AppLogo />
        <UserAccount isLogin=""/>
        <NavMenu />
        <SpeakerSection />
    </div>);
}