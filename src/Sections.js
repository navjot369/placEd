import DataScience_pic from "./Images/data-science.png";
import "./Sections.css";
import statsBackground from "./Images/stats-bacground.jpg";
import { Link } from "react-router-dom";
import React from "react";
import Uspbackground1 from './Images/USP_wallpaper.jpg';
import Uspbackground2 from './Images/USP_wallpaper2.jpg';
import Uspbackground3 from './Images/USP_wallpaper3.jpg';
import staticon1 from './Images/unemployment.png';
import staticon2 from './Images/employee.png';
import staticon3 from './Images/recruitment.png';
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HeroSection() {
  const [text] = useTypewriter({
    words: ['From Projects to Placement'],
    loop: {},
    });
  return (
    <div className="heroCont">
      <div className="heroLeft">
        <div className="tagline1Cont">
        <div className="tagline1">
          <div className="taglineVir">
            From Projects to Placement
          </div>
          <div className="taglineAct">
            <span>{ text }</span><span><Cursor /></span>
            </div>
          </div>
          <div className="tagline1 tagline-bottom">With Placed</div>
          <div className="tag1Desc">
            Pay only after you are placed above 5LP</div>
        </div>
        <div className="tagbutton">
          <Link to="/course/" className="courseButton">Explore Programs</Link>
        </div>
      </div>
      <div className="heroRight">
        <img src={DataScience_pic} alt="Data Science Logo" />
      </div>
    </div>
  );
}

function InnerStats(props) {
  return (
    <div className="StatsBox">
      <div className="statsValue">{props.value}</div> 
      <div className="statsPara">{props.desp}</div>
    </div>
  );
}

function Section2() {
  return (
    <div className="sec2Cont">
      <img src={statsBackground} alt="Stats Background" />
      <div className="sec2Inner">
        <div className="sec2Question">
          Are you going to be placed<span> ?</span>
        </div>
        <div className="StatsCont">
          <InnerStats
            value="49.3%"
            desp="of youth are “Unemployable” as of 2023"
            icon={staticon1}
          />
          <InnerStats
            value="42.3%"
            desp="of educated youth are “Unemployed” as of 2023"
            icon={staticon2}
          />
          <InnerStats
            value="58%"
            desp="of youth fails to secure a Campus Placement"
            icon={staticon3}
          />
        </div>
      </div>
    </div>
  );
}

function Usp1(props) {
  return (
    <div className="UspContainer usp1Cont">
      <div className="UspLeftCont">
        <div className="UspTitle">100% Assured Placement</div>
        <div className="UspDesc">The Course will be completed only 
when you’ll be placed over 4LPA</div>
        <div className="UspIconsCont">
          <div className="icon1">&#9786;</div>
          <div className="icon1">&#9786;</div>
        </div>
        <div className="uspButton">
          <Link className="courseUsp" to="/course/">Explore Programs</Link>
        </div>
      </div>
      <div className="UspRightCont">
        <img src={Uspbackground1} alt="Coding Background" />
        <div className="imgRound">&quot;Guarantee assurance of Placements&quot;</div>
      </div>
    </div>
  );
}


function Usp2(props) {
  return (
    <div className="UspContainer usp2Cont">
      <div className="UspLeftCont">
        <div className="UspTitle">Pay When Placed</div>
        <div className="UspDesc">The Entire course fee would be paid only When you’ll be placed above 4LPa</div>
        <div className="UspIconsCont">
          <div className="icon1">&#9786;</div>
          <div className="icon1">&#9786;</div>
        </div>
        <div className="more">&amp;more</div>
        <div className="uspButton">
        <Link className="courseUsp" to="/course/">Explore Programs</Link>
        </div>
      </div>
      <div className="UspRightCont">
        <img src={Uspbackground2} alt="Coding Background" />
        <div className="imgRound">&quot;Payment after Placement&quot;</div>
      </div>
    </div>
  );
}


function Usp3(props) {
  return (
    <div className="UspContainer usp3Cont">
      <div className="UspLeftCont">
        <div className="UspTitle">Learning With Projects</div>
        <div className="UspDesc">Hands on learning experience, with Industrial and Real Life Projects </div>
        <div className="UspIconsCont">
          <div className="icon1">&#9786;</div>
          <div className="icon1">&#9786;</div>
        </div>
        <div className="uspButton">
        <Link className="courseUsp" to="/course/">Explore Programs</Link>
        </div>
      </div>
      <div className="UspRightCont">
        <img src={Uspbackground3} alt="Coding Background" />
        <div className="imgRound">&quot;Real-life Projects&quot;</div>
      </div>
    </div>
  );
}


function Course1(props) {
  const listFeat = props.feat.map((item) => <li>{item}</li>);
  return (
    <div className="CourseCont">
      <div className="CourseHeading">{props.title}</div>
      <div className="CourseContInner">
        <div className="ContLeft">
          <div className="featureList">
            <ul>
              {listFeat}
            </ul>
          </div>
          <div className="exploreCont">
            <button>
              <Link to={props.linkTo} className="linkHere">
                {props.buttCont}
              </Link>
            </button>
          </div>
        </div>
        <div className="ContRight">
          <img src={props.image} alt="Course Display" />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h1>Made With &hearts;</h1>
    </div>
  );
}

export { HeroSection, Section2, Usp1, Usp2, Usp3, Course1, Footer };
