import React from "react";
import Navbar from "../../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="bg-[#d8efd3] m-10 h-[100vh] rounded-lg py-4 flex flex-col md:flex-row md:h-[calc(100vh-15rem)] md:justify-around">
          <div className="flex flex-col justify-center items-center w-[50%] h-[50vh] md:mt-10 ">
            {/* Foto Profile */}
            <div className="w-32 h-32">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full border-4 border-indigo-500 shadow-lg"
              />
            </div>
            {/* Nama */}
            <h1 className="text-2xl font-bold text-[#4b4b4b] mt-4">John Doe</h1>
            {/* Riwayat */}
            <div className="bg-[#55ad9b] rounded-md h-[30vh] px-4">
              <h2 className="text-lg font-medium text-[#4b4b4b] mt-4">
                Riwayat Konsultasi
              </h2>
              <ol className=" text-[#4b4b4b] p-2">
                <li>13/10/24 No. booking A233145</li>
                <li>13/10/24 No. booking A233145</li>
              </ol>
              <hr />
              <div className="mt-8 flex flex-col gap-2">
                <button className="py-2 px-4 bg-[#d8efd3] rounded-md">
                  Edit Profile
                </button>
                <button className="py-2 px-4 bg-[#d8efd3] rounded-md">
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col text-[#4b4b4b] mb-auto w-[50%] h-[50vh] md:mt-20 md:mr-8">
            <form className="flex-col md:w-full">
              <div className="flex flex-col px-4 mt-4 md:flex-row md:gap-6">
                <div className="flex flex-col w-full">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="border border-[#55AD9B] rounded-md p-2 "
                  />
                </div>
                <div className="flex flex-col md:w-full">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="border border-[#55AD9B] rounded-md p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col px-4">
                <label>Email</label>
                <input
                  type="email"
                  className="border border-[#55AD9B] rounded-md p-2"
                />
                <label>Address</label>
                <input
                  type="text"
                  className="border border-[#55AD9B] rounded-md p-2"
                />
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="border border-[#55AD9B] rounded-md p-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
