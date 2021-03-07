import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// Tools
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//Pages
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

// Components
import Navigation from "./components/Navigation.js";


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Router basename= {process.env.PUBLIC_URL + '/'}>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Router>
      </div>
    </div>
  );
}

export default App;
