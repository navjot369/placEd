import profile_pic from './Images/profile_pic.jpg';
import searchSymbol from './Images/loupe.png';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function AppLogo(props) {
    return (<div className="logo">plac<span>Ed</span></div>); 
}

function UserAccount(props) {
    return(<div className="userinfo">
            <UserInfo isLogin={props.isLogin} />
        </div>);
}

function UserInfo(props) {
    if(props.isLogin === "") {
        return (<div className="loginButton">
            <button onclick="">Log In</button>
        </div>);
    }
    else {
        return (<div className="userInner">
            <div className="imgContUser">
                <img src={profile_pic} alt="Profile"/>
            </div>
            <div className="userName">
                {props.isLogin}
            </div>
        </div>);
    }
}

function SearchBar() {
    const inputText = useRef();
    const clickit = () => {
        console.log("hello");
        inputText.current.focus();
    }
    return (
        <div className="search-container-outer">
            <button className="search-container-inner" onClick={clickit}>
                <img src={searchSymbol} alt="Search Symbol"/>
                <input type="text" name="query" placeholder="Search our resources" ref={inputText}/>
            </button>
        </div>
    );
}

function NavMenu() {
    return (<div className="navmenuCont">
        <div className="navMenuInner">
        <Link to={'/course/'} className="navOpt">Data Science MasterClass</Link>
        <Link to={'/course/'} className="navOpt">Data Science Resources</Link>
        <Link to={'/course/'} className="navOpt">Meet your Speaker</Link>
        </div>
    </div>);
}

export {AppLogo, UserAccount, SearchBar, NavMenu};