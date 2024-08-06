"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const TrackPage = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="px-4 md:ml-56 mt-4 flex flex-col   md:items-start gap-4">
      {pathname === "/" && (
        <div className="text-sm md:text-base opacity-65">
          &gt; Home &gt; Onboarding
        </div>
      )}
      <div>
        <Image
          src="/videodubber_image.png"
          alt="VideoDubber AI"
          width={80}
          height={60}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TrackPage;
