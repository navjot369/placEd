export default function Navbar(props) {
    return (<div className="navbar">
        <div className="logo">plac<span className="textEd">Ed</span></div>
        <ul className="linkList">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 1</a></li>
        </ul>
        <div className="userinfo">
            <UserInfo isLogin={props.isLogin} />
        </div>
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
                <img src="" />
            </div>
            <div className="userName">
                {props.isLogin}
            </div>
        </div>);
    }
}