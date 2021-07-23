import React from "react";

const Header = () => {
  return (
    <div>
      <header className="main-header">
        <div className="d-flex align-items-center logo-box justify-content-start">
          {/* Logo */}
          <a href="index.html" className="logo">
            {/* logo*/}
            <div className="logo-mini w-50">
              <span className="light-logo">
                <img src="./images/logo-letter.png" alt="logo" />
              </span>
              <span className="dark-logo">
                <img src="./images/logo-letter.png" alt="logo" />
              </span>
            </div>
            <div className="logo-lg">
              <span className="dark-logo">
                <img src="./images/logo-light-text.png" alt="logo" />
              </span>
            </div>
          </a>
        </div>
        {/* Header Navbar */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <div className="app-menu">
            <ul className="header-megamenu nav">
              <li className="btn-group nav-item">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link push-btn"
                  data-toggle="push-menu"
                  role="button"
                >
                  <img
                    src="../images/svg-icon/collapse.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a
                  id="chat-popup"
                  href="#"
                  className="waves-effect waves-light nav-link svg-bt-icon"
                  title
                >
                  <img
                    src="../images/svg-icon/sms.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
              </li>
              <li className="btn-group nav-item d-none d-lg-inline-block">
                <a
                  href="mailbox.html"
                  className="waves-effect waves-light nav-link svg-bt-icon"
                  title
                >
                  <img
                    src="../images/svg-icon/sidebar-menu/mailbox.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a
                  href="extra_taskboard.html"
                  className="waves-effect waves-light nav-link svg-bt-icon"
                  title
                >
                  <img
                    src="../images/svg-icon/correct.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a
                  href="extra_calendar.html"
                  className="waves-effect waves-light nav-link svg-bt-icon"
                  title
                >
                  <img
                    src="../images/svg-icon/event.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
              </li>
              <li className="btn-group nav-item d-none d-lg-inline-block">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link svg-bt-icon"
                  title
                >
                  <img
                    src="../images/svg-icon/star.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-custom-menu r-side">
            <ul className="nav navbar-nav">
              <li
                className="
                btn-group
                nav-item
                d-md-none d-block d-lg-inline-block
              "
              >
                <a
                  href="#"
                  data-provide="fullscreen"
                  className="waves-effect waves-light nav-link full-screen"
                  title="Full Screen"
                >
                  <img
                    src="../images/svg-icon/fullscreen.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
              </li>
              <li className="btn-group d-md-inline-flex d-none">
                <div className="app-menu">
                  <div className="search-bx mx-5">
                    <form>
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn"
                            type="submit"
                            id="button-addon3"
                          >
                            <img
                              src="../images/svg-icon/search.svg"
                              className="img-fluid"
                              alt="search"
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
              {/* Notifications */}
              <li className="dropdown notifications-menu">
                <a
                  href="#"
                  className="waves-effect waves-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  title="Notifications"
                >
                  <img
                    src="../images/svg-icon/notifications.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
                <ul className="dropdown-menu animated bounceIn">
                  <li className="header">
                    <div className="p-20">
                      <div className="flexbox">
                        <div>
                          <h4 className="mb-0 mt-0">Notifications</h4>
                        </div>
                        <div>
                          <a href="#" className="text-danger">
                            Clear All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul className="menu sm-scrol">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-info" /> Curabitur id
                          eros quis nunc suscipit blandit.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-warning text-warning" /> Duis
                          malesuada justo eu sapien elementum, in semper diam
                          posuere.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-danger" /> Donec at
                          nisi sit amet tortor commodo porttitor pretium a erat.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart text-success" />
                          In gravida mauris et nisi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-danger" /> Praesent eu
                          lacus in libero dictum fermentum.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-primary" /> Nunc
                          fringilla lorem
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-success" /> Nullam
                          euismod dolor ut quam interdum, at scelerisque ipsum
                          imperdiet.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>
              {/* User Account*/}
              <li className="dropdown user user-menu">
                <a
                  href="#"
                  className="waves-effect waves-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  title="User"
                >
                  <img
                    src="../images/svg-icon/user.svg"
                    className="rounded svg-icon"
                    alt
                  />
                </a>
                <ul className="dropdown-menu animated flipInX">
                  {/* User image */}
                  <li
                    className="user-header bg-img"
                    style={{
                      backgroundImage: "url(../images/user-info.jpg)",
                    }}
                    data-overlay={3}
                  >
                    <div className="flexbox align-self-center">
                      <img
                        src="../images/avatar/7.jpg"
                        className="float-start rounded-circle"
                        alt="User Image"
                      />
                      <h4 className="user-name align-self-center">
                        <span>Samuel Brus</span>
                        <small>samuel@gmail.com</small>
                      </h4>
                    </div>
                  </li>
                  {/* Menu Body */}
                  <li className="user-body">
                    <a className="dropdown-item" href="javascript:void(0)">
                      <i className="ion ion-person" /> My Profile
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      <i className="ion ion-bag" /> My Balance
                    </a>
                    <a className="dropdown-item" href="javascript:void(0)">
                      <i className="ion ion-email-unread" /> Inbox
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="javascript:void(0)">
                      <i className="ion ion-settings" /> Account Setting
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="javascript:void(0)">
                      <i className="ion-log-out" /> Logout
                    </a>
                    <div className="dropdown-divider" />
                    <div className="p-10">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-sm btn-rounded btn-success"
                      >
                        View Profile
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
              <li>
                <a
                  href="#"
                  data-toggle="control-sidebar"
                  title="Setting"
                  className="waves-effect waves-light"
                >
                  <img
                    src="../images/svg-icon/settings.svg"
                    className="img-fluid svg-icon"
                    alt
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
