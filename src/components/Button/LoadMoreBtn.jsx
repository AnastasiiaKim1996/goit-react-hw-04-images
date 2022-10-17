import PropTypes from 'prop-types';
import { Button, ButtonTitle } from 'components/Button/LoadMoreBtn.styled';
import { ImImages } from 'react-icons/im';

export const LoadMoreBtn = ({ loadMoreImg }) => {
  return (
    <Button onClick={loadMoreImg}>
      <ButtonTitle>Load more</ButtonTitle>
      <ImImages />
    </Button>
  );
};

LoadMoreBtn.propTypes = {
  loadMoreImg: PropTypes.func.isRequired,
};
