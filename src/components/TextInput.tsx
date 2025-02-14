"use client"

import Label from "./Label"

interface IProps {
  label: string
  name: string
  required?: boolean
  type?: string
  className?: string
  placeholder?: string
  onChange?: (value: string) => void
}

export default function TextInput({
  label = "",
  name = "",
  required,
  type,
  className,
  onChange,
  placeholder = "",
}: IProps) {
  return (
    <div className={`gap-1 flex flex-col ${className}`}>
      <Label label={label} name={name} required={required ?? false} />
      <input
        className="input input-bordered w-full bg-white text-gray-500 font-normal"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  )
}
