import create from "zustand";
import { devtools } from "zustand/middleware";

interface Bears {
  bears: number;
  increase: () => void;
  decrease: () => void;
}

const useBearStore = create<Bears>()(
  devtools(
    (set) => ({
      bears: 0,
      increase: () => set((state) => ({ bears: state.bears + 1 }), false, "bear/increase"),
      decrease: () => set((state) => ({ bears: state.bears - 1 }), false, "bear/decrease"),
    }),
    {
      name: "bear-storage",
    }
  )
);

export default useBearStore;
