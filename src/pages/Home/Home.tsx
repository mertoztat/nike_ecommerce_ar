import React from "react";
import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import Banner from "components/Banner/Banner";
import Popular from "components/PopularSales/Popular";
import Highlights from "components/Highlights/Highlights";
import Container from "components/Container/Container";
import Featured from "components/Featured/Featured";
import Footer from "components/Footer/Footer";
import ScrollToTopButton from "components/ScrollToTopButton/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <Banner />
      </div>
      <main>
        <Popular />
        <Highlights />
        <Container />
        <Featured />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Home;
