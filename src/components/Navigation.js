import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Pages
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Portfolio from "../pages/Portfolio";

const navigation = () => {
    return (
        <div>
            {/* <!-- Navigation Bar --> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Mike Tkachuk</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Router>
                            <li className="nav-item nav-li">
                                <Link className="nav-link " to="/portfolio">Portfolio</Link>

                            </li>
                            <li className="nav-item nav-li active">
                                <Link className="nav-link " to="/">About Me</Link>
                            </li>
                            <li className="nav-item nav-li">
                                <Link className="nav-link " to="/contact">Contact</Link>
                            </li>
                            <Route exact path="/" component={About} />
                            <Route path="/contact" component={ContactUs} />
                            <Route path="/portfolio" component={Portfolio} />
                        </Router>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default navigation
