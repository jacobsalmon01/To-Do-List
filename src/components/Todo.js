import React from "react";

export default (props) => (
  <div
    style={{
      textDecoration: props.todo.complete ? "line-through" : "",
    }}
    OnClick={props.toggleComplete}
  >
    {props.todo.text}
  </div>
);
