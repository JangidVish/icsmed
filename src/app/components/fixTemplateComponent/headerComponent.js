import React from "react";

const HeaderComponent = () => {
  return (
    <div
      className="container-fluid bg-[#0284A8] text-white flex justify-around items-center pb-2"
      id="hb1"
    >
      <div className="row mt-6 flex md:flex-row flex-col">
        {/* Left Logo */}
        <div className="col-12 col-sm-6 col-md-3 m-auto order-1 order-sm-1">
          <div className="text-center p-2 w-32">
            <a href="/">
              <img
                src="/Images/icsmed_logo.png"
                alt="Journal Press India Logo"
                className="img-fluid"
              />
            </a>
          </div>
        </div>

        {/* Conference Details */}
        <div className="col-12 col-md-6 order-2 order-md-2">
          <div className="text-center">
            <p className="text-yellow-400 text-lg font-bold">
              PCET's Pimpri Chinchwad College of Engineering and Research
            </p>
            <p className="text-blue-200 text-lg">
              Organizing International Conference on
            </p>
            <p className="text-yellow-400 text-xl font-bold italic">
              Sustainable Mechanical Engineering and Design (ICSMED - 2025)
            </p>
            <p className="text-blue-200 text-sm">
              <span className="font-semibold">Organized By:</span> Department of
              Mechanical Engineering
            </p>

            <p className="text-blue-200 text-sm">
              <strong>Venue:</strong> PCET Pimpri Chinchwad College of
              Engineering and Research, Pune-412101, Maharashtra, India
            </p>
          </div>
        </div>

        {/* Right Logo */}
        <div className="col-12 col-sm-6 col-md-3 m-auto order-3 order-sm-3">
          <div className="text-center p-2 w-32">
            <img
              src="/Images/pccoer_logo.webp"
              alt="Conference Logo"
              className="img-fluid w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
