import ContainTitle from "@/components/ui/ContainTitle"
import React from "react"

export default function VisiMisiComponent({ title, classname, children }) {
  return (
    <div className="container py-10">
      <ContainTitle title={title} classname={classname} />

      <div className="sm:flex justify-evenly gap-4 rounded-lg">{children}</div>
    </div>
  )
}
