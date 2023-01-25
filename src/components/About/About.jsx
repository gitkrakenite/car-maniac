import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutWrapper">
      <div className="firstAbout">
        <div className="firstItemText">
          <p>
            <span>Who Are We </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            earum eaque est possimus quibusdam enim culpa ducimus voluptate
            dolor tenetur delectus inventore dolorum ipsum ut fuga sunt, harum
            magnam quos laborum error explicabo! Ipsa perspiciatis unde
            doloribus sunt dolor veniam est ducimus odit temporibus ad, eligendi
            voluptas ea laboriosam ut.
          </p>
        </div>
        <div className="firstItemImg">
          <img
            src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
      </div>
      <div className="secAbout">
        <div className="secItemImg">
          <img
            src="https://images.pexels.com/photos/8986148/pexels-photo-8986148.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>

        <div className="secItemText">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
            inventore? Officiis fuga voluptas sint voluptates quas distinctio
            ratione non eaque.
          </p>
          <p>Want to Join Us ?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
