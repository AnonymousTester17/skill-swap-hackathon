import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../util/UserContext";
import axios from "axios";

const UserProfileDropdown = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("/auth/logout");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      localStorage.removeItem("userInfo");
      setUser(null);
      navigate("/");
    }
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ display: "flex", alignItems: "center", cursor: "pointer", color: "var(--secondary-text)" }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          overflow: "hidden",
          marginRight: "10px",
        }}
      >
        <img src={user?.picture} alt="User Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      {children}
      &#x25bc;
    </div>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
      <Dropdown.Menu className={styles.userDropdownMenu}>
        <Dropdown.Item onClick={() => navigate(`/profile/${user.username}`)}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Header = ({ setShowLogin }) => {
  const { user } = useUser();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate(); // Add the useNavigate hook

  // A simple function to close the canvas for links that don't scroll
  const handleCloseOffcanvas = () => {
    setExpanded(false);
  };
  
  // This function will handle closing the menu and navigating
  const handleLinkClick = (e, hash) => {
    e.preventDefault(); // Stop the default link behavior to prevent the jump
    setExpanded(false); // Close the off-canvas menu immediately

    // Use a short delay to allow the menu to close before navigating.
    // This ensures the scroll behavior is smooth.
    setTimeout(() => {
      navigate(`/${hash}`); // Update the URL. This will trigger the scroll effect in LandingPage.jsx
    }, 300);
  };

  return (
    <>
      <Navbar
        key="md"
        expand="md"
        expanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
        className={styles.navbar}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ fontFamily: "Archivo Black, sans-serif", color: "var(--main)", fontWeight: 400 }}
          >
            SKILL SWAP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-md`}
                style={{ fontFamily: "Archivo Black, sans-serif", color: "var(--main)", fontWeight: 400 }}
              >
                SKILL SWAP
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`${styles.navContainer} justify-content-end flex-grow-1 align-items-center`}>
                <div className={`${styles.navLinks} d-flex`}>
                  <Nav.Link as={Link} to="/" className={styles.navLink} onClick={handleCloseOffcanvas}>
                    Home
                  </Nav.Link>
                  {user ? (
                    <>
                      <Nav.Link as={Link} to="/discover" className={styles.navLink} onClick={handleCloseOffcanvas}>
                        Discover
                      </Nav.Link>
                      <Nav.Link as={Link} to="/chats" className={styles.navLink} onClick={handleCloseOffcanvas}>
                        Your Chats
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      {/* MODIFIED LINKS USING THE NEW HANDLER */}
                      <Nav.Link
                        href="/#why-skill-swap"
                        className={styles.navLink}
                        onClick={(e) => handleLinkClick(e, "#why-skill-swap")}
                      >
                        Why SkillSwap
                      </Nav.Link>
                      <Nav.Link
                        href="/#about-us"
                        className={styles.navLink}
                        onClick={(e) => handleLinkClick(e, "#about-us")}
                      >
                        About Us
                      </Nav.Link>
                    </>
                  )}
                </div>
                {user ? (
                  <UserProfileDropdown />
                ) : (
                  <Nav.Link
                    onClick={() => {
                      setShowLogin(true);
                      handleCloseOffcanvas();
                    }}
                    className={styles.loginRegisterLink}
                    style={{
                      backgroundColor: "var(--main)",
                      borderRadius: "50px",
                      padding: "10px 20px",
                      fontWeight: "bold",
                      color: "var(--primary-bg)",
                      cursor: "pointer",
                    }}
                  >
                    Login/Register
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;