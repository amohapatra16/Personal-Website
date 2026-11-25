import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full max-w-[768px] lg:h-[684px] [@media(max-height:900px)]:lg:-translate-y-10 [@media(max-height:800px)]:lg:-translate-y-20">
      <h1 className="font-['Archivo',sans-serif] font-black text-[clamp(1.9rem,5vw,3.75rem)] leading-none tracking-tight text-[#261d11]">
        ANISHA MOHAPATRA
      </h1>

      <p className="mt-[18px] font-['Archivo',sans-serif] font-bold text-[clamp(1.25rem,2vw,1.5rem)] leading-[30px] text-[#261d11]">
        Interested in building beautiful & timeless products.
      </p>

      <div className="relative mt-[83px] aspect-[769/478] w-full lg:absolute lg:left-0 lg:top-[206px] lg:mt-0">
        <div className="absolute left-[6.8%] top-0 z-10 h-full w-[61.5%] border-[3px] border-black bg-[#a6290d]" />

        <div className="absolute left-[15.1%] top-[13.4%] z-30 h-[73.2%] w-[63%] overflow-hidden border-[3px] border-black bg-white">
          <Image
            src="/images/home-portrait.jpg"
            alt="Anisha Mohapatra at the coast"
            fill
            priority
            sizes="(max-width: 1023px) 63vw, 484px"
            className="object-cover"
          />
        </div>

        <div className="absolute left-[69.96%] top-[-6.28%] z-20 h-[100.2%] w-[10.4%] border-[3px] border-black bg-[#f2b705]" />

        <div className="absolute left-[82.05%] top-[16.3%] z-20 h-[56.1%] w-[9.75%] border-[3px] border-black bg-[#333333]" />

        <div className="absolute left-[93.5%] top-[38.9%] z-20 h-[10.46%] w-[6.5%] border-[3px] border-black bg-[#2f80ed]" />
      </div>
    </div>
  );
}
