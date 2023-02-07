import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterIcons = () => {
  return (
    <div className="icons">
      <a href="www.facebook.com">
        <FontAwesomeIcon icon={faFacebookSquare} className="fa-brands" />
      </a>
      <a href="www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} className="fa-brands" />
      </a>
    </div>
  );
};

export default FooterIcons;
