import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [see, setSee] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess && user) {
      toast({
        title: "Login Success",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, [isSuccess, user]);

  useEffect(() => {
    if (isError) {
      toast({
        title: "Invalid credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }, [isError]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Details missing",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    } else {
      try {
        const userData = { email, password };
        // console.log(profile);
        dispatch(login(userData));
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

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
      <form className="flex flex-col gap-[15px]" onSubmit={handleLogin}>
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
          onClick={handleLogin}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
