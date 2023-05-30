import "./App.css";
import AboutUs from "./AboutUs page/AboutUs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";

const Home = () => <h2>Home Component</h2>;
const Budget = () => <h2>Budget Component</h2>;
const Expenditures = () => <h2>Expenditures Component</h2>;
const Transaction = () => <h2>Transaction Component</h2>;
const Login = () => <h2>Login Component</h2>;
const Signup = () => <h2>Signup Component</h2>;

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
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
