import { AppConstants } from "@/constants/constant";
import Image from "next/image";

export const HeroImagePopUp = () => {
  return (
    <div className="absolute h-screen w-full">
      <Image
        src={AppConstants.heroImageUrl} // This should work now
        alt="heroImage"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
