import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Resume() {
    return (
        <main className="relative min-h-screen w-full bg-[url('/wallpaper2.jpg')] bg-cover bg-center overflow-hidden">
            {/* Header Navigation */}
            <Header />

            <div className="mt-32 mb-32 border rounded shadow overflow-hidden mx-auto" style={{ width: "clamp(300px, 90vw, 650px)", aspectRatio: "8.5 / 11" }}>
                <iframe
                    src="/Jane_Housley_Resume.pdf"
                    title="Jane Housley Resume"
                    className="w-full h-full"
                />

            </div>

            <Footer />
        </main>
    );
}

