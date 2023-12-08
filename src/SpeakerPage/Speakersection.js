import "./speaker.css";
import React from "react";
import { Link } from "react-router-dom";
import SampImg from "./../Images/Simran_profile.jpeg";
import { Footer } from './../Sections.js';


export default function SpeakerSection() {
  return (
    <div className="speaker-main-cont">
      <div className="upper-title-main">SAHIBDEEP SINGH</div>
      <div className="section-outer1">
      <div className="design-line line1"></div>
      <Section
        num="1"
        list_user={["Desp1", "Desp2", "Desp3"]}
        title="Title1"
        image={SampImg}
      />
      <div className="design-line line2"></div>
      <Section
        num="2"
        list_user={["Desp1", "Desp2", "Desp3"]}
        title="Title2"
        image={SampImg}
      />
      <div className="design-line line3"></div>
      <Section
        num="3"
        list_user={["Desp1", "Desp2", "Desp3"]}
        title="Title3"
        image={SampImg}
      />
      <div className="design-line line4"></div>
      <LastSection />
      </div>
      <Footer />
    </div>
  );
}

function Section(props) {
  const list_new = props.list_user.map((item) => <li key={item}>{item}</li>);
  return (
      <div className={"SingleSection secNum" + props.num}>
        <div className="left-part">
          <p className="section-title">{props.title}</p>
          <div className="list-cont">
            <ul>{list_new}</ul>
          </div>
        </div>
        <div className="right-part">
          <img src={props.image} alt="Sectional" className="in-section" />
        </div>
    </div>
  );
}

function LastSection() {
  return(<div className="SingleSection secLast">
  <div className="left-part last-left">
    <p className="section-title-last">Roles and Responsibilites at placEd</p>
    <div className="button-cont">
      <Link to="/course/" className="last-link">Explore Program</Link>
    </div>
  </div>
  <div className="right-part">
    <img src={SampImg} alt="Sectional" className="in-section" />
  </div>
</div>);
}
