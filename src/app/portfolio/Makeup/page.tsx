import makeupPhotos from "@/utils/makeup";
import WorkNavbar from "@/app/components/WorkNavbar";
import DialogCustom from "@/app/components/dialogcustom";
export default function Makeup() {
  const photos = makeupPhotos;
  return (
    <>
      <WorkNavbar current="marketing" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto xl:hidden">
        {photos.map((photo) => (
          <DialogCustom
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            correspondingPhotos={photo.correspondingPhotos}
            correspondingVideos={photo.correspondingVideos}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <div className="hidden xl:block relative h-dvh w-[1920px]">
          <div className="absolute right-[50%] z-1">
            <DialogCustom
              src="/cover/DreamBoyCover.png"
              alt="Dream Boy Cover"
              correspondingVideos={[
                {
                  src: "https://www.youtube.com/embed/_UKBQHI-Mi8?si=Q649Msw2NtSiuIVn",
                  alt: "DreamBoys Video",
                },
              ]}
              correspondingPhotos={[]}
            />
          </div>

          <div className="absolute right-[75%] top-[45%] z-4">
            <DialogCustom
              src="/cover/EcholaliaDreams.jpg"
              alt="Echolalia Dreams Cover"
              correspondingVideos={[
                {
                  src: "https://www.youtube.com/embed/S8RgGivJj-M?si=xQKm9VDtYmsVyGs-",
                  alt: "Echolalia Dreams Video",
                },
              ]}
              correspondingPhotos={[]}
            />
          </div>

          <div className="absolute left-[50%] top-[0%] z-4">
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

          <div className="absolute left-[50%] top-[49%] z-4">
            <DialogCustom
              src="/Fashion&Sneakers/Fashion&Sneakers1.jpg"
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

          <div className="absolute left-[5%] top-[45%] z-3">
            <DialogCustom
              src="/Fashion&Sneakers/Fashion&Sneakers2.jpg"
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

          <div className="absolute left-[25%] top-[85%] z-3">
            <DialogCustom
              src="/Fashion&Sneakers/Fashion&Sneakers3.jpg"
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

          <div className="absolute left-[25%] top-[85%] z-3">
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

          <div className="absolute left-[75%] top-[95%] z-3">
            <DialogCustom
              src="/Ley/Ley1.jpg"
              alt="Ley Music Video Cover"
              correspondingPhotos={[
                {
                  src: "/Ley/LeyMusicVideoCover.jpg",
                  alt: "Ley Music Video Cover Photo",
                },
                { src: "/Ley/Ley1.jpg", alt: "Ley Music Video Photo 1" },
                { src: "/Ley/Ley2.jpg", alt: "Ley Music Video Photo 2" },
              ]}
              correspondingVideos={[]}
            />
          </div>

          <div className="absolute left-[85%] top-[145%] z-4">
            <DialogCustom
              src="/Ley/Ley2.jpg"
              alt="Ley Music Video Cover"
              correspondingPhotos={[
                {
                  src: "/Ley/LeyMusicVideoCover.jpg",
                  alt: "Ley Music Video Cover Photo",
                },
                { src: "/Ley/Ley1.jpg", alt: "Ley Music Video Photo 1" },
                { src: "/Ley/Ley2.jpg", alt: "Ley Music Video Photo 2" },
              ]}
              correspondingVideos={[]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
