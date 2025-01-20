import { AppConstants, ExtraSkillSetVariables } from "@/constants/constant";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ExtraSkill = () => {
  const [showAll, setShowAll] = useState(false); // State to control visibility

  const containerVariants = {
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
    collapsed: { height: 230, opacity: 1, transition: { duration: 0.5 } }, // Adjust height for the first five elements
  };

  return (
    <div>
      <div className="relative flex flex-col w-full justify-center items-center text-center mt-12">
        <div className="flex font-bold text-3xl mt-8">Extra Skills</div>
        <motion.div
          className="grid grid-cols-5 lg:gap-32 lg:px-28 lg:py-8 p-12 gap-8 rounded-lg mt-8 w-full text-center items-center justify-center lg:justify-between overflow-hidden"
          style={{ backgroundColor: `${AppConstants.skillSetBackgroundColor}` }}
          variants={containerVariants}
          animate={showAll ? "expanded" : "collapsed"}
        >
          <AnimatePresence>
            {ExtraSkillSetVariables.map((item, index) => {
              if (!showAll && index >= 5) {
                return null; // Hide elements with index >= 5
              }
              return (
                <motion.div
                  key={index} // Use a unique key for AnimatePresence
                  className="flex flex-col justify-center lg:justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div>
                    <Image
                      src={item.imageURL}
                      alt={item.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="mt-10 font-semibold">{item.name}</div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        {/* Button to toggle visibility */}
        <button className="mt-4" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ⬆" : "Show More ⬇"}
        </button>
      </div>
    </div>
  );
};
