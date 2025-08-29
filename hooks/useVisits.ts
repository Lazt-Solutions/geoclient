import { supabaseBrowser } from "@/lib/supabase/browser";
import { Visit } from "@/lib/types/visit.types";
import { useQuery } from "@tanstack/react-query";

const fetchVisits = async () => {
    const supabase = supabaseBrowser();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error) {
        throw new Error(error.message);
    }

    // Return immediately if no user is authenticated
    if (!user) return null;

    const { data: visits, error: visitsError } = await supabase
        .from("visits")
        .select("*")
        .eq("user_id", user.id);

    if (visitsError) {
        throw new Error(visitsError.message);
    }

    return visits as Visit[];
};

export const useVisits = () => {
    return useQuery<Visit[] | null>({
        queryKey: ["visits"],
        queryFn: fetchVisits,
    });
};
