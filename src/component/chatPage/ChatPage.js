import React from "react";
import ChatBoxBodySidebar from "./ChatBoxBodySidebar";
import ChatComponent from "./ChatComponent";
import ControlSidebar from "./ControlSidebar";
import Header from "./Header";
import LeftSide from "./LeftSide";
import MainSidebar from "./MainSidebar";
import RightSide from "./RightSide";
import StickyToolbar from "./StickyToolbar";

const ChatPage = () => {
  return (
    <div>
      <div>
        <div className="hold-transition light-skin theme-primary fixed sidebar-collapse">
          <div className="wrapper">
            <div id="loader" />
            <Header />
            <MainSidebar />
            <div className="content-wrapper">
              <div className="container-full">
                <section className="content">
                  <div className="row">
                    <LeftSide />
                    <div className="col-lg-9 col-12">
                      <div className="row">
                        <ChatComponent />
                        <RightSide />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <ControlSidebar />
            <div className="control-sidebar-bg" />
          </div>
          <StickyToolbar />
          <ChatBoxBodySidebar />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
