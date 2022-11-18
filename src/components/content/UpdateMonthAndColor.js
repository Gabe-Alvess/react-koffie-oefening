import styled from "styled-components";
import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

const Button = styled.button`
  margin: 0.25vw 0px;
`;

const UpdateMonthAndColor = () => {
  const { month, setMonth, color, setColor } = useContext(UserContext);

  const [newMonth, setNewMonth] = useState(month);
  const [newColor, setNewColor] = useState(color);

  //functions to update values
  //updates month
  const onClickUpdateMonth = (e) => {
    e.preventDefault(); //prevents form from resetting instantly
    setMonth(newMonth);
  };

  //updates color
  const onClickUpdateColor = (e) => {
    e.preventDefault(); //prevents form from resetting instantly
    setColor(newColor);
  };

  //updates both month and color
  const onClickUpdateAll = (e) => {
    e.preventDefault();
    setMonth(newMonth);
    setColor(newColor);
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            The month is {month}, the color is {color}.
          </h1>
          <p className="col-lg-10 fs-4">More Information</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              Month:
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="month"
                value={newMonth}
                onChange={(e) => setNewMonth(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              Color:
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="color"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
              />
            </div>
            <Button
              onClick={onClickUpdateMonth}
              className="w-100 btn btn-lg btn-primary"
            >
              Update Month
            </Button>{" "}
            <Button
              onClick={onClickUpdateColor}
              className="w-100 btn btn-lg btn-primary"
            >
              Update Color
            </Button>
            <Button
              onClick={onClickUpdateAll}
              className="w-100 btn btn-lg btn-primary"
            >
              Update both color and month
            </Button>
            <hr className="my-4" />
            {/* <small className="text-muted">Thank you, {userValue}!</small> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMonthAndColor;
