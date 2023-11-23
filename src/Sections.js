import DataScience_pic from "./Images/data-science.png";
import "./Sections.css";
import statsBackground from './Images/stats-bacground.jpg';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="heroCont">
      <div className="heroLeft">
        <div className="tagline1Cont">
          <div className="tagline1">
            From projects to placement
          </div>
          <div className="tag1Desc">
            Here will be a short desciption of tagline
          </div>
        </div>
        <div className="tagbutton">
          <button>Data Science MasterClass</button>
        </div>
      </div>
      <div className="heroRight">
        <img src={DataScience_pic} alt="Data Science Logo"/>
      </div>
    </div>
  );
}

function InnerStats(props) {
    return (<div className="StatsBox">
        <div className="statsPara">Para {props.num}</div>
        <div className="statsValue">{props.value}</div>
    </div>);
}

function Section2() {
  return (
    <div className="sec2Cont">
        <img src={statsBackground} alt="Stats Background"/>
      <div className="sec2Inner">
        <div className="sec2Question">
          Are you going to be placed<span> ?</span>
        </div>
        <div className="StatsCont">
            <InnerStats num="1" value="30%" />
            <InnerStats num="2" value="54%" />
            <InnerStats num="3" value="82%" />
        </div>
      </div>
    </div>
  );
}

function Usp1(props) {
    return(<div className="UspContainer">
        <div className="UspLeftCont" >
            <div className="UspTitle">Usp {props.num} Title Provided</div>
            <div className="UspDesc">Description of USP {props.num}</div>
            <div className="UspIconsCont">
                <div className="icon1">&#9786;</div>
                <div className="icon1">&#9786;</div>
            </div>
            <div className="uspButton">
                <button>Explore Course </button>
            </div>
        </div>
        <div className="UspRightCont">
            <img src={props.background} alt="Coding Background"/>
            <div className="imgRound">&quot;From Learning to Earning&quot;</div>
        </div>
    </div>
    );
}

function Course1(props) {
  return(<div className="CourseCont">
    <div className="CourseHeading">{props.title}</div>
    <div className="CourseContInner">
      <div className="ContLeft">
        <div className="featureList">
          <ul>
            <li>{props.feat1}</li>
            <li>{props.feat2}</li>
            <li>{props.feat3}</li>
          </ul>
        </div>
        <div className="exploreCont">
          <button><Link to={props.linkTo} className="linkHere">{props.buttCont}</Link></button>
        </div>
      </div>
      <div className="ContRight">
        <img src={props.image} alt="Course Display" />
      </div>
    </div>
  </div>);
}

function Footer() {
  return (<div className="footer">
    <h1>Made With &hearts;</h1>
  </div>);
}


export { HeroSection, Section2, Usp1, Course1, Footer };
