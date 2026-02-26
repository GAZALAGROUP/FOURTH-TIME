import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BahamaParkCaseStudy() {
    return (
        <main className="min-h-screen bg-cream">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 container mx-auto px-6">
                <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Work
                </Link>

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Bahama Park.</h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
                    A full social media growth partnership to increase visibility, engagement, and customer traffic across Bahama Park's diverse businesses.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-200 py-8 mb-16">
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Client</span>
                        <span className="text-lg font-medium">Bahama Park Abuja</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Industry</span>
                        <span className="text-lg font-medium">Hospitality / Services</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Scope</span>
                        <span className="text-lg font-medium">Social Media Management</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Model</span>
                        <span className="text-lg font-medium">Full Growth Partner</span>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-24">
                    <Image
                        src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&q=80&w=2000"
                        alt="Bahama Park Abuja Overview"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            </section>

            {/* Overview & Deliverables */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-serif font-bold mb-6 sticky top-32">The Mandate</h2>
                    </div>
                    <div className="md:col-span-8 prose prose-lg prose-gray max-w-none">
                        <p className="text-xl text-black leading-relaxed font-medium mb-8">
                            Gazala Group was brought on to serve as a full social media growth partner, responsible for increasing visibility, engagement, and customer traffic across all of Bahama Park's business platforms.
                        </p>

                        <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Weekly Deliverables</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>4–5 high-quality posts per week for each business</li>
                            <li>2–3 reels weekly focused on lifestyle, promotions, and customer appeal</li>
                            <li>Daily Instagram story updates (offers, behind-the-scenes, engagement content)</li>
                            <li>Caption writing, hashtag strategy, and content scheduling</li>
                            <li>Influencer sourcing and coordination for promotional campaigns</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Strategy Per Business */}
            <section className="bg-black text-white py-24 mb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">Business Unit Strategy</h2>

                        <div className="space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-4xl font-serif opacity-50">Kaiju Fish</span>
                                </div>
                                <div className="md:col-span-8">
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        Focus on freshness, seafood preparation process, food cravings content, and daily availability updates to attract walk-in customers.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-4xl font-serif opacity-50">Kaiju Restaurant</span>
                                </div>
                                <div className="md:col-span-8">
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        Highlight ambience, meals, customer experiences, lifestyle dining content, and special menu promotions to build destination appeal.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-4xl font-serif opacity-50">Car Stand/Wash</span>
                                </div>
                                <div className="md:col-span-8">
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        Emphasize before-and-after transformations, speed, convenience, customer satisfaction, and service reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth & Management */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Customer Growth Approach</h2>
                        <ul className="list-disc pl-5 space-y-4 text-gray-700">
                            <li>Influencer collaborations to drive awareness and foot traffic</li>
                            <li>Promotional campaigns, giveaways, and discount announcements</li>
                            <li>Location tagging and Google visibility optimization</li>
                            <li>Seasonal marketing campaigns and event-based promotions</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Community Management</h2>
                        <ul className="list-disc pl-5 space-y-4 text-gray-700 mb-8">
                            <li>Daily response to comments and direct messages</li>
                            <li>Customer engagement through polls, questions, and interactive stories</li>
                            <li>Reposting customer content and testimonials to build trust and loyalty</li>
                        </ul>

                        <h2 className="text-3xl font-serif font-bold mb-6">Monthly Reporting</h2>
                        <ul className="list-disc pl-5 space-y-4 text-gray-700">
                            <li>Performance analytics and growth tracking</li>
                            <li>Engagement insights and audience behavior analysis</li>
                            <li>Content performance evaluation</li>
                            <li>Strategic recommendations for continuous improvement</li>
                        </ul>
                    </div>
                </div>

                {/* Key Takeaway */}
                <div className="bg-gray-100 p-12 rounded-2xl text-center">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Gazala Group's Core Role</h3>
                    <p className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
                        "Driving unified growth across distinct business verticals."
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Through tailored strategies for each outlet, comprehensive community management, and data-driven iteration, we established Bahama Park as a premier destination in Abuja.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
