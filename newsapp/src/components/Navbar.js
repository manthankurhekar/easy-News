import React, { Component } from "react";
import News from "./News";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      news_type: "Business",
    };
  }

  render() {
    const handleClick = async (event) => {
      this.state.news_type = event.target.innerText;
    };

    return (
      <Router>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: 'black'}}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                NewsEater
              </Link>
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
                    <Link
                      className="nav-link"
                      to="/business"
                      onClick={(event) => handleClick(event)}
                    >
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/entertainment"
                      onClick={(event) => handleClick(event)}
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/general"
                      onClick={(event) => handleClick(event)}
                    >
                      General
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/health"
                      onClick={(event) => handleClick(event)}
                    >
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/science"
                      onClick={(event) => handleClick(event)}
                    >
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/sports"
                      onClick={(event) => handleClick(event)}
                    >
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/technology"
                      onClick={(event) => handleClick(event)}
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route
              path={`/`}
              element={<News key="general" news_type="General" />}
            />
            <Route
              path={`/general`}
              element={<News key="general" news_type="General" />}
            />
            <Route
              path={`/entertainment`}
              element={<News key="entertainment" news_type="Entertainment" />}
            />
            <Route
              path={`/business`}
              element={<News key="business" news_type="Business" />}
            />
            <Route
              path={`/health`}
              element={<News key="health" news_type="Health" />}
            />
            <Route
              path={`/science`}
              element={<News key="science" news_type="Science" />}
            />
            <Route
              path={`/sports`}
              element={<News key="sports" news_type="Sports" />}
            />
            <Route
              path={`/technology`}
              element={<News key="technology" news_type="Technology" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Navbar;
