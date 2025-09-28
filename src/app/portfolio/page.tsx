import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Marquee from "react-fast-marquee";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Portfolio() {
  const photos = [
    { src: "/cover/LatinxFashionCover.png", alt: "Latinx Fashion Cover" },
    { src: "/cover/GravitiFitnessCover.jpg", alt: "Graviti Fitness Cover" },
    { src: "/cover/ZotfestCover.jpg", alt: "Zotfest Cover" },
    { src: "/cover/DreamBoyCover.png", alt: "DreamBoys Cover" },
    { src: "/cover/EcholaliaDreams.jpg", alt: "Echolalia Dreams Cover" },
    {
      src: "/cover/Fashion&SneakersCover.jpg",
      alt: "Fashion & Sneakers Cover",
    },
    { src: "/cover/LeyMusicVideoCover.jpg", alt: "Ley Music Video Cover" },
    {
      src: "/cover/EcholaliaDreamsSetCover.jpg",
      alt: "Echolalia Dreams Set Cover",
    },
    {
      src: "/cover/GraduationWithKimCover.jpg",
      alt: "Graduation With Kim Cover",
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 mx-auto">
        {photos.map((photo) => (
          <Dialog key={photo.src}>
            <DialogTrigger key={photo.src} className="cursor-pointer">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={750}
                height={750}
                quality={80}
                key={photo.src}
              ></Image>
            </DialogTrigger>
            <DialogContent className="sm:max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {photo.alt}
                </DialogTitle>
              </DialogHeader>
              
                <Carousel className="w-full flex items-center justify-center">
                  <CarouselContent>
                    {photos.map((photo) => (
                      <CarouselItem key={photo.src} className="flex items-center justify-center">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={750}
                          height={750}
                          quality={80}
                        ></Image>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                    <CarouselPrevious className="ml-8"/>
                    <CarouselNext className="mr-8"/>
                  
                </Carousel>
              
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}
