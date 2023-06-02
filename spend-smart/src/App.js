
import "./App.css";
import Home from './pages';
import SignInPage from './pages/signin';
import AboutUs from "./AboutUs page/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "../src/Components/Navbar";
import BudgetTrackerDashboard from "./Components/dashboard";

const Home = () => <h2>Home Component</h2>;
const Budget = () => <h2>Budget Component</h2>;
const Expenditures = () => <h2>Expenditures Component</h2>;
const Transaction = () => <h2>Transaction Component</h2>;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/expenditures" element={<Expenditures />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<BudgetTrackerDashboard />} />
            <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignInPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
