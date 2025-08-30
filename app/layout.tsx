import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils/cn";
import QueryProvider from "@/components/query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { GeoHeader } from "@/components/ui/geo-header";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeoClient – Smart CRM for Field Sales",
  description: "GeoClient is a modern CRM web application designed for field and local business salespeople, with a special focus on sellers in the U.S. It simplifies client management, scheduling visits, and tracking follow-ups while integrating map-based location saving and automatic route creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          interSans.variable,
          robotoMono.variable,
          "min-h-screen grid content-start antialiased"
        )}
        suppressHydrationWarning
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="g-container grid-rows-[auto_1fr] min-h-screen">
              <GeoHeader />
              <section className="col-span-full py-10">
                <div className="min-h-full flex flex-col gap-10 w-container">
                  {children}
                </div>
              </section>
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
