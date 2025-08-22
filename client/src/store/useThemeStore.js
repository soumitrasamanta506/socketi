import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("socketi-theme") || "forest",
    setTheme: (theme) => {
        localStorage.setItem("socketi-theme", theme);
        set({ theme });
    }
}))