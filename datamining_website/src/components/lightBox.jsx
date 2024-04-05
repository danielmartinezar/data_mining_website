import React, { useState } from "react";

export default function Lightbox({ imageUrl }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
          onClick={closeLightbox}
        >
          <img
            src={imageUrl}
            alt="Lightbox"
            className="max-h-full max-w-full"
          />
        </div>
      )}
      <div onClick={openLightbox} className="relative">
        <img
          src={imageUrl}
          alt="Thumbnail"
          className="cursor-pointer hover:opacity-75 transition-opacity duration-300"
        />
        <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 p-1 rounded">
          Click para ampliar
        </p>
      </div>
    </>
  );
}
