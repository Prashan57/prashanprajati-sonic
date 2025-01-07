import { AppConstants, contactInfo } from "@/constants/constant";
import { MyButton } from "../MyButton";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="">Image</div>
        <div className="flex flex-col my-24">
          <div className="text-3xl font-bold">{AppConstants.quote}</div>
          <div className="txt-xl font-semibold">icons</div>
        </div>
      </div>
      <div className="mb-24">
        {contactInfo.map((item, index) => (
          <MyButton key={index} name={item.name} />
        ))}
      </div>
    </div>
  );
};
