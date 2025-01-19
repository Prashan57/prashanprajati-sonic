import { Footer } from "@/components/Footer/Footer";
import { HeaderSection } from "@/components/Header/HeaderSection";
import { WorkHeader } from "@/components/Section/WorkSection/WorkHeader";

import { AppConstants } from "@/constants/constant";

export const CustomLayout = () => {
  return (
    <div style={{ background: `${AppConstants.backgroundColor}` }}>
      <div className="container-layout overflow-visible h-screen w-full">
        <div className=" bg-gray-100 top-0 left-0 relative">
          <HeaderSection />
        </div>
      </div>

      <div className=" bg-gray-200  relative bottom  z-20">
        <WorkHeader />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
