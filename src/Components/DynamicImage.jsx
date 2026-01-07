import React from "react";

export default function DynamicImage({ imageName, style = "", alt = "Image", ...props }) {
  // On suppose que toutes les images sont dans public/images/
  const src = `/images/${imageName}`;

  return (
    <img
      src={src}
      alt={alt}
      className={style}
      {...props} // permet de passer width, height, id, onClick etc.
      onError={(e) => {
        e.target.src = "/images/placeholder.png"; // fallback si l'image n'existe pas
      }}
    />
  );
}


// USAGE DU COMPOSANT : A chque fois que je veux utiliser une image dans public > images >...
// <DynamicImage imageName="avatar.png" className="w-24 h-24 rounded-full" /> 