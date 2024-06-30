import React from "react";

export default function ContainTitle({ title, classname }) {
  return (
    <h2 className={`font-bold tracking-widest px-4 py-2 mb-4 ${classname}`}>
      {title}
    </h2>
  );
}
