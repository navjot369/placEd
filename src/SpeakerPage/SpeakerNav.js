import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
    return (<div className="navmenuCont">
        <div className="navMenuInner">
        <Link to={'/course/'} className="navOpt">Placement Assured Programs</Link>
        <Link to={'/resources/'} className="navOpt">Placed Resources</Link>
        <Link to={'/speaker/'} className="navOpt activeLink">Speaker at Placed</Link>
        </div>
    </div>);
}