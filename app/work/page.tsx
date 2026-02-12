import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export default function WorkPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-32 pb-16 container mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Work.</h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                    A selection of campaigns that defined categories and built lasting equity.
                </p>
            </div>
            <PortfolioGrid />
            <Footer />
        </main>
    );
}
