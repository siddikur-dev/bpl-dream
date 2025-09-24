import React from "react";
import Container from "../Container/Container";

const Card = ({ data }) => {
  const pendingData = data.filter((element) => element.status === "Pending");
  const reviwedData = data.filter((element) => element.status === "Reviewed");
  const submittedData = data.filter(
    (element) => element.status === "Submitted"
  );
  console.log();
  return (
    <Container>
      <div className="grid grid-cols-3 gap-8 my-8 mx-5">
        <div className="bg-gray-500 rounded-lg flex flex-col justify-center items-center h-50">
          <h2 className="text-3xl">Pending </h2>
          <p className="text-lg">{pendingData.length}</p>
        </div>
        <div className="bg-[#ad46ff] rounded-lg flex flex-col justify-center items-center h-50">
          <h2 className="text-3xl">Reviewed </h2>
          <p className="text-lg">{reviwedData.length}</p>
        </div>
        <div className="bg-teal-500 rounded-lg flex flex-col justify-center items-center h-50">
          <h2 className="text-3xl">Submitted </h2>
          <p className="text-lg">{submittedData.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
