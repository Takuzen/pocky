import { useState } from "react";
import Image from "next/image";

export default function StorePhoto() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Function to open modal
  const openModal = (src) => {
    setCurrentImage(src);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 md:px-8 py-8">
      <h1 className="text-xl md:text-2xl font-futura tracking-wide text-gray-800 mb-6">
        Store Photos
      </h1>

      {/* Flexbox Layout for Wide Images */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {/* Images */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full md:w-[48%] lg:w-[45%] cursor-pointer rounded-lg overflow-hidden shadow-lg"
            onClick={() => openModal(`/store-image-${index + 1}.jpg`)}
          >
            <Image
              src={`/store-image-${index + 1}.jpg`}
              alt={`Store Image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImage}
              alt="Expanded Image"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-xl"
            />
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-900 bg-opacity-60 px-3 py-1 rounded-lg hover:bg-opacity-80"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-6 mb-6 text-gray-600 text-sm">
        &copy; 2025 Pocky Salon & Store
      </footer>
    </div>
  );
}
