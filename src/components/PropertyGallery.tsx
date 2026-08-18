import Image from "next/image";

export default function PropertyGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [hero, ...rest] = images;
  const visibleRest = rest.slice(0, 4);
  const overflowCount = images.length - 1 - visibleRest.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[400px] md:h-[600px] rounded-xl overflow-hidden">
      <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
        <Image
          src={hero}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {visibleRest.map((image, index) => {
        const isLast = index === visibleRest.length - 1;
        return (
          <div key={image + index} className="hidden md:block relative group cursor-pointer">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {isLast && overflowCount > 0 && (
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-on-primary text-label-md font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined">grid_view</span>
                  View All {images.length} Photos
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
