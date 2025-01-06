import { MyButton } from "./MyButton";

import { variables } from "@/constants/constant";
import { NameTag } from "./NameTag";
import { LocationTag } from "./LocationTag";

export const NavBar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mt-6 px-6">
      <div className="relative">
        <NameTag />
      </div>

      <div className="relative flex-1 flex justify-center">
        {variables.map((item, index) => (
          <MyButton key={index} name={item.name} />
        ))}
      </div>

      <div className="relative flex w-40 justify-end">
        <LocationTag />
      </div>
    </div>
  );
};
