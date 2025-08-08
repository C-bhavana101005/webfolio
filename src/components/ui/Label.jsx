import React from "react";

export function Label({ children, className = "", ...props }) {
  return (
    <label className={`block font-medium ${className}`} {...props}>
      {children}
    </label>
  );
}

export default Label;