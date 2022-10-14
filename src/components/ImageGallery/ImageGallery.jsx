import PropTypes from 'prop-types';
import {
  ImgGallery,
  Gallery,
} from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, ...otherProps }) => {
  return (
    <div>
      <ImgGallery>
        {images.map(img => (
          <Gallery className="" key={img.id}>
            <ImageGalleryItem image={img} {...otherProps} />
          </Gallery>
        ))}
      </ImgGallery>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
