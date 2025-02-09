import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".header")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="logontitle">
        <div className="logo">
          <a
            href="https://www.vlab.andcollege.du.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="logo.png" alt="VLab" width={50} height={50} />
          </a>
        </div>

        {/* Title */}
        <h1 className="vlab">V-Lab@ANDC</h1>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="https://www.vlab.andcollege.du.ac.in" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a
              href="https://www.vlab.andcollege.du.ac.in#labs_section"
              onClick={toggleMenu}
            >
              Labs
            </a>
          </li>
          <li>
            <a
              href="https://www.vlab.andcollege.du.ac.in#team"
              onClick={toggleMenu}
            >
              Team
            </a>
          </li>
          <li>
            <a href="https://www.andcollege.du.ac.in" onClick={toggleMenu}>
              College Website
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
