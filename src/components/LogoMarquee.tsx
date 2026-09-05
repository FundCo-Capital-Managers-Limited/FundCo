import Image from "next/image";

export type MarqueeLogo = {
  name: string;
  src: string;
  href: string;
};

export default function LogoMarquee({ logos }: { logos: MarqueeLogo[] }) {
  const track = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 sm:gap-16">
        {track.map((logo, i) => (
          <a
            key={`${logo.name}-${i}`}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-32 sm:h-16 sm:w-40 shrink-0 items-center justify-center grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            aria-label={logo.name}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={56}
              className="h-full w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
