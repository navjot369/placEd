import React from 'react';
import SpeakerPic from './../Images/Simran_profile.jpeg';

export default function InfoSec() {
    return(<div className="infoSecCont">
        <div></div>
        <div className="infoSecLeft">
            <img src={SpeakerPic} alt="SpeakerPic" />
        </div>
        <div></div>
        <div className="infoSecRight">
            <div className="SpeakerName">Simrandeep Singh</div>
            <div className="SpeakerDesc">Description about the speaker here</div>
        </div>
        <div></div>
    </div>);
}