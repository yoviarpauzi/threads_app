import { getAccessToken, removeAccessToken } from "../../utils/network-data";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import NavList from "../atoms/NavList";
import { asyncUserProfile } from "../../states/user/action";
import Profile from "../atoms/Profile";
import { Link } from "react-router-dom";
import ButtonLogout from "../atoms/ButtonLogout";
import { IoMdLogIn } from "react-icons/io";

const Nav = () => {
  const accessToken = getAccessToken();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const [isClickProfile, setIsClickProfile] = useState(false);

  useEffect(() => {
    if (accessToken) {
      dispatch(asyncUserProfile());
    }
  }, []);

  const handleLogout = () => {
    removeAccessToken();
    window.location.reload();
  };

  return (
    <nav>
      <NavList>
        <li>
          {accessToken ? (
            <>
              {data && (
                <Profile
                  avatar={data.avatar}
                  listener={() => setIsClickProfile(!isClickProfile)}
                />
              )}
              {isClickProfile && <ButtonLogout listener={handleLogout} />}
            </>
          ) : (
            <Link to={`/login`}>
              <button className="flex justify-center items-center">
                <IoMdLogIn className="text-orange-500 text-2xl" />
              </button>
            </Link>
          )}
        </li>
      </NavList>
    </nav>
  );
};

export default Nav;
