import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "components/Banner/Banner";
import Popular from "components/PopularSales/Popular";

const App = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <Banner />
      </div>
      <div>
        <Popular />
      </div>
    </>
  );
};

export default App;
