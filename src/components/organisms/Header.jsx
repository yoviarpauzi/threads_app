import HeaderLogo from "../atoms/HeaderLogo";
import LoadingBar from "react-redux-loading-bar";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed w-screen bg-secondary shadow-sm">
      <div className="container flex justify-between items-center py-3">
        <HeaderLogo />
        <Nav />
      </div>
      <LoadingBar showFastActions />
    </header>
  );
};

export default Header;
