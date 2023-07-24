import "./ImageList.css";

const ImageList = ({ images }) => {
  return (
    <div className="container">
      {images &&
        images.map((value, index) => (
          <div className="box">
            <div className="imgBx">
              <img
                key={index}
                src={value.urls.small}
                alt={value.alt_description}
              />
            </div>
            <div className="content">
              <div>
                <p>{value.alt_description}</p>
                <p>Likes {value.likes}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ImageList;
