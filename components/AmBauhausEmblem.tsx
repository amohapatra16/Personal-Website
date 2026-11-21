import Link from "next/link";
import Image from "next/image";

interface AmBauhausEmblemProps {
  size?: number;
  className?: string;
}

export default function AmBauhausEmblem({ size = 200, className = "" }: AmBauhausEmblemProps) {
  return (
    <Link
      href="/"
      className={`group relative block bg-[#333333] border border-black overflow-hidden shrink-0 transition-transform duration-200 active:scale-95 focus:outline-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Anisha Mohapatra — Return to home"
    >
      {/* Bauhaus quarter-circle silhouette */}
      <div className="absolute inset-[14%_5.5%_7.5%_9.5%] pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src="/assets/bauhaus-quarter-circle.svg"
          alt="Bauhaus silhouette"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Monogram AM */}
      <div className="absolute inset-[49.5%_18%_20.5%_17%] pointer-events-none transition-transform duration-300 group-hover:-translate-y-0.5">
        <Image
          src="/assets/monogram-am.svg"
          alt="AM Monogram"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
