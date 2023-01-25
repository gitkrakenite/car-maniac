import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [national, setNational] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [see, setSee] = useState(false);

  return (
    <div>
      <div className="mb-[10px] text-center">
        <h1 className="text-2xl font-bold">
          Create A free Account and Get the best deals
        </h1>
        <p className="mt-[10px] text-lg">
          Refer someone and win Ksh.100 per referral
        </p>
      </div>
      <form className="flex flex-col gap-[15px]">
        <input
          className="bg-transparent p-[10px] outline-none rounded-md"
          style={{ border: "1px solid gray" }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          className="bg-transparent p-[10px] outline-none rounded-md"
          style={{ border: "1px solid gray" }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
        <input
          className="bg-transparent p-[10px] outline-none rounded-md"
          style={{ border: "1px solid gray" }}
          type="text"
          value={national}
          onChange={(e) => setNational(e.target.value)}
          placeholder="Enter your national ID no"
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
            <input
              className="bg-transparent p-[10px] outline-none rounded-md"
              style={{ border: "1px solid gray" }}
              type={see ? "text" : "password"}
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              placeholder="Confirm password"
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
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
