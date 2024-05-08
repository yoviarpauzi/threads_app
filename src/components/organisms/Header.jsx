import { getAccessToken, removeAccessToken } from "../../utils/network-data";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeaderLogo from "../atoms/HeaderLogo";
import LoadingBar from "react-redux-loading-bar";
import NavList from "../atoms/NavList";
import { IoMdClose, IoMdLogIn } from "react-icons/io";
import { FaSearch, FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";
import { asyncUserProfile } from "../../states/user/action";
import Profile from "../atoms/Profile";
import ButtonLogout from "../atoms/ButtonLogout";

const Header = () => {
  const accessToken = getAccessToken();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const [isClickProfile, setIsClickProfile] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState("");

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
        <div className="flex items-center gap-x-8">
          <HeaderLogo />
        </div>
        <div className="relative md:block hidden mx-auto w-3/5">
          <input
            type="text"
            className="w-full bg-tertiary border border-gray-700 rounded-md ps-2 pe-10 py-1 outline-orange-500"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <FaSearch className="text-lg text-orange-500 absolute top-1/2 transform -translate-y-1/2 right-3" />
        </div>
        <nav>
          <NavList>
            {/* Search button */}
            <li>
              <button
                type="button"
                className="p-2 bg-tertiary rounded-full md:hidden"
                title="Search"
                onClick={() => setActiveSearch(!activeSearch)}
              >
                <FaSearch className="text-lg text-orange-500" />
              </button>
            </li>
            {/* Tags */}
            <li>
              <button
                type="button"
                className="p-2 bg-tertiary rounded-full"
                title="Tags"
              >
                <FaTags className="text-lg text-orange-500" />
              </button>
            </li>
            {/* Profile */}
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
      {/* Search bar */}
      {activeSearch && (
        <div className="absolute top-0 bottom-0 container flex items-center gap-x-2 bg-secondary">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full bg-tertiary ps-2 pe-10 py-1 rounded-md border border-gray-700 outline-orange-500"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <FaSearch className="text-lg text-orange-500 absolute top-1/2 transform -translate-y-1/2 right-3" />
          </div>
          <button type="button" onClick={() => setActiveSearch(!activeSearch)}>
            <IoMdClose
              className="text-orange-500 text-2xl font-bold"
              onClick={() => setSearch("")}
            />
          </button>
        </div>
      )}
      <LoadingBar showFastActions />
    </header>
  );
};

export default Header;
