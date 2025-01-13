"use client";

import { useState } from "react";
import { AppConstants, WorkTabVariables } from "../../constants/constant";
import { MyContactButton } from "../ContactMeButton";
import { MyButton } from "../MyButton";
import Modal from "../modal/modal";

export const HeaderForWorkTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="lg:m-16 ">
      <div
        className="flex items-center text-center justify-center lg:mx-32 mx-16 ld:font-semibold text-xl "
        id="AboutMe"
      >
        {AppConstants.personInfo}
      </div>
      <div className="flex flex-row justify-center m-20">
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
        <MyContactButton name="Contact Me" onClick={openModal}/>
      </div>
      
      <hr className="mx-8 "/>

      <div className="text-3xl font-thin mx-8 my-16 lg:my-10 pl-3" id="MyWork">
        Recent Works
      </div>
      <div className="mx-2">
        {AppConstants.WorkTabVariablesStatus &&
          WorkTabVariables.map((item, index) => (
            <MyButton key={index} name={item.name} />
          ))}
      </div>
    </div>
  );
};
