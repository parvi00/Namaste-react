import { Link } from "react-router-dom";
import { Button } from "@cred/neopop-web/lib/components";
import { Back } from '@cred/neopop-web/lib/components';

const Header = (props) => {
  return (
    <>
    
      <div className="">
        <div className=" bg-body-tertiary shadow-lg navbar-edit fixed-top bg-dark">
          <div>

            <Link to="/">
              <Button
                variant="primary"
                kind="flat"
                size="big"
                edgeColors={{ bottom: "red" }}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="primary" kind="flat" size="big">
                About Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" kind="flat" size="big">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
