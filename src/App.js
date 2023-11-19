import "./App.css";
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      portfolio : [
        {
          name : "Note",
          price : 123,
          Feature1 : "1-Page Website",
          Feature2 : "Free SSL",
        },
        {
          name : "Modern",
          price : 456,
          Feature1 : "3-Page Website",
          Feature2 : "Free SSL",
          Feature3 : "Free 80 email IDs",
        },
      ],
      BusinessWebsite : [
        {
          name : "Classic",
          price : 123,
          Feature1 : "1-Page Website",
          Feature2 : "Free SSL",
        },
        {
          name : "Modern",
          price : 456,
          Feature1 : "2-Page Website",
          Feature2 : "Free SSL",
          Feature3 : "Free 80 email IDs",
        },
        {
          name : "Super Modern",
          price : 456,
          Feature1 : "10-Page Website",
          Feature2 : "Free SSL",
          Feature3 : "Free 80 email IDs",
        },
      ]
       
    };
  }

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

