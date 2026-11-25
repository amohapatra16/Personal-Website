import Image from "next/image";

const aboutPhotos = [
  {
    src: "/assets/about/portrait-family.png",
    alt: "People together at a gathering",
    width: 137,
    height: 140,
  },
  {
    src: "/assets/about/portrait-coffee.png",
    alt: "Anisha holding takeaway cups while seated indoors",
    width: 136,
    height: 140,
  },
  {
    src: "/assets/about/city-sunset.png",
    alt: "City skyline at sunset beside the water",
    width: 136,
    height: 140,
  },
  {
    src: "/assets/about/street-cafe.png",
    alt: "A street cafe beneath older city buildings",
    width: 136,
    height: 140,
  },
];

export default function AboutPage() {
  return (
    <section className="relative w-full pb-24 lg:-mt-[13px] lg:min-h-[894px]">
      <div className="space-y-4 max-w-2xl lg:absolute lg:left-0 lg:top-[13px]">
        <span className="text-[9px] uppercase tracking-[1.6px] font-['Inter',sans-serif] text-[#a6290d] font-semibold">
          INDEX / 01
        </span>
        <h1 className="font-['Archivo',sans-serif] font-black text-4xl sm:text-5xl text-[#261d11]">
          ABOUT
        </h1>
      </div>

      <div className="mt-8 max-w-[555px] font-['Archivo',sans-serif] text-[24px] font-semibold leading-[30px] text-black lg:absolute lg:left-[18px] lg:top-[109px] lg:mt-0 lg:h-[601px]">
        <p className="mb-[30px]">
          Strong opinions, loosely held. Scrappy. Curious.
        </p>
        <p className="mb-[30px]">
          I love seeing the mundane done well. Selvedge Denim. Za&apos;atar
          Croissants. Rotring pencils. Thoughtfully designed coffee lids.
        </p>
        <p className="mb-[30px]">
          In an age that prioritizes output over taste, I care deeply about
          craftsmanship. Experience is fundamentally shaped by the pillars of
          design and intentionality. I believe that speed should not be a
          trade-off. The work should be personal.
        </p>
        <p className="mb-[30px]">
          I’ve grown up across Toronto, Hyderabad, New Orleans and Montréal.
          This melded background came with natural lessons on adaption,
          narrative-building, and relentless tenacity.
        </p>
        <p>
          Currently, I’m based in San Francisco and working on some of the most
          interesting product problems in the identity space.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-8 lg:absolute lg:left-[710px] lg:top-[-11px] lg:mt-0 lg:h-[764px] lg:w-[140px] lg:justify-between">
        {aboutPhotos.map((photo) => (
          <figure
            key={photo.src}
            className="flex h-[137px] w-[140px] items-center justify-center"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="rotate-90"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
