interface CarouselSlideProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function CarouselSlide({
  imageUrl,
  title,
  description,
}: CarouselSlideProps) {
  return (
    <div className="relative h-full w-full">
      <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
