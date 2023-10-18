import React from "react";
import ReactDOM from "react-dom";
import classes from "./SuccessModal.module.css";
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
        <Button onClick={props.onCancel} className={classes.btn_success}>
          Ok
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onCancel={props.onCancel} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
