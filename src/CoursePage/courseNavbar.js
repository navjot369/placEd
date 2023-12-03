import './course.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
    return (<div className="navmenuCont">
        <div className="navMenuInner">
        <Link to={'/course/'} className="navOpt activeLink">Placement Assured Programs</Link>
        <Link to={'/resources/'} className="navOpt">Placed Resources</Link>
        <Link to={'/'} className="navOpt">Speaker at Placed</Link>
        </div>
    </div>);
}

export { NavMenu };