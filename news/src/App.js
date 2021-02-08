import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Politics from './Views/Politics';
import Footer from './Components/Footer';
// import { Router } from "react-router";

function App() {
  return (
    // <Router>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div>
          <br />
          <Headlines />
          <Sports />
          <Weather />
          <Politics />
        </div>
      </header>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
