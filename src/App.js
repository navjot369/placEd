import './App.css';
import { Navbar, SearchBar, NavMenu } from './navbar.js';
import { HeroSection, Section2 } from './Sections.js';

function App() {
  return (<div id="container">
    <Navbar isLogin=""/>
    <SearchBar />
    <div className="heroContainer">
      <NavMenu />
      <HeroSection />
      <Section2 />
    </div>
  </div>);
}

export default App;
