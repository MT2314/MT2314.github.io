import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// Tools
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Components
import Navigation from "./components/Navigation.js";


function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
