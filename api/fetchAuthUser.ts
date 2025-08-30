import { supabaseBrowser } from "@/lib/supabase/browser";

export async function fetchAuthUser() {
    const supabase = supabaseBrowser();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);

    return user;
}
