import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/sections/CtaSection";

export default function ClientsPagePlaceholder() {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', color: '#fff', textAlign: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#bdb595' }}>Under Construction</h1>
                    <p>This clients page is currently under development. Please check back soon!</p>
                </div>
            </main>
            <CtaSection />
            <Footer />
        </>
    );
}
