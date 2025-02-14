"use client"

interface Props {
  label?: string
  name?: string
  required?: boolean
}

export default function Label({
  label = "",
  name = "",
  required = false,
}: Props) {
  return (
    <div className="flex text-start">
      <label className="text-sm text-gray-500" htmlFor={name}>
        {label}
      </label>
      {required === false ? (
        ""
      ) : (
        <span className="text-red-600 text-sm ms-1">*</span>
      )}
    </div>
  )
}
