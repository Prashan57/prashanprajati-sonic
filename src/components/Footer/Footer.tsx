"use client";

import { useRouter } from "next/navigation";

import { AppConstants, contactInfo, SocialIcons } from "@/constants/constant";

import { MyButton } from "../MyButton";
import Image from "next/image";

export const Footer = () => {
  const router = useRouter();
  return (
    <div id="Contact" className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="">Image</div>
        <div className="flex flex-col my-24">
          <div className="text-3xl font-bold">{AppConstants.quote}</div>
          <div className="flex flex-row gap-4 mt-4">
            {SocialIcons.map((item, index) => (
              <Image
                src={item.iconUrl}
                key={index}
                alt={item.alt}
                width={40}
                height={40}
                style={{ borderRadius: "100px" }}
                onClick={() => router.push(item.redirect)}
              />
            ))}
          </div>
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
