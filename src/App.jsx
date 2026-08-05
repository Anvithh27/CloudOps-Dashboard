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

    <div className="main-content">

        <Navbar />

        <Dashboard />

    </div>

</div>

		    );

}

export default App;
