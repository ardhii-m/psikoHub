import React from "react";
import Navbar from "../../components/Navbar";
import Dok from "/assets/Dok.png";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-4 bg-[#55ad9b] justify-center h-[calc(100vh-6rem)] md:h-[calc(100vh-6.5rem)]">
        <div className="flex flex-row gap-8 mt-8">
          <div className="hidden md:flex md:flex-row h-[60%] w-96">
            <img src={Dok} alt="" />
          </div>
          <div className="bg-[#d8efd3] text-[#4b4b4b] w-96 h-96 mt-10 flex flex-col items-center p-10 rounded-lg ">
            <h1 className="font-medium text-xl md:text-2xl">Login</h1>
            <form className="flex flex-col gap-3 mt-4 w-full">
              <div className="">
                <p>Email</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="py-2 px-3 w-full border-none rounded-md"
                />
              </div>
              <div className="">
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  className="py-2 px-3 w-full border-none rounded-md"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#55ad9b] py-2 px-8 rounded-md text-[#d8efd3] w-[50%] my-8"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="">
              Belum punya akun?{" "}
              <a href="/register">
                <span className="font-semibold mb-8">Register</span>
              </a>{" "}
              yuk!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
