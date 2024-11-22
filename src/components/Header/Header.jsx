import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="navbar" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#Nextflex">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Netflex Logo"
            style={{ height: "4vh", width: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#TVshows">TV Shows</Nav.Link>
            <Nav.Link href="#Movies">Movies</Nav.Link>
            <Nav.Link href="#Latest">Latest</Nav.Link>
            <Nav.Link href="#MyList">My List</Nav.Link>
            <Nav.Link href="#Browse by Languages">Browse by Languages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
        <Nav className="d-none d-md-flex">
          <Nav.Link href="#search">
            <SearchIcon />
          </Nav.Link>
          <Nav.Link href="#notification">
            <NotificationsNoneIcon />
          </Nav.Link>
          <Nav.Link href="#profile">
            <AccountCircleIcon />
          </Nav.Link>
          <Nav.Link href="#dropdown">
            <ArrowDropDownIcon />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
