import { AppConstants } from "@/constants/constant";

export const ProfessionText = () => {
  return (
    <div className="absolute top-[40vh] left-1/2 transform -translate-x-1/2">
      <div className="text-center text-[120px] font-bold opacity-50">
        {AppConstants.ProfessionText}
      </div>
    </div>
  );
};
