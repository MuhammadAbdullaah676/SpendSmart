
import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import '../CSS/Navbar.css';
import logo from '../image/logo4.png';

const Home = () => <h2>Home Component</h2>;
const Budget = () => <h2>Budget Component</h2>;
const Expenditures = () => <h2>Expenditures Component</h2>;
const Transaction = () => <h2>Transaction Component</h2>;
const About = () => <h2>About Component</h2>;
const Login = () => <h2>Login Component</h2>;
const Signup = () => <h2>Signup Component</h2>;

const Navbar = () => {
  return (
    <div className="container navbar">
      <nav className="nav-0">
        <div className="nav-contents">
          <div className="nav-title">
            SPENDMART
          </div>
          <div>
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>

        <div className="content-links">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/budget" activeClassName="active">Budget</NavLink>
            </li>
            <li>
              <NavLink to="/expenditures" activeClassName="active">Expenditures</NavLink>
            </li>
            <li>
              <NavLink to="/transaction" activeClassName="active">Transaction</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
          </ul>
        </div>

        <div className="content-links">
          <ul>
            <li>
              <NavLink to="/login" activeClassName="active">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/expenditures" element={<Expenditures />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;








