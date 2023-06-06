import PropTypes from 'prop-types';

import { ButtonLoad } from './ButtonLoad.styled';

export const Button = ({ onClick }) => {
  return <ButtonLoad onClick={onClick}>Load More</ButtonLoad>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
