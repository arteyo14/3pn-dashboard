"use client"

import { useCounterStore } from "./store/useCounterStore"

export default function Example() {
  const { count, increase, decrease, reset } = useCounterStore()

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-2xl font-bold">Zustand Counter</h1>
      <p className="text-xl">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={increase}
          className="px-4 py-2 btn bg-green-500 text-white rounded"
        >
          ➕ INCREASE
        </button>
        <button
          onClick={decrease}
          className="px-4 py-2 btn bg-red-500 text-white rounded"
        >
          ➖ DECREASE
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 btn bg-gray-500 text-white rounded"
        >
          🔄 RESET
        </button>
      </div>
    </div>
  )
}
