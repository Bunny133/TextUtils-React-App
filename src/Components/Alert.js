import React from "react";

export default function Alert(props) {
  const Capitalize = (word) => {
    if (typeof word !== "undefined") {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return ""; // Return an empty string if the input is undefined
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}
