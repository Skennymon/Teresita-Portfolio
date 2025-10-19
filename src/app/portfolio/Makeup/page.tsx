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
    </>
  );
}
