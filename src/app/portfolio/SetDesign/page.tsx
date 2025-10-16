import SetDesignPhotos from "@/utils/setdesignphotos";
import Link from "next/link";
import DialogCustom from "../../components/dialogcustom";
import WorkNavbar from "@/app/components/WorkNavbar";
export default function SetDesign() {
  const photos = SetDesignPhotos;
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

      {/* For extra large screens */}
      <div className="flex items-center justify-center">
        <div className="hidden xl:block relative h-dvh w-[1920px]">
          {/*Echolalia Dreams Set*/}
          <div className="absolute right-[50%] z-1">
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
          <div className="absolute right-[75%] top-[145%] z-4">
            <DialogCustom
              src="/Echolalia/Echolalia1.jpg"
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
          <div className="absolute left-[72%] top-[75%] z-3">
            <DialogCustom
              src="/Echolalia/Echolalia3.jpg"
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
          <div className="absolute left-[50%] top-[0%] z-3">
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
          <div className="absolute left-[50%] top-[40%] z-1">
            <DialogCustom
              src="/Graduation/grad1.jpg"
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
          <div className="absolute z-0 left-[25%] top-[80%]">
            <DialogCustom
              src="/Graduation/grad2.jpg"
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
          <div className="absolute z-3 top-[90%] right-[74%]">
            <DialogCustom
              src="/Graduation/grad3.jpg"
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
          <div className="absolute z-3 left-[80%] top-[120%]">
            <DialogCustom
              src="/Graduation/grad4.jpg"
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
