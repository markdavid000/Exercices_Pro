import React, { useState } from "react";
import classes from "./UserItem.module.css";
import { TiDeleteOutline } from "react-icons/ti";
import SuccessModal from "../../UI/SuccessModal/SuccessModal";

const UserItem = (props) => {
  const [deleteState, setDeleteState] = useState(null);

  const onDeleteHandler = () => {
    props.onDelete(props.id);

    return setDeleteState({
      title: "Success",
      message: "User details deleted successfully",
    });
  };

  const closeModal = () => {
    setDeleteState(null);
  };

  return (
    <div>
      {deleteState && (
        <SuccessModal
          title={deleteState.title}
          message={deleteState.message}
          onCancel={closeModal}
        />
      )}
      <li className={classes.userItem}>
        {props.children}
        <button onClick={onDeleteHandler} className={classes.btn_del}>
          <TiDeleteOutline color="#bb1a20" fontSize="2em" />
        </button>
      </li>
    </div>
  );
};

export default UserItem;
