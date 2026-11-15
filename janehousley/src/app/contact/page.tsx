import Image from "next/image";
import PageShell from "@components/PageShell";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
  return (
    <PageShell width="max-w-4xl">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-sm overflow-hidden">
          <Image
            src="/home/who-is-jane.jpg"
            alt="“Who is Jane Housley” spelled in rainbow letter stickers on a white wall"
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-light tracking-tight mb-4">Say hello</h1>
          <p className="text-muted leading-relaxed mb-8">
            I&apos;d love to hear from you. The best way to reach me is by email, or you can find me on LinkedIn.
          </p>
          <ul className="space-y-4">
            <li>
              <a href="mailto:janehousley@gmail.com" className="soft-button inline-flex items-center gap-3">
                <GoMail size={18} /> janehousley@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/janehousley"
                target="_blank"
                rel="noopener noreferrer"
                className="soft-button inline-flex items-center gap-3"
              >
                <CiLinkedin size={20} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
