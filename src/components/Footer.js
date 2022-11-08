import React from "react";

const Footer = () => {
  return (
    <div
      style={{ marginTop: "50px", marginBottom: "50px" }}
      className="card text-center fixed"
    >
      <div style={{ backgroundColor: "#ebf1f2" }} className="card-body ">
        <h4 className="card-title">My Personal News App</h4>
        <p className="card-text">
          © 2022 Shobhit Rajvanshi. All rights reserved.
        </p>

        <h5>Follow Me On</h5>
        <ul style={{ listStyle: "none" }}>
          <li>
            <a href="https://www.linkedin.com/in/shobhit-rajvanshi/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.facebook.com/Sh0BhITraj.shbht" target="_blank">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/shobhit_rajj/" target="_blank">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
