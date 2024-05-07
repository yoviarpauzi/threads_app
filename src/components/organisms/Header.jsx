import { getAccessToken } from "../../utils/network-data";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeaderLogo from "../atoms/HeaderLogo";
import LoadingBar from "react-redux-loading-bar";
import NavList from "../atoms/NavList";
import { IoMdLogIn } from "react-icons/io";
import { FaSearch, FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
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
    <header className="fixed w-screen bg-secondary shadow-sm">
      <div className="container flex justify-between items-center py-3">
        <HeaderLogo />
        <nav>
          <NavList>
            <li>
              <button
                type="button"
                className="p-2 bg-tertiary rounded-full"
                title="Search"
              >
                <FaSearch className="text-lg text-orange-500" />
              </button>
            </li>
            <li>
              <button
                type="button"
                className="p-2 bg-tertiary rounded-full"
                title="Tags"
              >
                <FaTags className="text-lg text-orange-500" />
              </button>
            </li>
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
                  <button
                    type="button"
                    className="p-2 bg-tertiary rounded-full"
                    title="Login"
                  >
                    <IoMdLogIn className="text-lg text-orange-500" />
                  </button>
                </Link>
              )}
            </li>
          </NavList>
        </nav>
      </div>
      <LoadingBar showFastActions />
    </header>
  );
};

export default Header;
