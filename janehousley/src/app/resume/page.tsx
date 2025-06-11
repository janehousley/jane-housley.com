import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Resume() {
    return (
        <main className="relative min-h-screen w-full bg-[url('/wallpaper2.jpg')] bg-cover bg-center overflow-hidden">
            {/* Header Navigation */}
            <Header />

            <div className="flex flex-col items-center px-4">  {/* add some side padding */}
                <iframe
                    src="/Jane_Housley_Resume.pdf"
                    title="Jane Housley Resume"
                    className="mt-32 mb-32 w-full max-w-[650px] aspect-[8.5/11] border rounded shadow"
                />
            </div>


            <Footer />
        </main>
    );
}

