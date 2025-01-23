import { AppConstants, CertificationsVariables } from "@/constants/constant";
import Image from "next/image";

export const CertificationSection = () => {
  return (
    <div>
      <div className="text-3xl font-thin mx-8 my-16 lg:my-10 pl-3" id="MyWork">
        Certifications
      </div>
      <div>
        {CertificationsVariables.map((item, index) => {
          return (
            <div
              key={index}
              className=" p-8 flex flex-row my-8 justify-between items-center rounded-lg"
              style={{
                backgroundColor: `${AppConstants.skillSetBackgroundColor}`,
                paddingLeft: "7%",
                paddingRight: "9%",
              }}
            >
              <div>
                <Image
                  src={item.imageURL}
                  height={120}
                  width={120}
                  alt={item.alt}
                />
              </div>
              <div>
                <div className="flex justify-end font-semibold text-2xl">
                  {item.name}
                </div>
                <div className="flex justify-end italic text-slate-300">
                  {item.altName}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
