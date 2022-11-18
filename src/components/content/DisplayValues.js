import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

function DisplayValues() {
  const { userValue, drink, month, color, age, nationality } =
    useContext(UserContext);

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5 mt-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">This is the Result</h1>
      </div>
      <div className=" p-4 p-md-5 border rounded-3 bg-light">
        <div className="fs-4">
          <span className="fw-bold fs-4">Name:</span> {userValue}
        </div>
        <div className="fs-4">
          <span className="fw-bold fs-4">Age:</span> {age}
        </div>
        <div className="fs-4">
          <span className="fw-bold fs-4">Nationality:</span> {nationality}
        </div>
        <div className="fs-4">
          <span className="fw-bold fs-4">Month:</span> {month}
        </div>
        <div className="fs-4">
          <span className="fw-bold fs-4">Drink:</span> {drink}
        </div>
        <div className="fs-4">
          <span className="fw-bold fs-4">Color:</span> {color}
        </div>
      </div>
    </div>
  );
}

export default DisplayValues;
