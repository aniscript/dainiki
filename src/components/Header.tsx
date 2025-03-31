import Avatar from "./Avatar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="absolute top-0 left-0">
      <div className="flex justify-between items-center w-screen py-4 px-6">
        <Logo />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
