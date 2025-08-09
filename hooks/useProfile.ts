import { supabaseBrowser } from "@/lib/supabase/browser";
import { Profile } from "@/types/profile";
import { useQuery } from "@tanstack/react-query";

const initialProfile: Profile = {
    created_at: "",
    display_name: null,
    email: "",
    id: "",
    image_url: null,
};

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
        const { data: profile } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

        return profile;
    }

    return initialProfile;
};

export const useProfile = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: fetchProfile,
    });
};
