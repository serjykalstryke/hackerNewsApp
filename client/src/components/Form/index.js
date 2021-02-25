import React from "react";
import "./style.css";
import store from "../../store";

export function Form(props) {
  return <div id="form">{props.children}</div>;
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control input" {...props} autocomplete="off" />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ marginBottom: 10 }}
      className="btn btn-secondary"
    >
      <i className="fas fa-book-open"> Submit</i>
    </button>
  );
}
