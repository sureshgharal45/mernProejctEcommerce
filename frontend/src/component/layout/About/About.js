import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/suresh-gharal-5369021a7/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dhrzpe1vt/image/upload/v1692456702/avatars/vz0arlvzymei2xtdwdii.png"
              alt="Founder"
            />
            <Typography>Suresh Gharal</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin Profile
            </Button>
            <span>This is a sample wesbite made by @sureshgharal.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.youtube.com/@sureshgharal4479" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/sureshgharal45" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
