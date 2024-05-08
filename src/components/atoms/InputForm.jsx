import PropTypes from "prop-types";

const InputForm = ({ type, id, value, listener }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      required
      className="bg-secondary border border-gray-500 rounded-md text-sm py-1 px-2 outline-orange-500"
      onChange={listener}
      autoComplete="off"
    />
  );
};

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  listener: PropTypes.func.isRequired,
};

export default InputForm;
