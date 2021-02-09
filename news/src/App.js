import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Politics from './Views/Politics';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Router basename="/">
          <NavBar />
          <div>
            <Route exact path="/" component={Headlines} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/politics" component={Politics} />
          </div>
        </Router>
      </header>
      <Footer />
    </div>

  );
}

export default App;
