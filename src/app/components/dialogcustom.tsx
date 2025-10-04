import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
      <DialogContent className="bg-transparent border-none w-[100dvh] max-[321px]:max-w-fit max-h-[100dvh]">
        <div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{alt}</DialogTitle>
          </DialogHeader>
        </div>

        <Carousel className="w-auto h-auto flex items-center justify-center">
          <CarouselContent>
            {correspondingPhotos.map((correspondingPhoto) => (
              <CarouselItem
                key={correspondingPhoto.src}
                className="w-auto h-auto flex items-center justify-center"
              >
                <Image
                  src={correspondingPhoto.src}
                  alt={correspondingPhoto.alt}
                  width={1000}
                  height={1000}
                ></Image>
              </CarouselItem>
            ))}
            {correspondingVideos.map((correspondingVideo) => (
              <CarouselItem className="w-auto h-auto flex items-center justify-center" key={correspondingVideo.src}>
                  <iframe
                    key={correspondingVideo.src}
                    className="md:w-[450px] md:h-[450px]"
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
