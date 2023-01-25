import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="pt-4 flex justify-between items-center">
      {/* logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://img.icons8.com/small/512/scream.png"
          className="w-5 h-5 object-cover"
          alt=""
        />
        <h2 className="text-lg font-bold cursor-pointer">CARMANIAC</h2>
      </div>
      {/* menu */}
      <div className="flex gap-16 items-center">
        {/* menu items */}
        <div>
          <ul className="flex gap-8">
            <li className=" hidden lg:block cursor-pointer  transition-all">
              Home
            </li>
            <li className=" hidden lg:block cursor-pointer ">Cars</li>
            <li className=" hidden lg:block cursor-pointer ">Pricing</li>
            <li className=" hidden lg:block cursor-pointer ">About</li>
            <li className="hidden lg:block cursor-pointer ">Contact Us</li>
            <Link to="/cart">
              <li className=" cursor-pointer flex ">
                <img
                  src="https://img.icons8.com/windows/512/car-roof-box.png"
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                />
                <sup
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: "50%",
                  }}
                >
                  0
                </sup>
              </li>
            </Link>
          </ul>
        </div>
        {/* login */}
        <Link
          className="cursor-pointer px-[30px] py-[10px] bg-blue-600 text-white rounded-md"
          to="/auth"
        >
          <div>
            <h3>Login</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
