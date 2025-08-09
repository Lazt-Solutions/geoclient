import { updateSession } from "@/lib/supabase/middleware";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    return await updateSession(request);
}

// Regex pattern to match all request paths except for:
// - _next/static (static files)
// - _next/image (image optimization files)
// - favicon.ico (favicon file)
// - Any file ending with svg, png, jpg, jpeg, gif, webp (static assets)
// This helps exclude static and image assets from middleware processing.
const EXCLUDE_STATIC_PATHS_REGEX =
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)";

export const config = {
    matcher: [EXCLUDE_STATIC_PATHS_REGEX],
};
