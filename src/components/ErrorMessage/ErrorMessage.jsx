import PropTypes from 'prop-types';

import { Image, Subtitle } from 'components/ErrorMessage/ErrorMessage.styled';

export const ErrorMessage = ({ errorImg }) => (
  <div>
    <Image src={errorImg} width="500" alt="Error, try again!" />
    <Subtitle>Please, try again</Subtitle>
  </div>
);

ErrorMessage.propTypes = {
  errorImg: PropTypes.string.isRequired,
};
