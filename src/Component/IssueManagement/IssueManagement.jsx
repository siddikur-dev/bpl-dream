import React, { use, useState } from "react";
import Card from "../Card/Card";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import Card2 from "../Card/Card2";

const IssueManagement = ({ fetchPromise }) => {
  const fetchUse = use(fetchPromise);
  const [toggleStatus, setToggleStatus] = useState("All");

  const [data, setData] = useState(fetchUse);
  return (
    <div>
      <Card key={data.ticketId} data={data}></Card>

      <ToggleButtons
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleButtons>
      <div className="grid grid-cols-3 container mx-auto gap-5 p-3">
        {data.map((issue) => (
          <Card2 key={issue.ticketId} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default IssueManagement;
