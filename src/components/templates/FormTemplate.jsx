import PropTypes from "prop-types";
import LoadingBar from "react-redux-loading-bar";

const FormTemplate = ({ children }) => {
  return (
    <>
      <LoadingBar showFastActions />
      <div className="w-screen h-screen flex justify-center items-center container">
        <div className="container flex bg-secondary flex-col rounded-xl shadow-sm gap-y-7 py-12 md:max-w-screen-sm">
          {children}
        </div>
      </div>
    </>
  );
};

FormTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormTemplate;
