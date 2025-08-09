import { supabaseBrowser } from "@/lib/supabase/browser";
import { Profile } from "@/types/profile.types";
import { useQuery } from "@tanstack/react-query";

const fetchProfile = async () => {
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

    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (profileError) {
        throw new Error(profileError.message);
    }

    return profile as Profile;
};

export const useProfile = () => {
    return useQuery<Profile | null>({
        queryKey: ["user"],
        queryFn: fetchProfile,
    });
};
