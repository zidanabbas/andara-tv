import React from "react";

export default function ContainTitle({ title }) {
  return (
    <div className="w-full px-4">
      <h2 className="text-base max-w-48 font-bold text-primary tracking-widest">
        {title}
      </h2>
    </div>
  );
}
