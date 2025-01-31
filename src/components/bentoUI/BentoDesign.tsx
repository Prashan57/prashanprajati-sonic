import { BentoVariables } from "@/constants/constant";
import Image from "next/image";

export const BentGridDesign = () => {
  return (
    <div className="relative mt-28 mx-16">
      <div className="relative grid grid-rows-4 grid-cols-5 gap-4  overflow-hidden">
        <div className=" col-span-5  p-2  h-32 lg:h-52 relative rounded-lg">
          <Image
            src={BentoVariables.image1}
            alt="img1"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className=" col-span-2  p-2  relative rounded-lg">
          <Image
            src={BentoVariables.image2}
            alt="img2"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className=" row-span-2  p-2  relative">
          <Image
            src={BentoVariables.image3}
            alt="img3"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className=" p-2  relative">
          <Image
            src={BentoVariables.image4}
            alt="img4"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className=" p-2  relative">
          <Image
            src={BentoVariables.image5}
            alt="img5"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className=" p-2  relative">
          <Image
            src={BentoVariables.image6}
            alt="img6"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className="  p-2  relative">
          <Image
            src={BentoVariables.image7}
            alt="img7"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className=" col-span-2  p-2  relative">
          <Image
            src={BentoVariables.image8}
            alt="img8"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className=" col-span-5 relative">
          <Image
            src={BentoVariables.image9}
            alt="img9"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};
