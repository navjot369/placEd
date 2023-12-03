import React from 'react';
import video1 from './../Images/SampleVid1.mp4';
import { Link } from 'react-router-dom';

export default function Section1() {
    return (<div className="heroSectionCont">
        <div className="sec1Left">
            <div>
            <div className="CourseName">Placed Data Science Bootcamp</div>
            <div className="CourseDesp">A complete exposure to the Technologies in Data Science Backed with a 100% placement assurance </div>
            </div>
            <div className="CourseRegisCont"><Link to={'/'} className="RegisLink">Register Now</Link></div>
        </div>
        <div className="sec1Right">
            <video src={video1} className="Video1" alt="Intention ShowCase" autoPlay loop muted/>
        </div>
    </div>);
}

