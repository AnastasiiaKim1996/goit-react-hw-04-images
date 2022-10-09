export const ImageGalleryItem = ({
  image: { tags, webformatURL, largeImageURL },
}) => {
  return (
    <img
      className=""
      src={webformatURL}
      data-source={largeImageURL}
      alt={tags}
    />
  );
};
