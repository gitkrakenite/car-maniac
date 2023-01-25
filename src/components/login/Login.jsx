import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [see, setSee] = useState(false);

  return (
    <div>
      <div className="mb-[10px] text-center">
        <h1 className="text-2xl font-bold">
          Rent a car today and Get the best deals
        </h1>
        <p className="mt-[10px] text-lg">
          Refer someone and win Ksh.100 per referral
        </p>
      </div>
      <form className="flex flex-col gap-[15px]">
        <input
          className="bg-transparent p-[10px] outline-none rounded-md"
          style={{ border: "1px solid gray" }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />

        <div className="flex flex-wrap justify-between items-center gap-[30px]">
          <div className="flex flex-col gap-[15px] flex-[0.8]">
            <input
              type={see ? "text" : "password"}
              className="bg-transparent p-[10px] outline-none rounded-md"
              style={{ border: "1px solid gray" }}
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
            />
          </div>
          <div className="flex-[0.2] ">
            <span
              onClick={(e) => setSee(!see)}
              className="items-end text-left justify-end cursor-pointer font-bold "
            >
              See
            </span>
          </div>
        </div>
        <button
          className="bg-blue-600 p-[10px] rounded-md text-slate-100"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
