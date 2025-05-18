import { useState, useEffect } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const stored = localStorage.getItem("dark-mode");
        if (stored !== null) return stored === 'true'
        return window.matchMedia('prefers-color-scheme: dark').matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("dark-mode", String(isDark));
    }, [isDark])

    return {
        isDark,
        toggle: () => setIsDark(prev => !prev),
    }
}
