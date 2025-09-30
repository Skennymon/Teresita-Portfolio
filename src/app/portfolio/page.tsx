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
import DialogCustom from "../components/dialogcustom";

export default function Portfolio() {
  const photos = [
    {
      src: "/cover/LatinxFashionCover.png",
      alt: "Latinx Fashion Cover",
      correspondingPhotos: [
        {
          src: "/cover/LatinxFashionCover.png",
          alt: "Latinx Fashion Cover Photo",
        },
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
      correspondingVideos: [],
    },
    {
      src: "/cover/GravitiFitnessCover.jpg",
      alt: "Graviti Fitness Cover",
      correspondingPhotos: [
        { src: "/cover/GravitiFitnessCover.jpg", alt: "Alt" },
        { src: "/Graviti/Graviti1.jpg", alt: "Analytics" },
        { src: "/Graviti/Graviti2.jpg", alt: "Analytics" },
        { src: "/Graviti/Graviti3.jpg", alt: "Picture Cookies" },
        { src: "/Graviti/Graviti4.jpg", alt: "More Cookies" },
      ],
      correspondingVideos: [],
    },
    {
      src: "/cover/ZotfestCover.jpg",
      alt: "Zotfest Cover",
      correspondingPhotos: [
        { src: "/cover/ZotfestCover.jpg", alt: "Zotfest Cover Photo" },
        { src: "/Zotfest/3.png", alt: "Zotfest Photo 1" },
        { src: "/Zotfest/4.png", alt: "Zotfest Photo 2" },
        { src: "/Zotfest/5.png", alt: "Zotfest Photo 3" },
        { src: "/Zotfest/6.png", alt: "Zotfest Photo 4" },
        { src: "/Zotfest/7.png", alt: "Zotfest Photo 5" },
        { src: "/Zotfest/8.png", alt: "Zotfest Photo 6" },
        { src: "/Zotfest/9.png", alt: "Zotfest Photo 7" },
        { src: "/Zotfest/10.png", alt: "Zotfest Photo 8" },
        { src: "/Zotfest/11.png", alt: "Zotfest Photo 9" },
        { src: "/Zotfest/12.png", alt: "Zotfest Photo 10" },
        { src: "/Zotfest/13.png", alt: "Zotfest Photo 11" },
        { src: "/Zotfest/14.png", alt: "Zotfest Photo 12" },
      ],
      correspondingVideos: [],
    },
    {
      src: "/cover/DreamBoyCover.png",
      alt: "DreamBoys Cover",
      correspondingPhotos: [],
      correspondingVideos: [
        {
          src: "https://www.youtube.com/embed/_UKBQHI-Mi8?si=Q649Msw2NtSiuIVn",
          alt: "DreamBoys Video",
        },
      ],
    },
    {
      src: "/cover/EcholaliaDreams.jpg",
      alt: "Echolalia Dreams Cover",
      correspondingPhotos: [],
      correspondingVideos: [
        {
          src: "https://www.youtube.com/embed/S8RgGivJj-M?si=xQKm9VDtYmsVyGs-",
          alt: "Echolalia Dreams Video",
        },
      ],
    },
    {
      src: "/cover/Fashion&SneakersCover.jpg",
      alt: "Fashion & Sneakers Cover",
      correspondingPhotos: [
        {
          src: "/cover/Fashion&SneakersCover.jpg",
          alt: "Fashion & Sneakers Cover Photo",
        },
        {
          src: "/Fashion&Sneakers/Fashion&Sneakers1.jpg",
          alt: "Fashion & Sneakers Photo 1",
        },
        {
          src: "/Fashion&Sneakers/Fashion&Sneakers2.JPG",
          alt: "Fashion & Sneakers Photo 2",
        },
        {
          src: "/Fashion&Sneakers/Fashion&Sneakers3.JPG",
          alt: "Fashion & Sneakers Photo 3",
        },
      ],
      correspondingVideos: [],
    },
    {
      src: "/cover/LeyMusicVideoCover.jpg",
      alt: "Ley Music Video Cover",
      correspondingPhotos: [
        {
          src: "/cover/LeyMusicVideoCover.jpg",
          alt: "Ley Music Video Cover Photo",
        },
        { src: "/Ley/Ley1.jpg", alt: "Ley Music Video Photo 1" },
        { src: "/Ley/Ley2.jpg", alt: "Ley Music Video Photo 2" },
      ],
      correspondingVideos: [],
    },
    {
      src: "/cover/EcholaliaDreamsSetCover.jpg",
      alt: "Echolalia Dreams Set Cover",
      correspondingPhotos: [
        {
          src: "/cover/EcholaliaDreamsSetCover.jpg",
          alt: "Echolalia Dreams Set Cover Photo",
        },
        {
          src: "/Echolalia/Echolalia1.jpg",
          alt: "Echolalia Dreams Set Photo 1",
        },
        {
          src: "/Echolalia/Echolalia3.jpg",
          alt: "Echolalia Dreams Set Photo 2",
        },
      ],
      correspondingVideos: [],
    },
    {
      src: "/cover/GraduationWithKimCover.jpg",
      alt: "Graduation With Kim Cover",
      correspondingPhotos: [
        {
          src: "/cover/GraduationWithKimCover.jpg",
          alt: "Graduation With Kim Cover Photo",
        },
        {
          src: "/Graduation/grad1.jpg",
          alt: "Graduation With Kim Cover Photo 1",
        },
        {
          src: "/Graduation/grad2.jpg",
          alt: "Graduation With Kim Cover Photo 2",
        },
        {
          src: "/Graduation/grad3.jpg",
          alt: "Graduation With Kim Cover Photo 3",
        },
        {
          src: "/Graduation/grad4.jpg",
          alt: "Graduation With Kim Cover Photo 4",
        },
      ],
      correspondingVideos: [],
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 mx-auto xl:hidden">
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
                      <Image
                        src={correspondingPhoto.src}
                        alt={correspondingPhoto.alt}
                        width={500}
                        height={200}
                        quality={80}
                      ></Image>
                    </CarouselItem>
                  ))}
                  {photo.correspondingVideos.map((correspondingVideo) => (
                    <iframe
                      key={correspondingVideo.src}
                      width={950}
                      height={600}
                      src={correspondingVideo.src}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-8" />
                <CarouselNext className="mr-8" />
              </Carousel>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Large Screen View */}
      <div className="flex items-center justify-center">
        <div className="hidden xl:block relative h-dvh w-[1920px]">

          <h2 className="lg:text-7xl md:text-5xl text-2xl font-main bg-pink-300 rounded-lg p-2 text-black absolute z-5 left-[50%] border-white border">Creative Director</h2>
          <h2 className="lg:text-7xl md:text-5xl text-2xl font-main bg-pink-300 rounded-lg p-2 text-black absolute z-5 top-[65%] left-[25%] border-white border">Strategic Storyteller</h2>

          {/*Cien*/}
          <div className="absolute left-[0%] z-1">
            <DialogCustom
              src="/cover/LatinxFashionCover.png"
              alt="Latinx Fashion Cover"
              correspondingPhotos={[
                {
                  src: "/cover/LatinxFashionCover.png",
                  alt: "Latinx Fashion Cover Photo",
                },
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
              ]}
              correspondingVideos={[]}
            />
          </div>

          {/*Snacks*/}
          <div className="absolute left-[25%] top-[85%] z-3">
            <DialogCustom
              src="/cover/GravitiFitnessCover.jpg"
              alt="Graviti Fitness Cover"
              correspondingPhotos={[
                { src: "/cover/GravitiFitnessCover.jpg", alt: "Alt" },
                { src: "/Graviti/Graviti1.jpg", alt: "Analytics" },
                { src: "/Graviti/Graviti2.jpg", alt: "Analytics" },
                { src: "/Graviti/Graviti3.jpg", alt: "Picture Cookies" },
                { src: "/Graviti/Graviti4.jpg", alt: "More Cookies" },
              ]}
              correspondingVideos={[]}
            />
          </div>
          
          {/*Zotfest*/}
          <div className="absolute left-[69%] top-[100%] z-3">
            <DialogCustom
              src="/cover/ZotfestCover.jpg"
              alt="Zotfest Cover"
              correspondingPhotos={[
                { src: "/cover/ZotfestCover.jpg", alt: "Zotfest Cover Photo" },
                { src: "/Zotfest/3.png", alt: "Zotfest Photo 1" },
                { src: "/Zotfest/4.png", alt: "Zotfest Photo 2" },
                { src: "/Zotfest/5.png", alt: "Zotfest Photo 3" },
                { src: "/Zotfest/6.png", alt: "Zotfest Photo 4" },
                { src: "/Zotfest/7.png", alt: "Zotfest Photo 5" },
                { src: "/Zotfest/8.png", alt: "Zotfest Photo 6" },
                { src: "/Zotfest/9.png", alt: "Zotfest Photo 7" },
                { src: "/Zotfest/10.png", alt: "Zotfest Photo 8" },
                { src: "/Zotfest/11.png", alt: "Zotfest Photo 9" },
                { src: "/Zotfest/12.png", alt: "Zotfest Photo 10" },
                { src: "/Zotfest/13.png", alt: "Zotfest Photo 11" },
                { src: "/Zotfest/14.png", alt: "Zotfest Photo 12" },
              ]}
              correspondingVideos={[]}
            />
          </div>

          {/*DreamBoys*/}
          <div className="absolute left-[47%] top-[0%] z-3">
            <DialogCustom
              src="/cover/DreamBoyCover.png"
              alt="DreamBoys Cover"
              correspondingPhotos={[]}
              correspondingVideos={[
                {
                  src: "https://www.youtube.com/embed/_UKBQHI-Mi8?si=Q649Msw2NtSiuIVn",
                  alt: "DreamBoys Video",
                },
              ]}
            />
          </div>
          {/*Echolalia Dreams*/}
          <div className="absolute left-[40%] top-[40%] z-2">
            <DialogCustom
              src="/cover/EcholaliaDreams.jpg"
              alt="Echolalia Dreams Cover"
              correspondingPhotos={[]}
              correspondingVideos={[
                {
                  src: "https://www.youtube.com/embed/S8RgGivJj-M?si=xQKm9VDtYmsVyGs-",
                  alt: "Echolalia Dreams Video",
                },
              ]}
            />
          </div>

          {/*Fashion & Sneakers*/}
          <div className="absolute z-3 left-[77%] top-[0%]">
            <DialogCustom
              src="/cover/Fashion&SneakersCover.jpg"
              alt="Fashion & Sneakers Cover"
              correspondingPhotos={[
                {
                  src: "/cover/Fashion&SneakersCover.jpg",
                  alt: "Fashion & Sneakers Cover Photo",
                },
                {
                  src: "/Fashion&Sneakers/Fashion&Sneakers1.jpg",
                  alt: "Fashion & Sneakers Photo 1",
                },
                {
                  src: "/Fashion&Sneakers/Fashion&Sneakers2.JPG",
                  alt: "Fashion & Sneakers Photo 2",
                },
                {
                  src: "/Fashion&Sneakers/Fashion&Sneakers3.JPG",
                  alt: "Fashion & Sneakers Photo 3",
                },
              ]}
              correspondingVideos={[]}
            />
          </div>

          {/*Ley Music Video*/}
          <div className="absolute z-3 top-[95%] right-[74%]">
            <DialogCustom
              src="/cover/LeyMusicVideoCover.jpg"
              alt="Ley Music Video Cover"
              correspondingPhotos={[
                {
                  src: "/cover/LeyMusicVideoCover.jpg",
                  alt: "Ley Music Video Cover Photo",
                },
                { src: "/Ley/Ley1.jpg", alt: "Ley Music Video Photo 1" },
                { src: "/Ley/Ley2.jpg", alt: "Ley Music Video Photo 2" },
              ]}
              correspondingVideos={[]}
            />
          </div>

          {/*Echolalia Dreams Set*/}
          <div className="absolute z-3 left-[75%] top-[27%]">
            <DialogCustom
              src="/cover/EcholaliaDreamsSetCover.jpg"
              alt="Echolalia Dreams Set Cover"
              correspondingPhotos={[
                {
                  src: "/cover/EcholaliaDreamsSetCover.jpg",
                  alt: "Echolalia Dreams Set Cover Photo",
                },
                {
                  src: "/Echolalia/Echolalia1.jpg",
                  alt: "Echolalia Dreams Set Photo 1",
                },
                {
                  src: "/Echolalia/Echolalia3.jpg",
                  alt: "Echolalia Dreams Set Photo 2",
                },
              ]}
              correspondingVideos={[]}
            />
          </div>

          {/*Graduation With Kim*/}
          <div className="absolute z-3 left-[74%] top-[75%]">
            <DialogCustom
              src="/cover/GraduationWithKimCover.jpg"
              alt="Graduation With Kim Cover"
              correspondingPhotos={[
                {
                  src: "/cover/GraduationWithKimCover.jpg",
                  alt: "Graduation With Kim Cover Photo",
                },
                {
                  src: "/Graduation/grad1.jpg",
                  alt: "Graduation With Kim Cover Photo 1",
                },
                {
                  src: "/Graduation/grad2.jpg",
                  alt: "Graduation With Kim Cover Photo 2",
                },
                {
                  src: "/Graduation/grad3.jpg",
                  alt: "Graduation With Kim Cover Photo 3",
                },
                {
                  src: "/Graduation/grad4.jpg",
                  alt: "Graduation With Kim Cover Photo 4",
                },
              ]}
              correspondingVideos={[]}
            />
          </div>
        </div>

      </div>
    </>
  );
}
