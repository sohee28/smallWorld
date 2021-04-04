import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import styles from "./productImage.css";

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      props.detail.images &&
        props.detail.images.map((item) => {
          images.push({
            original: `http://localhost:5000/${item}`,
            thumbnail: `http://localhost:5000/${item}`,
          });
        });
      setImages(images);
    }
  }, [props.detail]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ImageGallery items={Images} additionalClass={styles.image} />
    </div>
  );
}

export default ProductImage;
