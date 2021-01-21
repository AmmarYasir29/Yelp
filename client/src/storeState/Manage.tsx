import create from "zustand";

type State = {
  restaurant: [];
  setRestaurant: (by: []) => void;
};

const useStore = create<State>((set) => ({
  restaurant: [],
  setRestaurant: (value: any) => set({ restaurant: value }),
}));

export default useStore;
