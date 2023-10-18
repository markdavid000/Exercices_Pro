import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/User/AddUser/AddUser";
import UsersList from "./components/User/UsersList/UsersList";

function App() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const storeInfo = JSON.parse(localStorage.getItem("userDetails"));

    if (storeInfo) {
      setUserDetails(storeInfo);
    }
  }, []);

  useEffect(() => {
    localStorage.key("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  const addUserDetails = (uName, uAge) => {
    setUserDetails((prevUser) => {
      return [
        ...prevUser,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };

  const deleteDetailsHandler = (userId) => {
    setUserDetails((prevUser) => {
      const updatedDetails = prevUser.filter((user) => user.id !== userId);
      return updatedDetails;
    });

    localStorage.removeItem("userDetails");
  };

  return (
    <div>
      <AddUser onAddUser={addUserDetails} />

      {userDetails && (
        <UsersList users={userDetails} onDeleteDetails={deleteDetailsHandler} />
      )}
    </div>
  );
}

export default App;
