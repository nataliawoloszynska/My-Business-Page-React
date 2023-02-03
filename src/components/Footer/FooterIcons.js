import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterIcons = () => {
  return (
    <div className="icons">
      <a href="#">
        <FontAwesomeIcon icon={faFacebookSquare} className="fa-brands" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} className="fa-brands" />
      </a>
    </div>
  );
};

export default FooterIcons;
