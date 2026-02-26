"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        id: "1",
        title: "The Yard Drive-In",
        category: "Event Activation & Influencer Strategy",
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=1600",
        link: "/work/the-yard",
    },
    {
        id: "2",
        title: "GGL Courses",
        category: "Digital Strategy & Education",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600",
        link: "/work/ggl-courses",
    },
    {
        id: "3",
        title: "Lumina Tech",
        category: "Product Launch",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600", // Placeholder
        link: "/work/lumina",
    },
    {
        id: "4",
        title: "The Cultured",
        category: "Media Partnership",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1600",
        link: "/work/cultured",
    },
    {
        id: "5",
        title: "Bahama Park",
        category: "Social Media Management",
        image: "https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&q=80&w=1600",
        link: "/work/bahama-park-abuja",
    }
];

export function PortfolioGrid() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Selected Work</h2>
                        <p className="text-gray-600">A curation of campaigns that moved the needle.</p>
                    </div>
                    <Link href="/work" className="hidden md:flex items-center gap-2 pb-1 border-b border-black text-sm font-medium hover:opacity-70 transition-opacity">
                        View All Projects <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link href={project.link} className="block">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-900 mb-6">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-2xl font-serif font-medium mb-1 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                        <span className="text-sm text-gray-400 uppercase tracking-wide">{project.category}</span>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center bg-black text-white">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden flex justify-center">
                    <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
