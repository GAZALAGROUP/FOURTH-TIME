import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <ServicesSection />
            <PortfolioGrid />
            <Footer />
        </main>
    );
}
