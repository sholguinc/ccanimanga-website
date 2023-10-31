// import {useContext, useState} from "react";

export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  // Image Loading
  // const [isLoading, setLoading] = useState(true)

  // openCarousel

  return (
    <div className="card-image">
      <img src={src} alt={alt} className="card-image__img" />
    </div>
  );
};
