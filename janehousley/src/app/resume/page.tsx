import Header from "@components/Header";

export default function Resume() {
    return (
        <main className="relative min-h-screen w-full bg-[url('/wallpaper2.jpg')] bg-cover bg-center overflow-hidden">
            {/* Header Navigation */}
            <Header />

            <div className="flex flex-col items-center">
                <iframe
                    src="/Jane_Housley_Resume.pdf"
                    title="Jane Housley Resume"
                    className="mt-32 mb-32 w-[650px] h-[900px] border rounded shadow"
                />
            </div>
        </main>
    );
}

