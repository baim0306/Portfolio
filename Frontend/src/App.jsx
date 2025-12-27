import { useState, useEffect } from "react";
import { useRef } from "react";
import "./App.css";
import axios from "axios";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  const API_URL = `${import.meta.env.VITE_API_URL || ""}/api/v2/portfolio/baim`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setPortfolioData(response.data);
      } catch (err) {
        if (err.response) {
          setError(`Error: ${err.response.status} - ${err.response.data}`);
        } else if (err.request) {
          setError("Error: No response received from server");
        } else {
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_URL]);

  useEffect(() => {
    if (portfolioData) {
      document.title = `${portfolioData.name} | ${portfolioData.title}`;
    } else if (error) {
      document.title = "Error | Portfolio V2";
    } else {
      document.title = "Loading... | Portfolio V2";
    }
  }, [portfolioData, error]);

  useEffect(() => {
    console.log("Current portfolioData:", portfolioData);
  }, [portfolioData]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  if (!portfolioData) {
    return <div className="text-center">No portfolio data available.</div>;
  }

  return (
    <>
      <Hero homeRef={homeRef} portfolioData={portfolioData} />
      <About aboutRef={aboutRef} portfolioData={portfolioData} />
      <Project projectRef={projectRef} portfolioData={portfolioData} />
      <Footer homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} />
    </>
  );
}
