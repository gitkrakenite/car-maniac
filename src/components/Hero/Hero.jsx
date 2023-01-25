import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="heroContent">
        {/* text */}
        <div className="heroText">
          <h1>LUXURY CAR</h1>
          <h1>RENTALS</h1>
          <h4>FIND THE PERFECT CAR</h4>
          <h4>FOR RENT TODAY!</h4>
          <div className="heroSep"></div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quas cumque, provident neque repellendus quia possimus
              exercitationem laborum accusantium suscipit optio quae nulla? Esse
              vitae voluptate doloribus optio dicta vel. Repudiandae debitis
              temporibus maiores! Ipsam nostrum voluptatibus temporibus
              quibusdam nihil ipsa iure voluptates quia adipisci hic facere,
              dolorem quisquam iusto.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="heroImage">
          <img
            src="https://images.pexels.com/photos/1054211/pexels-photo-1054211.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
      </div>
      {/* herofooter */}
      <div className=" hidden lg:flex gap-[30px] items-end justify-end ">
        <div>
          <p className="font-bold">Best Price</p>
          <h2>2K per 20KM</h2>
          <span>Maximum range</span>
        </div>
        <div>
          <p className="font-bold">Ultra-Petrol</p>
          <h2>10% Full tank</h2>
          <span>Gets you Going</span>
        </div>
        <div>
          <p className="font-bold">High Performance</p>
          <h2>90% Durable</h2>
          <span>Comfy Stylish</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
