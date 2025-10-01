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

export default function DialogCustom({
  src,
  alt,
  correspondingPhotos,
  correspondingVideos,
}: {
  src: string;
  alt: string;
  correspondingPhotos: { src: string; alt: string }[];
  correspondingVideos: { src: string; alt: string }[];
}) {
  return (
    <Dialog>
      <DialogTrigger
        key={src}
        className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={900}
          quality={80}
          className="transition duration 300 ease-in-out hover:-translate-y-1 hover:scale-100"
        ></Image>
      </DialogTrigger>
      <DialogContent className="h-auto w-auto bg-transparent border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{alt}</DialogTitle>
        </DialogHeader>

        <Carousel className="w-auto h-auto flex items-center justify-center">
          <CarouselContent>
            {correspondingPhotos.map((correspondingPhoto) => (
              <CarouselItem
                key={correspondingPhoto.src}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src={correspondingPhoto.src}
                  alt={correspondingPhoto.alt}
                  width={400}
                  height={225}
                ></Image>
              </CarouselItem>
            ))}
            {correspondingVideos.map((correspondingVideo) => (
              <CarouselItem className="w-aut h-auto flex items-center justify-center" key={correspondingVideo.src}>
                <iframe
                  key={correspondingVideo.src}
                  width={450}
                  height={300}
                  src={correspondingVideo.src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-8" />
          <CarouselNext className="mr-8" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
