import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import SuccessModal from "../../UI/SuccessModal/SuccessModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [errorState, setErrorState] = useState("");
  const [successState, setSuccessState] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return setErrorState({
        title: "Error",
        message: "Please fill in the correct info",
      });

      console.log(enteredName)
    }

    if (+enteredUserAge < 1) {
      return setErrorState({
        title: "Error",
        message: "Your value should be greater than 0",
      });
    }

    props.onAddUser(enteredName, enteredUserAge);

    // setEnteredUsername("");
    // setEnteredAge("");

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    if (enteredName > 0 || +enteredUserAge > 0) {
      return setSuccessState({
        title: "Success",
        message: "User details added successfully",
      });
    }
  };

  // const usernameHandle = (e) => {
  //   setEnteredUsername(e.target.value);
  // };

  // const ageHandle = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const closeModal = () => {
    setErrorState(null);
    setSuccessState(null);
  };

  return (
    <div>
      {successState && (
        <SuccessModal
          title={successState.title}
          message={successState.message}
          onCancel={closeModal}
        />
      )}
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onCancel={closeModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              // value={enteredUsername}
              // onChange={usernameHandle}
              type="text"
              id="username"
              ref={nameInputRef}
            />
          </div>

          <div>
            <label htmlFor="age">Age (years)</label>
            <input
              // value={enteredAge}
              // onChange={ageHandle}
              type="number"
              id="age"
              ref={ageInputRef}
            />
          </div>

          <Button>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
