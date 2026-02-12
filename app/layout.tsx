import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spartan = League_Spartan({ subsets: ["latin"], variable: "--font-spartan" });

export const metadata: Metadata = {
    title: "Gazala Group | Discovered, not promoted.",
    description: "A premium campaign-driven marketing agency. We build campaigns people discover organically through culture, influence, and distribution.",
};

import { StarryBackground } from "@/components/ui/StarryBackground";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(inter.variable, spartan.variable, "font-sans antialiased bg-background text-foreground selection:bg-black selection:text-white relative")}>
                <StarryBackground />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
