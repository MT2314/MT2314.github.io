import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Portfolio from "./components/Portfolio/Portfolio";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <!-- Navigation Bar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="index.html">Mike Tkachuk</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item nav-li">
                <Link className="nav-link " to="/portfolio">Portfolio</Link>

              </li>
            <li className="nav-item nav-li active">
              <Link className="nav-link " to="/">About Me</Link>
            </li>
            <li className="nav-item nav-li">
            <Link className="nav-link " to="/">Contact</Link>
            </li>
            </ul>
          </div>
        </nav>

      <div>


        <Route exact path="/" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
      </Router>
    </div >
  );
}

export default App;
