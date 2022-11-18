import styled from "styled-components";
import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

const Button = styled.button`
  margin: 025vw 0px;
`;

const UpdateAgeAndNationality = () => {
  const { age, setAge, nationality, setNationality } = useContext(UserContext);

  const [newAge, setNewAge] = useState(age);
  const [newNationality, setNewNationality] = useState(nationality);

  const onClickUpdateAge = (e) => {
    e.preventDefault();
    setAge(newAge);
  };

  const onClickUpdateNationality = (e) => {
    e.preventDefault();
    setNationality(newNationality);
  };

  const onClickUpdateAll = (e) => {
    e.preventDefault();
    setAge(newAge);
    setNationality(newNationality);
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            You are {age} years old, your nationality is {nationality}.
          </h1>
          <p className="col-lg-10 fs-4">Information</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              Age:
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="age"
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
              />
            </div>
            <div className="form-floating mb-3">
              Nationality:
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="nationality"
                value={newNationality}
                onChange={(e) => setNewNationality(e.target.value)}
              />
            </div>
            <Button
              onClick={onClickUpdateAge}
              className="w-100 btn btn-lg btn-primary mt-1 mb-2"
            >
              Update Age
            </Button>
            <Button
              onClick={onClickUpdateNationality}
              className="w-100 btn btn-lg btn-primary mt-1 mb-2"
            >
              Update Nationality
            </Button>
            <Button
              onClick={onClickUpdateAll}
              className="w-100 btn btn-lg btn-primary mt-1 mb-2"
            >
              Update both age and nationality
            </Button>
            <hr className="my-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAgeAndNationality;
