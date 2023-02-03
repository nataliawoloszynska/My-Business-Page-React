import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <FontAwesomeIcon icon={faBars} />
      <div className="dropdown-content">
        <a href="#about">o nas</a>
        <a href="#offer">oferta</a>
        <a className="inactive" href="#">
          kontakt
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
