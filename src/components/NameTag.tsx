import Image from "next/image";

import { AppConstants } from "../constants/constant";
import ic from "../assets/ic/ic_round-copyright.png";

export const NameTag = () => {
  return (
    <div className="flex gap-2">
      <div>
        <Image src={ic} alt="ic" />
      </div>
      <div>{AppConstants.personName}</div>
    </div>
  );
};
