import { BentoVariables } from "@/constants/constant";
import Image from "next/image";

export const BentGridDesign = () => {
  return (
    <div className="relative mt-8">
      <div className="relative grid grid-rows-4 grid-cols-5 gap-2  overflow-hidden">
        <div className="bg-green-800 col-span-5 text-white p-2 text-center h-52 relative rounded-lg">
          <Image
            src={BentoVariables.image1}
            alt="img1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-red-600 col-span-2 text-white p-2 text-center relative rounded-lg">
          <Image
            src={BentoVariables.image2}
            alt="img2"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-yellow-400 row-span-2 text-black p-2 text-center relative">
          <Image
            src={BentoVariables.image3}
            alt="img3"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-yellow-900 text-white p-2 text-center relative">
          <Image
            src={BentoVariables.image4}
            alt="img4"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-yellow-900 text-white p-2 text-center relative">
          <Image
            src={BentoVariables.image5}
            alt="img5"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-yellow-900 text-white p-2 text-center relative">
          <Image
            src={BentoVariables.image6}
            alt="img6"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-yellow-900 text-white p-2 text-center relative">
          <Image
            src={BentoVariables.image7}
            alt="img7"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-yellow-900 col-span-2 text-white p-2 text-center relative">
          <Image
            src={BentoVariables.image8}
            alt="img8"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" text-black col-span-5 relative">
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
