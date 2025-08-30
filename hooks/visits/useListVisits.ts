import { fetchAuthUser } from "@/api/fetchAuthUser";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { VisitWithClient } from "@/lib/types/visit.types";
import { useQuery } from "@tanstack/react-query";

const fetchAllVisits = async () => {
    const supabase = supabaseBrowser();
    const user = await fetchAuthUser();

    if (!user) throw new Error("User not authenticated");

    const { data: visits, error: visitsError } = await supabase
        .from("visits")
        .select("*, client:clients(*)")
        .eq("user_id", user.id);

    if (visitsError) {
        throw new Error(visitsError.message);
    }

    return visits as VisitWithClient[];
};

export function useListVisits() {
    return useQuery<VisitWithClient[] | null>({
        queryKey: ["visits", "list"],
        queryFn: fetchAllVisits,
    });
}
