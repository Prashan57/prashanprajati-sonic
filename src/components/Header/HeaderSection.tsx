import { HeroImage } from "../HeroImage";
import { NavBar } from "../NavBar";
import { ProfessionText } from "../ProfessionText";

export const HeaderSection = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <NavBar />
      </div>
      <div className="relative z-20">
        <ProfessionText />
      </div>
      <div className="relative z-0">
        <HeroImage />
      </div>
    </div>
  );
};
