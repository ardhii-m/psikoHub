import React from "react";
import Navbar from "../../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="bg-[#d8efd3] m-4 h-[120vh] rounded-lg flex items-center flex-col md:flex-row md:h-[calc(100vh-15rem)] md:justify-around">
          <div className="flex flex-col justify-center items-center w-[80%] h-[80vh]">
            {/* Foto Profile */}
            <div className="w-20 h-20 md:w-36 md:h-36">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full border-4 border-[#55ad9b] shadow-lg"
              />
            </div>
            {/* Nama */}
            <h1 className="text-2lg font-bold text-[#000] my-1 md:text-2xl">
              John Doe
            </h1>
            {/* Riwayat */}
            <div className="bg-[#55ad9b] rounded-md h-[50vh] w-[100%] px-2 md:w-[50%] md:h-[40vh]">
              <h2 className="text-sm font-medium text-[#000] mt-2 text-center">
                Riwayat Konsultasi
              </h2>
              <div className="h-[25vh] md:h-[20vh]">
                <ol className=" text-[#000] p-2 text-sm">
                  <li>13/10/24 No. booking A233145</li>
                  <li>13/10/24 No. booking A233145</li>
                </ol>
              </div>
              <hr />
              <div className="mt-4 flex flex-col gap-2">
                <button className="py-2 px-4 bg-[#d8efd3] rounded-md hover:bg-[#439080] hover:text-[#e0f2f1]">
                  Edit Profile
                </button>
                <button className="py-2 px-4 bg-[#d8efd3] rounded-md hover:bg-[#439080] hover:text-[#e0f2f1]">
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col text-[#000] mb-auto w-[100%] h-[50vh] md:mt-20 md:mr-8">
            <form className="flex-col md:w-full">
              <div className="flex flex-row mt-4 px-4 gap-4 items-center w-full md:flex-row md:gap-6">
                <div className="flex flex-col w-[50%]">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="border-2 border-[#55AD9B] bg-[#d8efd3] rounded-md w-[100%] h-8"
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="border-2 border-[#55AD9B] bg-[#d8efd3] rounded-md w-[100%] h-8"
                  />
                </div>
              </div>
              <div className="flex flex-col px-4">
                <label>Email</label>
                <input
                  type="email"
                  className="border-2 border-[#55AD9B] bg-[#d8efd3] rounded-md p-2 w-full h-8"
                />
                <label>Address</label>
                <input
                  type="text"
                  className="border-2 border-[#55AD9B] bg-[#d8efd3] rounded-md p-2 w-full h-8"
                />
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="border-2 border-[#55AD9B] bg-[#d8efd3] rounded-md p-2 w-full h-8"
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
