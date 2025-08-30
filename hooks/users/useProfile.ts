import { fetchAuthUser } from "@/api/fetchAuthUser";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { Profile } from "@/lib/types/profile.types";
import { useQuery } from "@tanstack/react-query";

const fetchProfile = async () => {
    const supabase = supabaseBrowser();
    const user = await fetchAuthUser();

    if (!user) throw new Error("User not authenticated");

    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (profileError) throw new Error(profileError.message);

    return profile as Profile;
};

export function useProfile() {
    return useQuery<Profile | null>({
        queryKey: ["profile"],
        queryFn: fetchProfile,
    });
}
