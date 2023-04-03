
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/biotec_logo.png'

function Header() {

          return (
                    <>
                              <header className="header header-section" id="header">
                                        <nav className="navbar navbar-expand-lg navbar-light">
                                                  <div className="container d-none d-lg-block">
                                                            <button
                                                                      className="navbar-toggler"
                                                                      type="button"
                                                                      data-bs-toggle="collapse"
                                                                      data-bs-target="#navbarTogglerDemo01"
                                                                      aria-controls="navbarTogglerDemo01"
                                                                      aria-expanded="false"
                                                                      aria-label="Toggle navigation"
                                                            >
                                                                      <span className="navbar-toggler-icon"></span>
                                                            </button>
                                                            <div
                                                                      className="collapse navbar-collapse justify-content-between"
                                                                      id="navbarTogglerDemo01"
                                                            >
                                                                      <Link className="navbar-brand" to={"/"}>
                                                                                <img alt="biotec_logo" className="header_logo" src={logo} style={{ width: "65px" }} />
                                                                      </Link>

                                                            </div>
                                                  </div>


                                        </nav>
                              </header>


                    </>
          );
}

export default Header;
