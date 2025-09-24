import { useState } from "react";
import "./App.css";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import Navber from "./Component/Navber/Navber";
import ToggleButtons from "./Component/ToggleButtons/ToggleButtons";

function App() {
  const [toggleStatus, setToggleStatus] = useState("All");
  console.log(toggleStatus);
  return (
    <>
      <Navber></Navber>
      <Card></Card>
      <ToggleButtons
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleButtons>
      <Footer></Footer>
    </>
  );
}

export default App;
