import React, { useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";

const Auth = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div className="mt-[20px]">
        <h1>CAR-MANIAC</h1>
      </div>
      {/* everything */}
      <div className="bg-gray-100 mt-[10%] p-[15px] w-[98%] md:w-[60%] m-auto">
        <div className="mb-[20px]">{toggle ? <Register /> : <Login />}</div>
        {toggle ? (
          <div className="flex flex-wrap  justify-between items-center">
            <span>
              Not new Here ?{" "}
              <span
                onClick={() => setToggle(false)}
                className="cursor-pointer underline font-bold"
              >
                Sign in
              </span>
            </span>

            <p className="cursor-pointer">Forgot Password ?</p>
          </div>
        ) : (
          <div className="flex flex-wrap  justify-between items-center">
            <span>
              Are you new Here ?{" "}
              <span
                onClick={() => setToggle(true)}
                className="cursor-pointer underline font-bold"
              >
                Create Account
              </span>
            </span>

            <p className="cursor-pointer">Register Other way ?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
