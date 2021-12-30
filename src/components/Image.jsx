import React, { useEffect } from "react";

const Image = ({ src, handleClick }) => {
  
  return (
    <li>
      <img
        className="img"
        src={src}
        alt="Photo"
        onClick={handleClick}
      />
    </li>
  );
};

export default Image;


{
  /*const origImage = src;
          const image = await fetch(origImage);
          const nameSplit = origImage.split("/");
          const duplicateName = nameSplit.pop();

          const imageBlog = await image.blob();
          const imageURL = URL.createObjectURL(imageBlog);
          const link = document.createElement("a");
          link.href = imageURL;
          link.download = "" + duplicateName + "";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link); */
}
