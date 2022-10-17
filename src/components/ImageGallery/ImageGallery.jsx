import PropTypes from 'prop-types';
import { ImgGallery } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ImgGallery>
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          image={img.webformatURL}
          largeImage={img.largeImageURL}
          tags={img.tags}
          onModal={onImgClick}
        />
      ))}
    </ImgGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImgClick: PropTypes.func,
};
