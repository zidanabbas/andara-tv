import React from "react";

export default function Layouts({ children }) {
  return (
    <div className="w-full h-full bg-background-color overflow-hidden">
      {children}
    </div>
  );
}
