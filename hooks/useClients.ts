import { supabaseBrowser } from "@/lib/supabase/browser";
import { Client } from "@/lib/types/client.types";
import { useQuery } from "@tanstack/react-query";

const fetchClients = async () => {
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

    const { data: clients, error: clientsError } = await supabase
        .from("clients")
        .select("*")
        .eq("user_id", user.id);

    console.log(clients);

    if (clientsError) {
        throw new Error(clientsError.message);
    }

    return clients as Client[];
};

export const useClients = () => {
    return useQuery<Client[] | null>({
        queryKey: ["clients"],
        queryFn: fetchClients,
    });
};
