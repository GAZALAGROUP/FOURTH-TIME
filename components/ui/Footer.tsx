import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-transparent border-t border-gray-800 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-xl font-serif font-bold tracking-tight mb-4 block">
                            Gazala Group.
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Discovered, not promoted.
                            <br />
                            Campaign-first marketing.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-serif font-medium mb-4">Explore</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><Link href="/work" className="hover:text-black transition-colors">Work</Link></li>
                                <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
                                <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif font-medium mb-4">Connect</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><a href="mailto:hello@gazalagroup.com" className="hover:text-black transition-colors">Email</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="md:col-span-1">
                        <h4 className="font-serif font-medium mb-4">Ready strictly for business?</h4>
                        <Link
                            href="/contact"
                            className="inline-block border border-gray-700 px-6 py-2 rounded-full text-sm hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} Gazala Group. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-600">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
