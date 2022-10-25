import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaPinterest,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousels from "../Carousels/Carousels";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with github
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="mt-4">Find us on</h5>
        <ListGroup className="border ">
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaPinterest></FaPinterest> Pinterest
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousels></Carousels>
      </div>
    </div>
  );
};

export default RightSideNav;
