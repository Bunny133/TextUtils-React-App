import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar`}
      style={{
        color: props.mode.color,
        backgroundColor: props.mode.background,
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{
            color: props.mode.color,
            backgroundColor: props.mode.background,
          }}
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{
                  color: props.mode.color,
                  backgroundColor: props.mode.background,
                }}
                href="/"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="/"
                aria-disabled="true"
                style={{
                  color: props.mode.color,
                  backgroundColor: props.mode.background,
                }}
              >
                {props.about}
              </a>
            </li>
          </ul>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  about: "About Require",
};
