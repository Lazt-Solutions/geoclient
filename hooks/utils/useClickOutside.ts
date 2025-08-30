import { useEffect, useRef } from "react";

export default function useClickOutside<T extends HTMLElement>(
    onClickOutside: () => void
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside();
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [onClickOutside]);

    return ref;
}
