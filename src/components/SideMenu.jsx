import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Row } from "react-bootstrap";

const SideMenu = () => {
  const show = "col-sm-6";
  return (
    <Row>
      <div className={show}>
        <div className="d-flex bg-primary justify-content-end">
          <div className="w-25">
            <FontAwesomeIcon icon={faCircleChevronLeft} className="img-fluid" />
          </div>
        </div>
        <div className="bg-warning">
          <h1>SideMenu</h1>
        </div>
      </div>
    </Row>
  );
};

export default SideMenu;
