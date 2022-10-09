import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map(img => (
          <li className="">
            <ImageGalleryItem
              key={img.id}
              image={img.webformatURL}
              text={img.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
