import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="linked mt-3">
        <span>
          <FacebookOutlinedIcon />
        </span>
        <span>
          <InstagramIcon />
        </span>
        <span>
          <YouTubeIcon />
        </span>
      </div>
      <div className="d-md-flex justify-content-md-around mt-3 w-75">
        <ul className="text-decoration-none">
          <li>
            <a href="#">Audio description</a>
          </li>
          <li>
            <a href="#">investor relation</a>
          </li>
          <li>
            <a href="">Legal notice</a>
          </li>
          <a href=""></a>
        </ul>

        <div>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">cookie preferences</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Gift cards</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">cooperate Information</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="service">
        <span>service code</span>
      </div>
      <div className="copy">&copy; 1997-2024 Netflix, Inc.</div>
    </>
  );
};

export default Footer;
