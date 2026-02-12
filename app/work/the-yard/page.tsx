import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TheYardCaseStudy() {
    return (
        <main className="min-h-screen bg-cream">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 container mx-auto px-6">
                <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Work
                </Link>

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">The Yard Drive-In.</h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
                    How do you make an event feel discovered rather than advertised — and still fill the venue?
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-200 py-8 mb-16">
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Client</span>
                        <span className="text-lg font-medium">The Yard Drive-In Cinema</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Industry</span>
                        <span className="text-lg font-medium">Events / Lifestyle</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Duration</span>
                        <span className="text-lg font-medium">10 Days</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Scope</span>
                        <span className="text-lg font-medium">Campaign Strategy, Influencer Marketing</span>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-24">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="sr-only">Campaign Hero Image</span>
                        <div className="text-center">
                            <p className="text-sm">Main Campaign Visual</p>
                            <p className="text-xs text-gray-400 mt-1">(Add actual image here)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview & Challenge */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-serif font-bold mb-6 sticky top-32">The Brief</h2>
                    </div>
                    <div className="md:col-span-8 prose prose-lg prose-gray max-w-none">
                        <p className="text-xl text-black leading-relaxed font-medium mb-8">
                            The Yard Drive-In was a short-notice event activation that required rapid visibility, cultural relevance, and real-world turnout — without relying on heavy paid promotion or obvious advertising.
                        </p>
                        <p>
                            Gazala Group was brought in to design and execute a 10-day organic marketing campaign capable of generating attention, excitement, and attendance within a limited timeframe.
                        </p>
                        <h3 className="text-2xl font-serif font-bold mt-12 mb-4">The Challenge</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Extremely short campaign window (10 days)</li>
                            <li>No appetite for traditional or “over-promoted” advertising</li>
                            <li>Target audience was young, social, and ad-averse</li>
                            <li>Success depended on actual turnout, not just online impressions</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Strategy */}
            <section className="bg-black text-white py-24 mb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">The Strategy</h2>

                        <div className="space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-6xl font-serif opacity-20">01</span>
                                </div>
                                <div className="md:col-span-8">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Influencer-First, Brand-Second</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We activated influencers within our network to create content from their personal perspective, not branded scripts. No forced captions. No hard CTAs. Each creator posted as if they had found something interesting — not been paid to promote it.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-6xl font-serif opacity-20">02</span>
                                </div>
                                <div className="md:col-span-8">
                                    <h3 className="text-2xl font-serif font-bold mb-4">"Sopso" Distribution (Intentional Soft Promotion)</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        The content was deliberately subtle (“sopso”): Natural filming styles, casual language, lifestyle framing, and minimal branding. This made the content feel native to the platforms rather than intrusive.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-6xl font-serif opacity-20">03</span>
                                </div>
                                <div className="md:col-span-8">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Trend Creation Over Repetition</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Rather than repeating one promo idea, we introduced a simple, replicable content angle that creators could interpret freely. This resulted in a recognizable content pattern and organic audience participation. The trend itself went on to accumulate 10–15 million views beyond the core campaign.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-6xl font-serif opacity-20">04</span>
                                </div>
                                <div className="md:col-span-8">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Volume Through Leverage</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Because Gazala Group already had access to creators internally, we were able to deploy multiple creators quickly and maintain consistency in tone without heavy costs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Execution & Results */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Execution</h2>
                        <ul className="list-disc pl-5 space-y-4 text-gray-700">
                            <li>Multiple influencers deployed simultaneously</li>
                            <li>Short-form video content across Instagram Reels and TikTok</li>
                            <li>High posting frequency within a short window</li>
                            <li>Continuous monitoring to amplify high-performing content</li>
                        </ul>
                        <p className="text-gray-600 mt-6 italic">The campaign was executed with speed, restraint, and coordination.</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Results</h2>
                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-4">
                                <span className="block text-4xl font-bold font-serif mb-1">~2M</span>
                                <span className="text-gray-600">Influence Content Views</span>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <span className="block text-4xl font-bold font-serif mb-1">10-15M</span>
                                <span className="text-gray-600">Additional Trend Views</span>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <span className="block text-4xl font-bold font-serif mb-1">200+</span>
                                <span className="text-gray-600">Attendees at Event</span>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <span className="block text-4xl font-bold font-serif mb-1">0</span>
                                <span className="text-gray-600">Reliance on Heavy Paid Adveritsing</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Takeaway */}
                <div className="bg-gray-100 p-12 rounded-2xl text-center">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Key Takeaway</h3>
                    <p className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
                        "Visibility doesn’t come from shouting louder. It comes from being placed correctly."
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        This campaign demonstrates our ability to move fast, create organic momentum, and convert attention into attendance without obvious promotion.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
