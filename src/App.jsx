import { Suspense } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import IssueManagement from "./Component/IssueManagement/IssueManagement";
import Navber from "./Component/Navber/Navber";

function App() {
  const fetchDatas = async () => {
    const res = await fetch("./data.json");
    return res.json();
  };
  const fetchPromise = fetchDatas();
  return (
    <>
      <Navber></Navber>
      <Suspense fallback={"Loading..."}>
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
