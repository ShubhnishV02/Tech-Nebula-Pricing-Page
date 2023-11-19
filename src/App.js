import "./App.css";
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

class App extends Component {

  render() {
      return (  
        <div>
        <Navbar />
        <MainSection />
        <Sidebar />
        <Footer />
        
      </div>
    )
  }
}

export default App

