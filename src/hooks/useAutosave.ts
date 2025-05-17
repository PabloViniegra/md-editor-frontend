import { useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";

export function useAutosave<T extends object>(
    key: string,
    value: T,
    onRestore: (v: T) => void,
    delay: number
): boolean {
    const [isSaving, setIsSaving] = useState(false);
    const debounced = useDebounce(value, delay);
    const lastSavedRef = useRef<string>(JSON.stringify(value));

    useEffect(() => {
        const saved = localStorage.getItem(key);
        if (saved) {
            try {
                const parsed: T = JSON.parse(saved);
                onRestore(parsed);
                lastSavedRef.current = JSON.stringify(parsed);
            } catch (e) {
                console.error("Error parsing draft", e);
            }
        }
    }, []);

    useEffect(() => {
        const serialized = JSON.stringify(debounced);
        if (serialized === lastSavedRef.current) return;
        setIsSaving(true);
        try {
            localStorage.setItem(key, serialized);
            lastSavedRef.current = serialized;
        } catch (e) {
            console.error("Error saving draft", e);
        }

        const timer = setTimeout(() => setIsSaving(false), 800);
        return () => clearTimeout(timer);
    }, [key, debounced]);

    useEffect(() => () => void localStorage.removeItem(key), [key]);

    return isSaving;
}
