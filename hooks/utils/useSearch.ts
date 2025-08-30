import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";


function useSearch(delay: number = 500) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const handleSearch = useCallback((value: string) => {
        const trimmed = value.trim();
        if (trimmed === "") {
            setSearchTerm("");
            setIsSearching(false);
            return;
        }
        setSearchTerm(value);
        setIsSearching(true);
    }, []);

    // Configurable debounce for the search term
    const debouncedSearchTerm = useDebounce(searchTerm, delay);

    // Reset isSearching when the debounced search term updates
    useEffect(() => {
        if (debouncedSearchTerm !== "") setIsSearching(false);
    }, [debouncedSearchTerm]);

    // Function to clear/reset the search
    const resetSearch = useCallback(() => {
        setSearchTerm("");
        setIsSearching(false);
    }, []);

    return {
        searchTerm,
        debouncedSearchTerm,
        isSearching,
        handleSearch,
        resetSearch,
    };
}

export default useSearch;
