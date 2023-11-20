import PropTypes from 'prop-types';
import buttonStyles from './button.module.css';

export const Button = ( {label, mb, mt} ) => {
  return (
    <button className={buttonStyles.btn} style={{ marginBottom: `${mb}px`, marginTop: `${mt}px`}}>
      <p>{label}</p>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  mb: PropTypes.number,
  mt: PropTypes.number,
}