import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "components/Banner/Banner";

const App = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <Banner />
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default App;
