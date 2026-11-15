import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@components/navLinks";

/*
 * The photo is 3:4. This frame keeps that ratio so the links below can be
 * placed in the photo's own coordinates and stay just under the
 * "WHO IS JANE HOUSLEY" stickers on any screen size.
 *   - width: tall enough to fill the screen height, or 72% of the screen width
 *     on wide screens (so more of the photo shows, i.e. "zoomed out")
 *   - left: on phones the photo is wider than the screen, so show the part
 *     30% across (keeps the stickers in view); on wide screens, center it
 *   - top: when the photo is taller than the screen, show the part 62% down
 */
const PHOTO_WIDTH = "max(75svh, 72vw)";
const EXTRA_WIDTH = `(100vw - ${PHOTO_WIDTH})`;

export default function Home() {
  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-wall">
      <h1 className="sr-only">Jane Housley</h1>

      {/* Soft, blurred copy of the photo fills any space beside it on wide screens */}
      <Image
        src="/home/home-plant.jpg"
        alt=""
        aria-hidden
        fill
        sizes="640px"
        quality={50}
        className="object-cover object-[50%_62%] blur-2xl scale-110 opacity-60"
      />

      <div
        className="absolute"
        style={{
          width: PHOTO_WIDTH,
          aspectRatio: "3 / 4",
          left: `calc(min(0px, ${EXTRA_WIDTH}) * 0.3 + max(0px, ${EXTRA_WIDTH}) * 0.5)`,
          top: `calc((100svh - ${PHOTO_WIDTH} * 4 / 3) * 0.62)`,
          maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        }}
      >
        <Image
          src="/home/home-plant.jpg"
          alt="“Who is Jane Housley” spelled in rainbow letter stickers on a white wall, next to a potted plant on a mantel"
          fill
          priority
          quality={90}
          sizes="(orientation: portrait) 75vh, 72vw"
        />

        {/* The answer to the question on the wall */}
        <nav className="absolute left-[19.5%] top-[51.5%]" aria-label="Main">
          <ul className="flex flex-col gap-2 md:gap-3 text-[13px] md:text-[15px] uppercase tracking-[0.2em]">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="rainbow-link home-link font-medium">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
