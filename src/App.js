import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
      <Router>
      <Navigation />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/portfolio">
          </Route>
          <Route path="/contact">
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
