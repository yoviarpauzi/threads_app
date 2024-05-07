import PropTypes from "prop-types";

const Profile = ({ avatar, listener }) => {
  return (
    <img
      src={avatar}
      className="w-8 rounded-full cursor-pointer"
      onClick={listener}
    />
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  listener: PropTypes.func.isRequired,
};

export default Profile;
