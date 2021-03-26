import React, { useState } from "react";
import FileUpload from "../../util/FileUpload";

const clothKinds = [
  { key: 1, value: "Tops" },
  { key: 2, value: "Bottoms" },
  { key: 3, value: "Dresses" },
  { key: 4, value: "Jackets" },
  { key: 5, value: "Sleepwear" },
  { key: 6, value: "Twopiece" },
  { key: 7, value: "Accessories" },
  { key: 8, value: "Socks" },
  { key: 9, value: "Shoes" },
];

function UploadProduct() {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceVale] = useState("");
  const [clothKindsValue, setclothKindsVale] = useState(1);
  const [Images, setImages] = useState([]);

  const updateImages = (newImage) => {
    setImages(newImage);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Upload Travel Product</h2>
      </div>

      <FileUpload refreshFunction={updateImages} />
      <form onSubmit>
        <br />
        <br />
        <label>Title</label>
        <input
          onChange={(e) => setTitleValue(e.target.value)}
          value={TitleValue}
        />
        <br />
        <br />
        <label>Description</label>
        <textarea
          onChange={(e) => {
            setDescriptionValue(e.target.value);
          }}
          value={DescriptionValue}
        />
        <br />
        <br />
        <label>Price ( $) </label>
        <input
          onChange={(e) => setPriceVale(e.target.value)}
          value={PriceValue}
          type="number"
        />
        <select onChange={(e) => setclothKindsVale(e.target.value)}>
          {clothKinds.map((item) => (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button onClick>Submit</button>
      </form>
    </div>
  );
}

export default UploadProduct;
