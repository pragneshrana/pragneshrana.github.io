/* global gtag */ // Add this line at the very top of your App.js
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import React, { useState, useEffect } from "react";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  
  // Initialize Google Analytics
  useEffect(() => {
    // Page view tracking using gtag
    gtag("config", "G-GMLVFQPDHN", {
      page_path: window.location.pathname,
    });
  }, []);

  // Fetch resume data
  const getResumeData = () => {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        setResumeData(data);
      },
      error: (xhr, status, err) => {
        console.log(err);
        alert(err);
      },
    });
  };

  // Component did mount equivalent
  useEffect(() => {
    getResumeData();
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
