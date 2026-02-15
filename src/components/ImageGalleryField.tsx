import { useRecordContext } from "react-admin";

const ImageGalleryField = () => {
  const record = useRecordContext();

  // Handle the case where images might be a string or an array
  const imagesArray = record?.images
    ? typeof record.images == "string"
      ? record.images.split(",")
      : record.images
    : [];
  return (
    // <div style={{ display: "flex", flexWrap: "wrap" }}>
    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
      {imagesArray.map((imageUrl: string, index: number) => (
        <img
          key={index}
          src={imageUrl.trim()}
          alt={`Project image ${index + 1}`}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
};

export default ImageGalleryField;
