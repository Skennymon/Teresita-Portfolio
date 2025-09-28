import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={750}
                  height={750}
                  quality={80}
                  key={photo.src}
                ></Image>
                <DialogDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </DialogDescription>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}
