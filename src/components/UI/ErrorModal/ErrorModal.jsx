import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.header}>
        <h2>{props.title}</h2>
      </div>
      <p className={classes.content}>{props.message}</p>
      <footer className={classes.actions}>
        <Button onClick={props.onCancel} className={classes.btn_err}>
          Ok
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} onCancel={props.onCancel} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
