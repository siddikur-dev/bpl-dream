import React, { use, useState } from "react";
import Card from "../Card/Card";
import ToggleButtons from "../ToggleButtons/ToggleButtons";

const IssueManagement = ({fetchPromise}) => {
  const fetchUse=use(fetchPromise)
  console.log(fetchUse);
  const [toggleStatus, setToggleStatus] = useState("All");
  console.log(toggleStatus);
  return (
    <div>
      <Card></Card>
      <ToggleButtons
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleButtons>
    </div>
  );
};

export default IssueManagement;
