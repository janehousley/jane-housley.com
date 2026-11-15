import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@components/navLinks";

/*
 * The photo is 3:4. This frame keeps that ratio and always covers the screen,
 * so the links below can be placed in the photo's own coordinates and stay
 * just under the "WHO IS JANE HOUSLEY" stickers on any screen size.
 *   - width: at least the screen width, and wide enough to be as tall as the screen
 *   - left/top: which part of the photo shows when it's cropped (30% across, 62% down)
 */
const PHOTO_WIDTH = "max(100vw, 75svh)";

export default function Home() {
  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-wall">
      <h1 className="sr-only">Jane Housley</h1>

      <div
        className="absolute"
        style={{
          width: PHOTO_WIDTH,
          aspectRatio: "3 / 4",
          left: `calc((100vw - ${PHOTO_WIDTH}) * 0.3)`,
          top: `calc((100svh - ${PHOTO_WIDTH} * 4 / 3) * 0.62)`,
        }}
      >
        <Image
          src="/home/home-plant.jpg"
          alt="“Who is Jane Housley” spelled in rainbow letter stickers on a white wall, next to a potted plant on a mantel"
          fill
          priority
          sizes="(orientation: portrait) 75vh, 100vw"
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
