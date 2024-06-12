import React from "react";

export default function Layouts({ children }) {
  return (
    <div className="w-full bg-background-color overflow-hidden">{children}</div>
  );
}
