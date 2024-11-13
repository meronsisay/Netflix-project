import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  let icon = `image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg;`;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Nextflex">Netflex</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#TVshows">TV Shows</Nav.Link>
              <Nav.Link href="#Movies">Movies</Nav.Link>
              <Nav.Link href="#Latest">Latest</Nav.Link>
              <Nav.Link href="#MyList">My List</Nav.Link>
              <Nav.Link href="#Browse by Languages">
                Browse by Languages
              </Nav.Link>
            </Nav>
            <Nav>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
