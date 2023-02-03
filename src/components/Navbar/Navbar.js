import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import NavLinksList from "./NavLinksList";

const Navbar = () => {
  return (
    <div className="navbar content-container">
      <Logo />
      <DropdownMenu />
      <NavLinksList />
    </div>
  );
};

export default Navbar;
