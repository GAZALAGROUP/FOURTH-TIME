import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const services = [
    {
        title: "1. Brand & Growth Strategy",
        description: "We design the foundation that guides all marketing activity, including positioning, narrative development, and growth roadmaps. We ensure every client knows: Who they are, who they serve, and how they win.",
    },
    {
        title: "2. Content Production & Creative Direction",
        description: "We produce high-quality, platform-optimized content (Short-form video, Reels, TikTok, Storytelling) that performs—not content that just looks good.",
    },
    {
        title: "3. Influencer & Distribution Management",
        description: "We treat influencers as strategic assets. We handle sourcing, vetting, contract negotiation, and performance tracking to ensure reach and credibility.",
    },
    {
        title: "4. Digital Campaign Management",
        description: "We design and execute structured campaigns—from architecture to launch—that convert awareness into results.",
    },
    {
        title: "5. Social Media Growth & Community Building",
        description: "We help brands build loyal audiences, not just followers, through platform-specific growth strategies and brand voice development.",
    },
    {
        title: "6. Performance Tracking & Reporting",
        description: "We measure what matters. Clients receive monthly reports on engagement, reach, conversion tracking, and ROI assessment.",
    },
    {
        title: "7. Partnership & Event-Based Marketing",
        description: "For selected clients, we design physical activations, pop-ups, and brand collaborations that turn brands into cultural touchpoints.",
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-32 pb-24 container mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Services.</h1>
                <p className="text-xl text-gray-600 max-w-2xl mb-16">
                    We don't sell hours. We sell outcomes, leverage, and long-term brand equity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
                    {services.map((service, index) => (
                        <div key={index} className="border-t border-gray-200 pt-8">
                            <span className="block text-sm font-medium text-gray-400 mb-4">0{index + 1}</span>
                            <h3 className="text-3xl font-serif font-medium mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
