"use client";

import Link from "next/link";
import { AppConstants, WorkTabVariables } from "../../constants/constant";
import { MyButton } from "../MyButton";

export const HeaderForWorkTab = () => {
  return (
    <div className="m-16 ">
      <div
        className="flex items-center text-center justify-center m-32 font-semibold text-xl "
        id="AboutMe"
      >
        {AppConstants.personInfo}
      </div>
      {/* <div className="flex items-center justify-center m-24">
        <MyButton name="Contact Me" />
      </div> */}

      <div className="text-3xl font-thin my-10 pl-3" id="MyWork">
        Recent Works
      </div>
      <div>
        {AppConstants.WorkTabVariablesStatus &&
          WorkTabVariables.map((item, index) => (
            <MyButton key={index} name={item.name} />
          ))}
      </div>
    </div>
  );
};
