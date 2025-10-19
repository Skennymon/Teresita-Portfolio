import WorkNavbar from "@/app/components/WorkNavbar";
import DialogCustom from "@/app/components/dialogcustom";
import marketingInternshipPhotos from "@/utils/marketinginternships";
export default function Marketing() {

  const photos = marketingInternshipPhotos;

  return (
    <>
      <WorkNavbar current="setdesign" />
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
