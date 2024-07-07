import Link from "next/link"
import React from "react"

export default function Button({ onClick, href, classname, target, children }) {
  return (
    <button onClick={onClick}>
      <Link
        href={href}
        className={`w-full flex bg-primary text-white px-3 py-1 rounded-md ${classname}`}
        target={target}
      >
        {children}
      </Link>
    </button>
  )
}
