"use client";

import { useRouter } from "next/navigation";

import {
  AppConstants,
  contactInfo,
  dpImage,
  SocialIcons,
} from "@/constants/constant";

import { MyButton } from "../MyButton";
import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/modal";
import { MyContactButton } from "../ContactMeButton";
import { PdfViewer } from "../PDFView/PdfViewer";

export const Footer = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div id="Contact" className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="mt-3">
          <Image
            src={dpImage.DPURL}
            alt={dpImage.alt}
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>
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
      <div className="flex mb-24 ">
        {contactInfo.map((item, index) => (
          <MyButton key={index} name={item.name} />
        ))}
        <PdfViewer />
        <MyContactButton onClick={openModal} name="Contact Me" />
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};
