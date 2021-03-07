import { HashRouter as Router, Route } from 'react-router-dom'
// Tools
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//Pages
import Portfolio from './pages/Portfolio'
import About from './pages/about/About'
import ContactUs from './pages/ContactUs'

// Components
import Navigation from "./components/Navigation.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    </div>
  );
}

export default App;