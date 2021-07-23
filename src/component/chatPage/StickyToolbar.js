import React from "react";

const StickyToolbar = () => {
  return (
    <div className="sticky-toolbar">
      <a
        id="chat-popup"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Live Chat"
        className="waves-effect waves-light btn btn-warning btn-flat btn-sm"
      >
        <span className="icon-Group-chat">
          <span className="path1" />
          <span className="path2" />
        </span>
      </a>
    </div>
  );
};

export default StickyToolbar;
