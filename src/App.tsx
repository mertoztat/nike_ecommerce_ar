import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "components/Banner/Banner";
import Popular from "components/PopularSales/Popular";
import Highlights from "components/Highlights/Highlights";

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
      </div>
    </>
  );
};

export default App;
