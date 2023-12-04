import "./App.css";
import React from "react";
import { useEffect } from 'react';
import { AppLogo, UserAccount, SearchBar, NavMenu } from "./navbar.js";
import {
  HeroSection,
  Section2,
  Usp1,
  Usp2,
  Usp3,
  Course1,
  Footer,
} from "./Sections.js";
import Uspbackground2 from "./Images/USP_wallpaper2.jpg";
import Uspbackground3 from "./Images/USP_wallpaper3.jpg";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="container">
      <AppLogo />
      <UserAccount isLogin="" />
      <SearchBar />
      <div className="heroContainer">
        <NavMenu />
        <HeroSection />
        <Section2 />
        <Usp1 />
        <Usp2 />
        <Usp3 />
        <Course1
          title="Placement Assured Programs"
          feat={[
            "Industry Proven Curricullum",
            "Real-Life Projects",
            "Live 1-on-1 classess",
            "Flexible learning",
          ]}
          linkTo="/course/"
          buttCont="Explore Course"
          image={Uspbackground2}
        />
        <Course1
          title="Meet your Speaker"
          feat={[
            "Top Kaggle Expert",
            "Years of Experience in Data Science",
            "Worked at MNC’s of ZS,Tatras Data & More",
          ]}
          linkTo="/speaker/"
          buttCont="Meet the Speaker"
          image={Uspbackground3}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
