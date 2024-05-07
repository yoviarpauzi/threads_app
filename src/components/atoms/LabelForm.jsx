import PropTypes from "prop-types";

const LabelForm = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-orange-400">
      {children}
    </label>
  );
};

LabelForm.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LabelForm;
