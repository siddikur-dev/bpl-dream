import React from "react";
import Container from "../Container/Container";

const Card = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-8 my-8 mx-5">
        <div className="bg-gray-500 rounded-lg flex flex-col justify-center items-center h-50">
          <h2 className="text-3xl">Pending </h2>
          <p className="text-lg">0</p>
        </div>
        <div className="bg-[#ad46ff] rounded-lg flex flex-col justify-center items-center h-50">
          <h2 className="text-3xl">Pending </h2>
          <p className="text-lg">0</p>
        </div>
        <div className="bg-teal-500 rounded-lg flex flex-col justify-center items-center h-50">
          <h2 className="text-3xl">Pending </h2>
          <p className="text-lg">0</p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
