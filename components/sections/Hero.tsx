"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-0 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-sm md:text-base font-medium tracking-[0.2em] text-gray-400 uppercase mb-6">
                            Strategic Growth & Brand Equity
                        </h2>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-black leading-[1.1] mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Discovered, <br className="hidden md:block" />
                        <span className="italic font-light">not promoted.</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        We build campaigns that people find organically through culture, influence, and strategic distribution. No shouting, just signal.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    >
                        <Link
                            href="/work"
                            className="group flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300"
                        >
                            View Selected Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 bg-transparent border border-gray-300 text-black px-8 py-4 rounded-full font-medium hover:border-black transition-all duration-300"
                        >
                            Book a Strategy Call
                        </Link>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
