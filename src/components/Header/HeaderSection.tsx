import { HeroImage } from "../HeroImage";
import { HeroImagePopUp } from "../HeroImagePopUp";
import { NavBar } from "../NavBar";
import { ProfessionText } from "../ProfessionText";

export const HeaderSection = () => {
  return (
    <div id="Home" className="relative w-full">
      <div className="relative z-40">
        <NavBar />
      </div>
      <div className="relative z-20">
        <HeroImagePopUp/>
      </div>
      <div className="relative z-10">
        <ProfessionText />
      </div>
      <div className="relative z-0">
        <HeroImage />
      </div>
    </div>
  );
};
