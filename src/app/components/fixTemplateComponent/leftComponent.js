import React from "react";

const LeftColumn = () => {
  return (
    <div className="p-4 w-fit">
      {/* Conference Tracks */}
      <div className="">
        <h3 className=" font-bold">Conference Topics</h3>
        <ul className="list-disc list-inside text-sm">
          <li> Heat and Mass Transfer</li>
          <li>Mechatronics</li>
          <li> Material Engineering</li>
          <li> Design and Manufacturing </li>
          <li>Technology</li>
          <li> Noise and Vibration</li>
          <li> Energy Engineering</li>
          <li> Fracture and Damage Mechanics</li>
          <li>Micro- and nano electromechanical systems Electric Vehicle</li>
          <li>Biomechanical engineering</li>
          <li> Automobile Engineering</li>
          <li>Robotics and Drone Technologies</li>
        </ul>
        <a href="/Confrence/Tracks">
          <p className="text-center mt-2 cursor-pointer bg-blue-500 font-semibold text-black py-2 rounded-lg">
            View all Tracks
          </p>
        </a>
      </div>

      {/* Conference Highlights */}
      <div className="mt-4 p-4 rounded">
        <h3 className="text-lg font-bold">Conference Benefites</h3>
        <ul className="list-disc list-inside  text-sm">
          <li>INTERNATIONAL KEYNOTE ADDRESS.</li>
          <li> HYBRID MODE OF PRESENTATIONS.</li>
          <li className="uppercase">
            Publication opportunities in conference proceedings.
          </li>
          <li> E-CERTIFICATE OF PARTICIPATION.</li>
          <li>BEST PAPER AWARD.</li>
          <li className="uppercase">
            Selected papers will be published in Scopus Indexed Journal.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftColumn;
