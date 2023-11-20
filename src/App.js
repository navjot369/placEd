import './App.css';
import { Navbar, SearchBar, NavMenu } from './navbar.js';
import { HeroSection, Section2, Usp1 } from './Sections.js';

function App() {
  return (<div id="container">
    <Navbar isLogin=""/>
    <SearchBar />
    <div className="heroContainer">
      <NavMenu />
      <HeroSection />
      <Section2 />
      <Usp1 num="1"/>
      <Usp1 num="2"/>
      <Usp1 num="3"/>
    </div>
  </div>);
}

export default App;
