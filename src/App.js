import './App.css';
import React from 'react';
import { AppLogo, UserAccount, SearchBar, NavMenu } from './navbar.js';
import { HeroSection, Section2, Usp1, Course1, Footer } from './Sections.js';
import Uspbackground1 from './Images/USP_wallpaper.jpg';
import Uspbackground2 from './Images/USP_wallpaper2.webp';
import Uspbackground3 from './Images/USP_wallpaper3.webp';

function App() {
  return (<div id="container">
    <AppLogo />
    <UserAccount isLogin=""/>
    <SearchBar />
    <div className="heroContainer">
      <NavMenu />
      <HeroSection />
      <Section2 />
      <Usp1 num="1" background={Uspbackground1}/>
      <Usp1 num="2" background={Uspbackground2}/>
      <Usp1 num="3" background={Uspbackground3}/>
      <Course1 title="Data Science Masterclass" feat1="feature1" feat2="feature2" feat3="feature3" linkTo="/course/" buttCont="Explore Course" image={Uspbackground2}/>
      <Course1 title="Meet your Speaker" feat1="Experience 1" feat2="Experience 2" feat3="Experience 3" linkTo="/course/" buttCont="Meet the Speaker" image={Uspbackground3}/>
      <Footer />
    </div>
  </div>);
}

export default App;
