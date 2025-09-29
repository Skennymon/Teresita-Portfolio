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

export default function DialogCustom({ src, alt, correspondingPhotos } : {src: string, alt: string, correspondingPhotos: {src: string, alt: string}[]}) {
    return (
        <Dialog>
            <DialogTrigger key={photo.src} className="cursor-pointer">
              <Image
                src={src}
                alt={alt}
                width={750}
                height={750}
                quality={80}
              ></Image>
            </DialogTrigger>
            <DialogContent className="sm:max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:max-h-full md:max-h-3xl lg:max-h-4xl xl:max-h-5xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {alt}
                </DialogTitle>
              </DialogHeader>

              <Carousel className="w-full flex items-center justify-center">
                <CarouselContent>
                  {correspondingPhotos.map((correspondingPhoto) => (
                    <CarouselItem
                      key={correspondingPhoto.src}
                      className="w-full flex items-center justify-center"
                      >
                        <Image src={correspondingPhoto.src} alt={correspondingPhoto.alt} width={1000} height={1000} quality={80}></Image>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-8" />
                <CarouselNext className="mr-8" />
              </Carousel>
            </DialogContent>
          </Dialog>
    )
}