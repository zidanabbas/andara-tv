import React from "react";

export default function ContainTitle({ title, classname }) {
  return (
    <div className="w-full px-4">
      <h2
        className={`text-base font-bold text-primary tracking-widest ${classname}`}
      >
        {title}
      </h2>
    </div>
  );
}
