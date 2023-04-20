import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "components/Banner/Banner";
import Popular from "components/PopularSales/Popular";
import Highlights from "components/Highlights/Highlights";
import Container from "components/Container/Container";
import Featured from "components/Featured/Featured";
import Footer from "components/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="header">
          <Banner />
        </div>

        <div>
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

export default App;
