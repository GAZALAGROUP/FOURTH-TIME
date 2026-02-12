import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GGLCoursesCaseStudy() {
    return (
        <main className="min-h-screen bg-cream">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 container mx-auto px-6">
                <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Work
                </Link>

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">GGL Courses.</h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
                    How do you make an education brand discoverable, credible, and scalable without compromising professional integrity?
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-200 py-8 mb-16">
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Client</span>
                        <span className="text-lg font-medium">GGL Courses</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Industry</span>
                        <span className="text-lg font-medium">Education / Training</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Scope</span>
                        <span className="text-lg font-medium">Digital Strategy, Content Positioning</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Model</span>
                        <span className="text-lg font-medium">Retainer / Growth Support</span>
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
                            GGL Courses is a professional education platform focused on delivering structured, compliance-driven training. While the material was strong, the brand faced a familiar challenge: high-quality knowledge with limited visibility.
                        </p>
                        <p>
                            Gazala Group was engaged to reposition GGL Courses digitally and design a system that would make the brand discoverable, credible, and scalable without compromising its professional integrity.
                        </p>
                        <h3 className="text-2xl font-serif font-bold mt-12 mb-4">The Challenge</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Technical and compliance-heavy subject matter</li>
                            <li>Audience required trust, authority, and clarity</li>
                            <li>Low tolerance for flashy or over-promoted marketing</li>
                            <li>Need for sustainable growth rather than short-term hype</li>
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
                                    <h3 className="text-2xl font-serif font-bold mb-4">Authority-First Positioning</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Rather than aggressively selling courses, we positioned GGL as a reliable source of insight. We prioritized educational tone over promotional tone, using trust-building content as the primary focus.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-6xl font-serif opacity-20">02</span>
                                </div>
                                <div className="md:col-span-8">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Content as Proof, Not Promotion</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We designed content that demonstrated what GGL knows, instead of repeatedly stating what GGL offers. Short educational breakdowns and simplified explanations allowed credibility to compound organically.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-6xl font-serif opacity-20">03</span>
                                </div>
                                <div className="md:col-span-8">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Organic Distribution Over Paid Push</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Rather than leading with paid ads, we focused on platform-native short-form content and a consistent posting cadence adapted to platform-specific audience behavior.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="text-cream text-6xl font-serif opacity-20">04</span>
                                </div>
                                <div className="md:col-span-8">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Long-Term Growth System</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        The engagement was structured to go beyond a single campaign, establishing repeatable content frameworks and clear brand voice guidelines for sustained growth.
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
                            <li>Digital positioning and messaging framework</li>
                            <li>Content strategy and creative direction</li>
                            <li>Short-form educational content creation</li>
                            <li>Organic reach optimization</li>
                            <li>Performance monitoring and iteration</li>
                        </ul>
                        <p className="text-gray-600 mt-6 italic">Principle: Educate first, convert second.</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Results</h2>
                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-4">
                                <span className="block text-xl font-bold font-serif mb-1">Increased Visibility</span>
                                <span className="text-gray-600 block">Across social platforms</span>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <span className="block text-xl font-bold font-serif mb-1">Strong Engagement</span>
                                <span className="text-gray-600 block">On educational content</span>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <span className="block text-xl font-bold font-serif mb-1">Improved Credibility</span>
                                <span className="text-gray-600 block">Clearer audience understanding</span>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <span className="block text-xl font-bold font-serif mb-1">Solid Foundation</span>
                                <span className="text-gray-600 block">For future scaling</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Takeaway */}
                <div className="bg-gray-100 p-12 rounded-2xl text-center">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Key Takeaway</h3>
                    <p className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
                        "In professional education, credibility is non-negotiable."
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        This summary demonstrates our ability to build authority without over-promotion and grow education brands responsibly.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
