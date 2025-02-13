"use client"

import Label from "./Label"

interface IProps {
  label: string
  name: string
  required?: boolean
  type?: string
  className?: string
  onChange?: (value: string) => void
}

export default function TextInput({
  label = "",
  name = "",
  required,
  type,
  className,
  onChange,
}: IProps) {
  return (
    <div className={`gap-1 flex flex-col ${className}`}>
      <Label label={label} required={required ?? false} />
      <input
        type={type}
        name={name}
        className="input input-bordered w-full bg-white"
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  )
}
