import { useState, useCallback } from "react";

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const handleOpenChange = useCallback((open: boolean) => setIsOpen(open), []);

    return {
        isOpen,
        openModal,
        closeModal,
        handleOpenChange,
    };
}
