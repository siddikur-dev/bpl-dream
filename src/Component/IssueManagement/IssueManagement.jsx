import React, { use, useState } from "react";
import Card from "../Card/Card";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import Card2 from "../Card/Card2";

const IssueManagement = ({ fetchPromise }) => {
  const fetchUse = use(fetchPromise);
  const [toggleStatus, setToggleStatus] = useState("All");
  return (
    <div>
      <Card></Card>

      <ToggleButtons
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleButtons>
      <div className="grid grid-cols-3 container mx-auto gap-5 p-3">
        {fetchUse.map((issue) => (
          <Card2 key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default IssueManagement;
