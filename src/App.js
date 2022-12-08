
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from './Components/Pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import User from './Components/Users/User';
import Navbar from './Components/Layout/Navbar';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/*" element={<NotFound />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="/users/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
