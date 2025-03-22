import React from "react";

const HeaderComponent = () => {
  return (
    <div
      className="container-fluid bg-[#0284A8] text-white flex justify-around items-center pb-2"
      id="hb1"
    >
      <div className="row mt-6 flex flex-row">
        {/* Left Logo */}
        <div className="col-12 col-sm-6 col-md-3 m-auto order-1 order-sm-1">
          <div className="text-center p-2">
            <a href="https://www.journalpressindia.com/">
              <img
                src="https://www.journalpressindia.com/website/img/logo1.png"
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
              Emerging Technologies and Computing (ICETC - 2025)
            </p>
            <p className="text-blue-200 text-sm">
              <span className="font-semibold">Hybrid Mode</span> (Online +
              Offline); 06th & 07th February 2025
            </p>

            <p className="text-blue-200 text-sm">
              <strong>Venue:</strong> PCET Pimpri Chinchwad College of
              Engineering and Research, Pune-412101, Maharashtra, India
            </p>
          </div>
        </div>

        {/* Right Logo */}
        <div className="col-12 col-sm-6 col-md-3 m-auto order-3 order-sm-3">
          <div className="text-center p-2">
            <img
              src="https://www.journalpressindia.com/siteadmin/upload/1730523025_conference%20logo.jpeg"
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
