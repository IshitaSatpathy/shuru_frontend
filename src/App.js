import './App.css';
import HomepageScreen2 from './components/Homepage2';
import HomepageScreen3 from './components/Homepage3';
import HomepageScreen from './components/Homepage_screen';
import HomepageScreen4 from './components/Homepage4';
import HomepageScreen5 from './components/Homepage5';
import HomepageScreen6 from './components/Homepage6';
import HomepageScreen7 from './components/Homepage7';
import HomepageScreen8 from './components/Homepage8';
import HomepageScreen9 from './components/Homepage9';
import HomepageScreen10 from './components/Homepage10';
import HomepageScreen11 from './components/Homepage11';
import HomepageScreen12 from './components/Homepage12';
import ProjectScreen2 from './components/Project2';
import Subscribe from './components/subscribe';
import HomepageScreen13 from './components/Homepage13';
import Centerpage from './components/Centerpage';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

// Define your breakpoints and corresponding base font sizes
const breakpoints = {
  extralarge: 1600,
  large: 1200,
  medium: 900,
  small: 600,
  xsmall: 480,
  xxsmall: 360,
  xxxsmall:0
};

const baseFontSizes = {
  extralarge: 0.965,
  large: 1.1,
  medium: 1.14,
  small: 1.06,
  xsmall: 1.0,
  xxsmall: 0.8,
  xxxsmall:1.5
};

function App() {
  console.log(window.innerWidth);
  const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  
  useEffect(() => {
    function updateBaseFontSize() {
      const html = document.documentElement;
      const currentBreakpoint = Object.entries(breakpoints).find(([_, width]) => {
        const mediaQuery = `(min-width: ${width}px)`;
        const matches = window.matchMedia(mediaQuery).matches;
        
        console.log(`Media query: ${mediaQuery}, Matches: ${matches}`);
        
        return matches;
      });
    
      console.log('Current Breakpoint:', currentBreakpoint);
      
      if (currentBreakpoint) {
        const zoomLevel = currentBreakpoint && currentBreakpoint[0] === 'extralarge' ? '109%' : '100%';
      document.body.style.zoom = zoomLevel;
        const [breakpoint, width] = currentBreakpoint;
        const baseFontSize = baseFontSizes[breakpoint];
        console.log('Base Font Size:', baseFontSize);
        html.style.setProperty("--base-font-size", `${baseFontSize * window.innerWidth/100}px`);
      }
    }
    
    updateBaseFontSize();
    window.addEventListener("resize", updateBaseFontSize);
    
    return () => {
      window.removeEventListener("resize", updateBaseFontSize);
    };
  }, []);
  
  console.log(baseFontSize);
  console.log(111)
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Centerpage} />
      <Route path="/homepage2" component={HomepageScreen2} />
      <Route path="/homepage3" component={HomepageScreen3} />
      <Route path="/homepage" component={HomepageScreen} />
      <Route path="/homepage4" component={HomepageScreen4} />
      <Route path="/homepage5" component={HomepageScreen5} />
      <Route path="/homepage6" component={HomepageScreen6} />
      <Route path="/homepage7" component={HomepageScreen7} />
      <Route path="/homepage8" component={HomepageScreen8} />
      <Route path="/homepage13" component={HomepageScreen13} />
      <Route path="/homepage9" component={HomepageScreen9} />
      <Route path="/homepage10" component={HomepageScreen10} />
      <Route path="/homepage11" component={HomepageScreen11} />
      <Route path="/homepage12" component={HomepageScreen12} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/project2" component={ProjectScreen2} />
      

    </Switch>
  </Router>
  );
}

export default App;
