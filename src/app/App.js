
import './App.css';
import { LandingPageHeader } from './components/navbar/LandingPageHeader';
import { HeroPage } from './components/HeroPage/HeroPage'
import { Features } from './components/Features';
import { Packages } from './components/Packages';
// import { Logo } from './components/Logo';

function App() {
  return (
    <div>
      <LandingPageHeader/>
      <HeroPage/>
      <Features/>
      <Packages/>
    </div>

  );
}

export default App;
