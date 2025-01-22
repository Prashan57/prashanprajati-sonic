import { AppConstants, SkillSetVariables } from "@/constants/constant";
import Image from "next/image";
import React from "react";

export const MajorSkill = () => {
  return (
    <div>
      <div className="relative flex flex-col w-full justify-center items-center text-center mt-12">
        <div className="flex font-bold text-3xl mt-8">Major Skills</div>
        <div
          className="grid grid-cols-5 lg:gap-32 lg:px-28 lg:py-8 p-12 gap-8 rounded-lg mt-8 w-full text-center items-center justify-center lg:justify-between overflow-hidden"
          style={{ backgroundColor: `${AppConstants.skillSetBackgroundColor}` }}
        >
          {SkillSetVariables.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex flex-row justify-center items-center">
                  <Image
                    src={item.imageURL}
                    alt={item.alt}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="mt-10 font-semibold flex flex-row items-center justify-center">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
