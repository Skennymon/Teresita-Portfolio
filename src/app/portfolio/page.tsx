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
    {
      src: "/cover/LatinxFashionCover.png",
      alt: "Latinx Fashion Cover",
      correspondingPhotos: [
        {
          src: "/LatinxFashionPhotos/page1.png",
          alt: "Latinx Fashion Cover Photo 1",
        },
        {
          src: "/LatinxFashionPhotos/page2.png",
          alt: "Latinx Fashion Cover Photo 2",
        },
        {
          src: "/LatinxFashionPhotos/page3.png",
          alt: "Latinx Fashion Cover Photo 3",
        },
        {
          src: "/LatinxFashionPhotos/page4.png",
          alt: "Latinx Fashion Cover Photo 4",
        },
        {
          src: "/LatinxFashionPhotos/page5.png",
          alt: "Latinx Fashion Cover Photo 5",
        },
        {
          src: "/LatinxFashionPhotos/page6.png",
          alt: "Latinx Fashion Cover Photo 6",
        },
        {
          src: "/LatinxFashionPhotos/page7.png",
          alt: "Latinx Fashion Cover Photo 7",
        },
        {
          src: "/LatinxFashionPhotos/page8.png",
          alt: "Latinx Fashion Cover Photo 8",
        },
        {
          src: "/LatinxFashionPhotos/page9.png",
          alt: "Latinx Fashion Cover Photo 9",
        },
        {
          src: "/LatinxFashionPhotos/page10.png",
          alt: "Latinx Fashion Cover Photo 10",
        },
        {
          src: "/LatinxFashionPhotos/page11.png",
          alt: "Latinx Fashion Cover Photo 11",
        },
        {
          src: "/LatinxFashionPhotos/page12.png",
          alt: "Latinx Fashion Cover Photo 12",
        },
        {
          src: "/LatinxFashionPhotos/page13.png",
          alt: "Latinx Fashion Cover Photo 13",
        },
        {
          src: "/LatinxFashionPhotos/page14.png",
          alt: "Latinx Fashion Cover Photo 14",
        },
        {
          src: "/LatinxFashionPhotos/page15.png",
          alt: "Latinx Fashion Cover Photo 15",
        },
        {
          src: "/LatinxFashionPhotos/page16.png",
          alt: "Latinx Fashion Cover Photo 16",
        },
        {
          src: "/LatinxFashionPhotos/page17.png",
          alt: "Latinx Fashion Cover Photo 17",
        },
      ],
    },
    {
      src: "/cover/GravitiFitnessCover.jpg",
      alt: "Graviti Fitness Cover",
      correspondingPhotos: [{ src: "/LatinxFashionPhotos/page16.png", alt: "Alt" }],
    },
    {
      src: "/cover/ZotfestCover.jpg",
      alt: "Zotfest Cover",
      correspondingPhotos: [],
    },
    {
      src: "/cover/DreamBoyCover.png",
      alt: "DreamBoys Cover",
      correspondingPhotos: [],
    },
    {
      src: "/cover/EcholaliaDreams.jpg",
      alt: "Echolalia Dreams Cover",
      correspondingPhotos: [],
    },
    {
      src: "/cover/Fashion&SneakersCover.jpg",
      alt: "Fashion & Sneakers Cover",
      correspondingPhotos: [],
    },
    {
      src: "/cover/LeyMusicVideoCover.jpg",
      alt: "Ley Music Video Cover",
      correspondingPhotos: [],
    },
    {
      src: "/cover/EcholaliaDreamsSetCover.jpg",
      alt: "Echolalia Dreams Set Cover",
      correspondingPhotos: [],
    },
    {
      src: "/cover/GraduationWithKimCover.jpg",
      alt: "Graduation With Kim Cover",
      correspondingPhotos: [],
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
            <DialogContent className="sm:max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:max-h-full md:max-h-3xl lg:max-h-4xl xl:max-h-5xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {photo.alt}
                </DialogTitle>
              </DialogHeader>

              <Carousel className="w-full flex items-center justify-center">
                <CarouselContent>
                  {photo.correspondingPhotos.map((correspondingPhoto) => (
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
        ))}
      </div>
    </>
  );
}
