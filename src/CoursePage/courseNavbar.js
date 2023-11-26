import './course.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
    return (<div className="navmenuCont">
        <div className="navMenuInner">
        <Link to={'/'} className="navOpt">Data Science Resources</Link>
        <Link to={'/'} className="navOpt">Meet your Speaker</Link>
        </div>
    </div>);
}

export { NavMenu };