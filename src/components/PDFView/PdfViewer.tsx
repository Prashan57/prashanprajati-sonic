import { AppConstants } from "@/constants/constant";
import React, { useState } from "react";

export const PdfViewer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Check if the clicked target is the background overlay
    if ((e.target as HTMLDivElement).id === "overlay") {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Button to toggle the popup */}
      <button
        className="p-4 gap-2 m-4 outline outline-1 outline-offset-2 sm:p-3 lg:px-8 rounded-full mx-3 font-semibold"
        onClick={() => setIsOpen(true)}
      >
        My Resume
      </button>

      {/* Popup for PDF Viewer */}
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg w-11/12 lg:w-3/4 h-5/6 overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ╳
            </button>

            {/* PDF Viewer iframe */}
            <iframe
              src={AppConstants.PdfURL}
              title="PDF Viewer"
              className="w-full h-full"
              style={{ border: "none" }}
            />

            {/* Download link */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <a
                href={AppConstants.PdfURL}
                download
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
