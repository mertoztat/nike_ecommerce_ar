import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "components/Banner/Banner";
import Popular from "components/PopularSales/Popular";
import Highlights from "components/Highlights/Highlights";
import Container from "components/Container/Container";
import Featured from "components/Featured/Featured";

const App = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <Banner />
      </div>
      <div>
        <Popular />
        <Highlights />
        <Container />
        <Featured />
      </div>
    </>
  );
};

export default App;
