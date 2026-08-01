import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import About from "./pages/About";

import "./App.css";

function App() {

	  return (

		      <div className="app">

		        <Sidebar />

		        <div className="content">

		          <Navbar />

		          <Routes>

		            <Route path="/" element={<Dashboard />} />

		            <Route path="/services" element={<Services />} />

		            <Route path="/about" element={<About />} />

		          </Routes>

		        </div>

		      </div>

		    );

}

export default App;
