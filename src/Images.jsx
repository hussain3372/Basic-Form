import React, { useState } from "react";

function ImageGallery() {
  const [selectImages, setSelectImages] = useState([]);
  const [GalleryOpen, setGalleryOpen] = useState(false);

  const handleImageSelect = (e) => {
    const files = e.target.files;
    const selectedImageArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectImages(selectedImageArray);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setSelectImages([]);
    setGalleryOpen(false);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageSelect}
      />
      {GalleryOpen && (
        <div className="image-gallery">
          <button onClick={closeGallery}>Remove Images</button>
          {selectImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              onClick={() => window.open(imageUrl)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
