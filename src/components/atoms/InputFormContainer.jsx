import PropTypes from "prop-types";

const InputFormContainer = ({ children }) => {
  return <div className="flex flex-col gap-y-1">{children}</div>;
};

InputFormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputFormContainer;
