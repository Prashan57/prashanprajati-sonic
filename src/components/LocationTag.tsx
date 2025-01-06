"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import locationTag from "../assets/ic/Frame 29061.png";
import { AppConstants } from "@/constants/constant";

export const LocationTag = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? (
          <motion.div
            animate={{
              x: 10,
              opacity: 1,
              transition: {
                default: { type: "spring" },
                opacity: { ease: "linear" },
              },
            }}
            className="ease-in "
          >
            {AppConstants.location}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="fade-in"
          >
            <Image src={locationTag} alt="locationTag" className="fade-out" />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default LocationTag;
