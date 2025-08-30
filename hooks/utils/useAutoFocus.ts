import { useEffect, useRef } from "react";

export function useAutoFocus<
    T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement
>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    return ref;
}
