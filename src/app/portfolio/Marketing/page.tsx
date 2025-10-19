import WorkNavbar from "@/app/components/WorkNavbar";
import DialogCustom from "@/app/components/dialogcustom";
import marketingInternshipPhotos from "@/utils/marketinginternships";
export default function Marketing() {
  const photos = marketingInternshipPhotos;

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

      {/* For extra large screens */}
      <div className="flex items-center justify-center">
        <div className="hidden xl:block relative h-dvh w-[1920px]">
          <div className="absolute right-[50%] z-1">
            <DialogCustom
              src="/cover/GravitiFitnessCover.jpg"
              alt="Graviti Cover Photo"
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
          <div className="absolute right-[75%] top-[145%] z-4">
            <DialogCustom
              src="/Graviti/Graviti1.jpg"
              alt="Graviti Cover Photo"
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

          <div className="absolute left-[72%] top-[85%] z-4">
            <DialogCustom
              src="/Graviti/Graviti2.jpg"
              alt="Graviti Cover Photo"
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

          <div className="absolute left-[50%] top-[0%] z-3">
            <DialogCustom
              src="/Graviti/Graviti3.jpg"
              alt="Graviti Cover Photo"
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

          <div className="absolute left-[69%] top-[95%] z-1">
            <DialogCustom
              src="/Graviti/Graviti4.jpg"
              alt="Graviti Cover Photo"
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

          <div className="absolute z-3 top-[90%] right-[74%]">
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

          <div className="absolute z-0 left-[25%] top-[100%]">
            <DialogCustom
              src="/Zotfest/3.png"
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

           <div className="absolute z-1 left-[69%] top-[155%]">
            <DialogCustom
              src="/Zotfest/4.png"
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

          <div className="absolute z-1 left-[0%] top-[185%]">
            <DialogCustom
              src="/Zotfest/5.png"
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

           <div className="absolute z-0 left-[45%] top-[194%]">
            <DialogCustom
              src="/Zotfest/6.png"
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

          <div className="absolute z-0 left-[80%] top-[217%]">
            <DialogCustom
              src="/Zotfest/7.png"
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

          <div className="absolute z-0 left-[80%] top-[217%]">
            <DialogCustom
              src="/Zotfest/8.png"
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

          <div className="absolute z-0 left-[80%] top-[249%]">
            <DialogCustom
              src="/Zotfest/9.png"
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

          <div className="absolute z-1 left-[0%] top-[279%]">
            <DialogCustom
              src="/Zotfest/10.png"
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

          <div className="absolute z-0 left-[46%] top-[285%]">
            <DialogCustom
              src="/Zotfest/11.png"
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

          <div className="absolute z-0 left-[80%] top-[285%]">
            <DialogCustom
              src="/Zotfest/12.png"
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

          <div className="absolute z-0 left-[86%] top-[325%]">
            <DialogCustom
              src="/Zotfest/13.png"
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

           <div className="absolute z-0 left-[86%] top-[350%]">
            <DialogCustom
              src="/Zotfest/14.png"
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

        </div>
      </div>
    </>
  );
}
