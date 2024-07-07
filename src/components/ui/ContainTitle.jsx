import React from "react"

export default function ContainTitle({ title, classname }) {
  return (
    <h2 className={`font-bold tracking-widest px-4 py-1 mb-2 ${classname}`}>
      {title}
    </h2>
  )
}
