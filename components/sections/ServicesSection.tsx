"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Campaign Strategy & Brand Positioning",
        description: "We define who you are and why you matter. Then we build the roadmap to make sure everyone else knows it too.",
    },
    {
        title: "Content Systems & Distribution",
        description: "Content is useless without distribution. We build engines that produce high-quality assets and ensure they reach the right eyes.",
    },
    {
        title: "Influencer & Tastemaker Management",
        description: "We don't just pay for posts. We build relationships with culture-shapers who align with your brand's ethos.",
    },
];

export function ServicesSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Header */}
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                            We build leverage, not just noise.
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-sm">
                            Our approach is rooted in long-term equity. We help you build a brand that commands attention without screaming for it.
                        </p>
                        <Link
                            href="/services"
                            className="hidden lg:inline-flex items-center gap-2 font-medium border-b border-white pb-1 hover:opacity-70 transition-opacity"
                        >
                            Explore Capabilities <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* List */}
                    <div className="lg:col-span-8 space-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border-t border-gray-800 pt-8 group"
                            >
                                <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-gray-300 transition-colors">{service.title}</h3>
                                <p className="text-gray-400 max-w-2xl leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}

                        <div className="lg:hidden mt-8">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 font-medium border-b border-white pb-1 hover:opacity-70 transition-opacity"
                            >
                                Explore Capabilities <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
