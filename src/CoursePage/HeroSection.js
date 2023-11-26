import React from 'react';
import video1 from './../Images/SampleVid1.mp4';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
=======

>>>>>>> 3d8e3fc (Add course landing page features)
export default function Section1() {
    return (<div className="heroSectionCont">
        <div className="sec1Left">
            <div>
            <div className="CourseName">Data Science MasterClass</div>
            <div className="CourseDesp">Understanding Data Science with projects</div>
            </div>
            <div className="CourseRegisCont"><Link to={'/'} className="RegisLink">Register Now</Link></div>
        </div>
        <div className="sec1Right">
<<<<<<< HEAD
            <video src={video1} className="Video1" autoPlay loop muted/>
=======
            <video src={video1} className="Video1" alt="Intention ShowCase" autoPlay loop muted/>
>>>>>>> 3d8e3fc (Add course landing page features)
        </div>
    </div>);
}

<<<<<<< HEAD
=======


>>>>>>> 3d8e3fc (Add course landing page features)
