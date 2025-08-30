import { fetchAuthUser } from "@/api/fetchAuthUser";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { Client } from "@/lib/types/client.types";
import { useQuery } from "@tanstack/react-query";

const fetchAllClients = async () => {
    const supabase = supabaseBrowser();
    const user = await fetchAuthUser();

    if (!user) throw new Error("User not authenticated");

    const { data: clients, error: clientsError } = await supabase
        .from("clients")
        .select("*")
        .eq("user_id", user.id);

    if (clientsError) throw new Error(clientsError.message);

    return clients as Client[];
};

export function useListClients() {
    return useQuery<Client[] | null>({
        queryKey: ["clients", "list"],
        queryFn: fetchAllClients,
    });
}
