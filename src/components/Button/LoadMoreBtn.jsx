import PropTypes from 'prop-types';
import { Button, ButtonTitle } from 'components/Button/LoadMoreBtn.styled';
import { ImImages } from 'react-icons/im';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button onClick={() => onClick()}>
      <ButtonTitle>Load more</ButtonTitle>
      <ImImages />
    </Button>
  );
};

LoadMoreBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
