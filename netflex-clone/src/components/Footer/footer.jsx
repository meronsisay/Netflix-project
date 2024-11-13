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
      <div className="d-md-flex justify-content-md-around mt-3 w-75 mx-auto">
        <ul className="text-decoration-none">
          <li>
            <a href="#">Audio description</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Legal Notice</a>
          </li>
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
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
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
        <span>Service Code</span>
      </div>
      <div className="copy">&copy; 1997-2024 Netflix, Inc.</div>
    </>
  );
};

export default Footer;
