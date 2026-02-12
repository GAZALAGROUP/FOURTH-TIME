import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-12">Who We Are.</h1>

                    <div className="prose prose-lg prose-gray max-w-none mb-16">
                        <p className="text-2xl font-serif leading-relaxed text-black mb-8">
                            Gazala Group is a growth and brand strategy company based in Abuja, Nigeria, focused on helping lifestyle, hospitality, education, and culture-driven businesses build visibility, credibility, and consistent revenue through modern digital systems.
                        </p>
                        <p className="mb-6">
                            We operate at the intersection of content, influence, and strategy, translating brand identity into measurable growth. Rather than running short-term promotions, we build long-term marketing infrastructure that allows businesses to attract customers organically, scale sustainably, and remain culturally relevant.
                        </p>
                    </div>

                    <div className="border-t border-gray-200 py-16">
                        <h2 className="text-3xl font-serif font-bold mb-8">Core Positioning</h2>
                        <ul className="space-y-4 text-lg text-gray-700">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                Look premium
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                Stay visible
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                Convert attention into revenue
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                Build long-term relevance
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                Compete in modern digital markets
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-gray-200 py-16">
                        <h2 className="text-3xl font-serif font-bold mb-8">The Gazala Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold mb-2 text-xl">Local Intelligence</h4>
                                <p className="text-gray-600">Deep understanding of Abuja’s culture and consumer behavior.</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-xl">System Thinking</h4>
                                <p className="text-gray-600">We build repeatable systems, not one-off stunts.</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-xl">Execution Speed</h4>
                                <p className="text-gray-600">We move fast without sacrificing quality.</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2 text-xl">Partnership Mentality</h4>
                                <p className="text-gray-600">We integrate into your operations to grow with you.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 py-16">
                        <h2 className="text-3xl font-serif font-bold mb-8">Philosophy</h2>
                        <div className="bg-cream/50 p-8 rounded-2xl border border-gray-100">
                            <ul className="space-y-6 text-xl font-serif text-black">
                                <li>"Visibility without credibility is useless."</li>
                                <li>"Attention without conversion is wasteful."</li>
                                <li>"Marketing without strategy is gambling."</li>
                                <li>"Brands are built through consistency, not stunts."</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-16">
                        <h2 className="text-3xl font-serif font-bold mb-6">About Us</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Gazala Group is an Abuja-based growth and brand strategy company helping lifestyle, hospitality, and knowledge-driven businesses build visibility, credibility, and consistent revenue through content, influencer management, and digital systems. We specialize in long-term brand development, combining creative execution with data-driven strategy to position our clients for sustainable growth. Gazala Group operates as a strategic partner, not just a service provider, focusing on results, relevance, and long-term value.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
