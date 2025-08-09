import { supabaseBrowser } from "@/lib/supabase/browser";
import { Profile } from "@/types/profile";
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

    if (user) {
        const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

        if (profileError) {
            throw new Error(profileError.message);
        }

        return profile as Profile;
    }

    // No user authenticated, return null to indicate absence of profile data
    return null;
};

export const useProfile = () => {
    return useQuery<Profile | null>({
        queryKey: ["user"],
        queryFn: fetchProfile,
    });
};
