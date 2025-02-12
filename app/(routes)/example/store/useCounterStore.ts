import { create } from "zustand"

interface ICounterState {
  count: number
}

interface IActions {
  increase: () => void
  decrease: () => void
  reset: () => void
}

const initialState: ICounterState = {
  count: 0,
}

export const useCounterStore = create<ICounterState & IActions>((set) => ({
  ...initialState,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () =>
    set((state) => ({ count: state.count === 0 ? 0 : state.count - 1 })),
  reset: () => set(initialState),
}))
