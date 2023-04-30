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
      <div className="deneme">
        <Navbar />
        <div className="header">
          <Banner />
        </div>

        <div className="deneme">
          <Popular />
          <Highlights />
          <Container />
          <Featured />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
