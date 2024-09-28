import { create } from 'zustand';

type FavModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useFavModal = create<FavModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));