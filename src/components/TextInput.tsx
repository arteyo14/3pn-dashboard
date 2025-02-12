"use client"

import Label from "./Label"

interface Props {
  label: string
  name: string
  required: boolean
}

export default function TextInput({ label = "", name = "", required }: Props) {
  return (
    <div className="gap-1 flex flex-col max-h-[50px]">
      <Label label={label} required={required} />
      <input type="text" name={name} />
    </div>
  )
}
