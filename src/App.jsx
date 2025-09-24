import "./App.css";
import Footer from "./Component/Footer/Footer";
import Navber from "./Component/Navber/Navber";

function App() {
  return (
    <>
      <Navber></Navber>

      <div>
        <div className="bg-gray-500 rounded-lg">
          <h2 className="text-3xl">Pending </h2>
          <p>0</p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
