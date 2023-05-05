import React from "react";
import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import Banner from "components/Banner/Banner";
import Popular from "components/PopularSales/Popular";
import Highlights from "components/Highlights/Highlights";
import Container from "components/Container/Container";
import Featured from "components/Featured/Featured";
import Footer from "components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <Banner />
      </div>
      <Popular />
      <Highlights />
      <Container />
      <Featured />
      <Footer />
    </>
  );
};

export default Home;
