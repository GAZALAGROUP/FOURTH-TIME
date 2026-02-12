import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Start a Conversation.</h1>
                    <p className="text-xl text-gray-600 mb-16 max-w-2xl">
                        We work with a limited number of partners each year. Tell us about your brand, and let's see if we're a fit.
                    </p>

                    <ContactForm />
                </div>
            </div>
            <Footer />
        </main>
    );
}
