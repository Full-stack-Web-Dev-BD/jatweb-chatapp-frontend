import React from "react";

const LeftSide = () => {
  return (
    <div className="col-lg-3 col-12">
      <div className="box bg-light" id="chat-bx" style={{ height: "100%" }}>
        <div className="box-header bg-white">
          <div
            className="
        d-flex
        justify-content-between
        align-items-center
      "
          >
            <p className="fs-18 mb-0 d-lg-none d-block">
              <a href="#" id="cht-btn" className="hover-primary">
                <i className="fa fa-navicon" />
              </a>
            </p>
            <p className="fs-18 mb-0">
              <a href="#" className="hover-primary">
                <i className="fa fa-comment" />
              </a>
            </p>
            <p className="fs-18 mb-0">
              <a href="#" className="hover-primary">
                <i className="fa fa-phone" />
              </a>
            </p>
            <p className="fs-18 mb-0">
              <a href="#" className="hover-primary">
                <i className="fa fa-envelope" />
              </a>
            </p>
            <p className="fs-18 mb-0">
              <a href="#" className="hover-primary">
                <i className="fa fa-group" />
              </a>
            </p>
            <p className="fs-18 mb-0">
              <a href="#" className="hover-primary">
                <img
                  alt="Profile"
                  src="../images/avatar/1.jpg"
                  className="avatar"
                />
              </a>
            </p>
          </div>
        </div>
        <div
          className="box-body"
          style={{
            overflow: "auto",
            width: "auto",
            height: "550px",
          }}
        >
          <div
            className="
        d-flex
        justify-content-between
        align-items-center
        mb-20
      "
          >
            <h4 className="box-title">Chats</h4>
            <p className="fs-24 mb-0">
              <a href="#" className="hover-primary">
                <i className="fa fa-plus-circle" />
              </a>
            </p>
          </div>
          <ul className="nav nav-tabs customtab nav-justified" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#messages"
                role="tab"
              >
                Direct
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#contacts"
                role="tab"
              >
                Group
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#group"
                role="tab"
              >
                Public
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div
              className="tab-pane active"
              id="messages"
              role="tabpanel"
              style={{
                overflow: "hidden",
                width: "auto",
                height: "500px",
              }}
            >
              <div className="lookup lookup-sm lookup-right my-20">
                <input
                  type="text"
                  name="s"
                  placeholder="Search"
                  className="w-p100"
                />
              </div>
              <div className="chat-box-one-side2">
                <div className="media-list media-list-hover">
                  <div
                    className="
                media
                bg-white
                box-shadowed
                mb-15
                rounded
              "
                  >
                    <a className="align-self-center me-0" href="#">
                      <img
                        className="avatar avatar-lg"
                        src="../images/avatar/2.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p>
                        <a className="hover-primary" href="#">
                          <strong>Mical Clark</strong>
                        </a>
                        <span className="float-end fs-10">10:00pm</span>
                      </p>
                      <p>Nullam facilisis velit.</p>
                    </div>
                  </div>
                  <div
                    className="
                media
                bg-white
                box-shadowed
                mb-15
                rounded
              "
                  >
                    <a className="align-self-center me-0" href="#">
                      <img
                        className="avatar avatar-lg"
                        src="../images/avatar/3.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p>
                        <a className="hover-primary" href="#">
                          <strong>Colin Nathan</strong>
                        </a>
                        <span className="float-end fs-10">10:00pm</span>
                      </p>
                      <p>Nullam facilisis velit.</p>
                    </div>
                  </div>
                  <div
                    className="
                media
                bg-white
                box-shadowed
                mb-15
                rounded
              "
                  >
                    <a className="align-self-center me-0" href="#">
                      <img
                        className="avatar avatar-lg"
                        src="../images/avatar/4.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p>
                        <a className="hover-primary" href="#">
                          <strong>Nathan Johen</strong>
                        </a>
                        <span className="float-end fs-10">10:00pm</span>
                      </p>
                      <p>Nullam facilisis velit.</p>
                    </div>
                  </div>
                  <div
                    className="
                media
                bg-white
                box-shadowed
                mb-15
                rounded
              "
                  >
                    <a className="align-self-center me-0" href="#">
                      <img
                        className="avatar avatar-lg"
                        src="../images/avatar/5.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p>
                        <a className="hover-primary" href="#">
                          <strong>Semi Doe</strong>
                        </a>
                        <span className="float-end fs-10">10:00pm</span>
                      </p>
                      <p>Nullam facilisis velit.</p>
                    </div>
                  </div>
                  <div
                    className="
                media
                bg-white
                box-shadowed
                mb-15
                rounded
              "
                  >
                    <a className="align-self-center me-0" href="#">
                      <img
                        className="avatar avatar-lg"
                        src="../images/avatar/6.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p>
                        <a className="hover-primary" href="#">
                          <strong>Mical</strong>
                        </a>
                        <span className="float-end fs-10">10:00pm</span>
                      </p>
                      <p>Nullam facilisis velit.</p>
                    </div>
                  </div>
                  <div
                    className="
                media
                bg-white
                box-shadowed
                mb-15
                rounded
              "
                  >
                    <a className="align-self-center me-0" href="#">
                      <img
                        className="avatar avatar-lg"
                        src="../images/avatar/7.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p>
                        <a className="hover-primary" href="#">
                          <strong>Johen Doe</strong>
                        </a>
                        <span className="float-end fs-10">10:00pm</span>
                      </p>
                      <p>Nullam facilisis velit.</p>
                    </div>
                  </div>
                  <div
                    className="
                media
                bg-white
                box-shadowed
                mb-15
                rounded
              "
                  >
                    <a className="align-self-center me-0" href="#">
                      <img
                        className="avatar avatar-lg"
                        src="../images/avatar/2.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="media-body">
                      <p>
                        <a className="hover-primary" href="#">
                          <strong>Nathan</strong>
                        </a>
                        <span className="float-end fs-10">10:00pm</span>
                      </p>
                      <p>Nullam facilisis velit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="contacts" role="tabpanel">
              <div
                className="
            lookup lookup-sm lookup-right
            d-none d-lg-block
            my-20
          "
              >
                <input
                  type="text"
                  name="s"
                  placeholder="Search"
                  className="w-p100"
                />
              </div>
              <div className="chat-box-one-side">
                <div className="media-list media-list-hover">
                  <div className="media py-10 px-0 align-items-center">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img src="../images/avatar/1.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          Sarah Kortney
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="media py-10 px-0 align-items-center">
                    <a className="avatar avatar-lg status-danger" href="#">
                      <img src="../images/avatar/2.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          Tommy Nash
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="media py-10 px-0 align-items-center">
                    <a className="avatar avatar-lg status-warning" href="#">
                      <img src="../images/avatar/3.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          Kathryn Mengel
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="media py-10 px-0 align-items-center">
                    <a className="avatar avatar-lg status-primary" href="#">
                      <img src="../images/avatar/4.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          Mayra Sibley
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="media py-10 px-0 align-items-center">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img src="../images/avatar/1.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          Tommy Nash
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="media py-10 px-0 align-items-center">
                    <a className="avatar avatar-lg status-danger" href="#">
                      <img src="../images/avatar/2.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          Williemae Lagasse
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="group" role="tabpanel">
              <div
                className="
            lookup lookup-sm lookup-right
            d-none d-lg-block
            my-20
          "
              >
                <input
                  type="text"
                  name="s"
                  placeholder="Search"
                  className="w-p100"
                />
              </div>
              <div className="chat-box-one-side">
                <div className="media-list media-list-hover">
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img src="../images/avatar/1.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Tyler</strong>
                        </a>
                      </p>
                      <p>Praesent tristique diam...</p>
                      <span>Just now</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-danger" href="#">
                      <img src="../images/avatar/2.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Luke</strong>
                        </a>
                      </p>
                      <p>Cras tempor diam ...</p>
                      <span>33 min ago</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-warning" href="#">
                      <img src="../images/avatar/3.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-primary" href="#">
                      <img src="../images/avatar/4.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img src="../images/avatar/1.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Tyler</strong>
                        </a>
                      </p>
                      <p>Praesent tristique diam...</p>
                      <span>Just now</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-danger" href="#">
                      <img src="../images/avatar/2.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Luke</strong>
                        </a>
                      </p>
                      <p>Cras tempor diam ...</p>
                      <span>33 min ago</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-warning" href="#">
                      <img src="../images/avatar/3.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-primary" href="#">
                      <img src="../images/avatar/4.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
