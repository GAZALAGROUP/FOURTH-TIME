import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import Link from "next/link";
import { Check } from "lucide-react";

const tiers = [
    {
        name: "FOUNDATION",
        price: "₦300,000 / MONTH",
        description: "For brands that need a strategic reset and consistent market presence.",
        features: [
            "Campaign direction",
            "Strategic narrative",
            "4–6 short-form videos",
            "Influencer coordination",
            "Multi-platform guidance"
        ]
    },
    {
        name: "PREMIUM",
        price: "₦500,000 / MONTH",
        description: "For brands ready to scale influence and dominate their category.",
        features: [
            "Full strategy ownership",
            "8–12 short-form videos",
            "2 influencers (micro + mid)",
            "Distribution strategy",
            "Community seeding",
            "Performance optimization"
        ]
    },
    {
        name: "ELITE",
        price: "₦700,000 – ₦800,000",
        description: "Full-service partnership. We become your de facto CMO and growth team.",
        features: [
            "End-to-end campaign ownership",
            "12–20 content pieces",
            "Multiple influencers & tastemakers",
            "Event & offline integration",
            "Brand partnerships",
            "PR narrative"
        ]
    }
];

export default function PackagesPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-32 pb-24 container mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Engagement Models.</h1>
                <p className="text-xl text-gray-600 max-w-2xl mb-16">
                    We prioritize fit over volume. We only work with partners where we know we can drive exponential value.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div key={index} className="border border-gray-200 p-8 rounded-lg hover:border-black transition-colors duration-300 flex flex-col">
                            <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                            <div className="text-lg font-medium text-black mb-4">{tier.price}</div>
                            <p className="text-gray-600 mb-8 min-h-[60px]">{tier.description}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                        <Check size={18} className="mt-0.5 text-black" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className="block w-full text-center border border-black py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                            >
                                Inquire for Pricing
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-serif font-bold mb-4">Not sure where you fit?</h3>
                    <p className="text-gray-600 mb-8">
                        We also offer bespoke project-based engagements for product launches, rebrands, and specific campaigns.
                    </p>
                    <Link href="/contact" className="text-black border-b border-black pb-1 hover:opacity-70 transition-opacity">
                        Discuss a Custom Project
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
