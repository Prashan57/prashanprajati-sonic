import { AppConstants } from "@/constants/constant";

export const ProfessionText = () => {
  return (
    <div className="flex justify-center absolute top-[40vh] left-1/2 transform -translate-x-1/2 w-full">
      <div className="text-center text-[100px] lg:text-[120px] font-bold opacity-50">
        {AppConstants.ProfessionText}
      </div>
    </div>
  );
};
