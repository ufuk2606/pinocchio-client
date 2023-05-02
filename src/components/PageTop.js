import React from "react";

function PageTop({image, title, content}) {
  return (
    <div
      className="row page-top-image p-5"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="col-6 vh-100 m-auto mt-5 p-5">
        <div className="main-arasi"></div>
        <h1 className="home-title mt-5">{title}</h1>
        <h4 className="page-top pt-5">{content}</h4>
      </div>
    </div>
  );
}

export default PageTop;
