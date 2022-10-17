import PropTypes from 'prop-types';

import {
  Image,
  Gallery,
} from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, largeImage, tags, onModal }) => {
  return (
    <Gallery>
      <Image src={image} alt={tags} onClick={() => onModal(largeImage)} />
    </Gallery>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    image: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
