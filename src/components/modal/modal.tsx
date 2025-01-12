// components/Modal.tsx
import React from "react";
import { motion } from "framer-motion";

import {CustomEmailJS} from '../../emailJs/CustomEmailJs.jsx'

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <motion.div
        className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-end">
          <button className="text-gray-500 text-2xl" onClick={closeModal}>
            &times;
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-4">This is a modal</h2>
        <p>Content goes here</p>
        <CustomEmailJS/>

        <div className="mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
            onClick={closeModal}
          >
            
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
