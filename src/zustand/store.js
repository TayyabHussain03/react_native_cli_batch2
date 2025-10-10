import { create } from 'zustand'

export const useCounter = create((set) => ({
    counter: 1, //name and value
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
}))