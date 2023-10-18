import React from "react";
import classes from "./UsersList.module.css";
import Card from "../../UI/Card/Card";
import UserItem from "../UserItem/UserItem";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} id={user.id} onDelete={props.onDeleteDetails}>
            {user.name} ({user.age} years old)
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
