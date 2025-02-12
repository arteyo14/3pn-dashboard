import { create } from "zustand"

interface IState {
  loading: boolean
}

interface IAction {
  setLoading: (value: boolean) => void
  resetState: () => void
}

const initialState: IState = {
  loading: false,
}

export const useAuthLoginStore = create<IState & IAction>((set) => ({
  ...initialState,
  setLoading: (value) => set(() => ({ loading: value })),
  resetState: () => set(initialState),
}))
