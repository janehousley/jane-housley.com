import Header from "@components/Header";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
    return (
        <main className="relative min-h-screen w-full bg-[url('/wallpaper2.jpg')] bg-cover bg-center overflow-hidden flex items-center justify-center">
            {/* Header Navigation */}
            <Header />
            <div className="flex flex-col">

                <div className="flex space-x-32">
                    {/* Email Icon */}
                    <a href="mailto:janehousley@gmail.com">
                        <GoMail size={96}/>
                    </a>

                    {/* LinkedIn Icon */}
                    <a
                        href="https://www.linkedin.com/in/janehousley"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CiLinkedin size={96}/>
                    </a>
                </div>
            </div>
        </main>
    );
}