import './App.css';
import { AppLogo, UserAccount, SearchBar, NavMenu } from './navbar.js';
import { HeroSection, Section2, Usp1 } from './Sections.js';
import Uspbackground1 from './Images/USP_wallpaper.jpg';
import Uspbackground2 from './Images/USP_wallpaper2.webp';
import Uspbackground3 from './Images/USP_wallpaper3.webp';

function App() {
  return (<div id="container">
    <AppLogo />
    <UserAccount isLogin="Navjot"/>
    <SearchBar />
    <div className="heroContainer">
      <NavMenu />
      <HeroSection />
      <Section2 />
      <Usp1 num="1" background={Uspbackground1}/>
      <Usp1 num="2" background={Uspbackground2}/>
      <Usp1 num="3" background={Uspbackground3}/>
    </div>
  </div>);
}

export default App;
