import React from "react";

const FullScreenBackground = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover", // Menyusun gambar agar memenuhi layar
        backgroundPosition: "center", // Memposisikan gambar di tengah
        backgroundRepeat: "no-repeat", // Tidak mengulang gambar
        height: "100vh", // Menjamin tinggi layar penuh
        width: "100vw", // Menjamin lebar layar penuh
      }}
    />
  );
};

export default FullScreenBackground;
