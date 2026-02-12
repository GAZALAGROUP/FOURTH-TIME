"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert("Thank you for your interest. We will be in touch shortly.");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-400 text-black"
                        placeholder="Jane Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                        Work Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-400 text-black"
                        placeholder="jane@company.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-900">
                    Company / Brand Website
                </label>
                <input
                    id="company"
                    type="text"
                    className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-400 text-black"
                    placeholder="https://company.com"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-gray-900">Estimated Budget (Monthly)</label>
                    <select
                        id="budget"
                        className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none text-gray-900"
                    >
                        <option value="" disabled selected>Select range</option>
                        <option value="5k-10k">$5k - $10k</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k+">$50k+</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium text-gray-900">Timeline</label>
                    <select
                        id="timeline"
                        className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none text-gray-900"
                    >
                        <option value="" disabled selected>When do you want to start?</option>
                        <option value="immediately">Immediately</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">1-3 months</option>
                        <option value="planning">Just planning</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-900">
                    Goals & Introduction
                </label>
                <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-gray-400 resize-none text-black"
                    placeholder="Tell us about your brand and what you hope to achieve..."
                />
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={18} />
                            Sending...
                        </>
                    ) : (
                        "Submit Inquiry"
                    )}
                </button>
            </div>
        </form>
    );
}
