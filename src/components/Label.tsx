"use client"

interface Props {
  label: string
  required: boolean
}

export default function Label({ label = "", required = false }: Props) {
  return (
    <div className="flex text-start">
      <label className="text-sm">{label}</label>
      {required === false ? (
        ""
      ) : (
        <span className="text-red-600 text-sm ms-1">*</span>
      )}
    </div>
  )
}
