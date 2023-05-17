
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
import ProjectScreen2 from './components/Project2';
function App() {
  console.log(window.innerWidth);
  const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
console.log(baseFontSize);
  return (
   <HomepageScreen2 />
  );
}

export default App;
