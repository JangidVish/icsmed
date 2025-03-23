import React from "react";

const LeftColumn = () => {
  return (
    <div className="  p-4  mx-auto">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqjEa5wRic4sDCP1Zu2IJAGjlNDv5r_CkjjHxI57COhhG6-A/viewform">
        <button className="bg-blue-500  py-2 px-4 w-full rounded hover:bg-blue-600 font-semibold cursor-pointer">
          Register Now
        </button>
      </a>

      {/* Conference Tracks */}
      <div className="mt-4 p-2 rounded">
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
          <li>Embedded Systems and IoT</li>
          <li>Robotics and Drone Technologies</li>
          <li>Multidisciplinary</li>
        </ul>
      </div>

      {/* Conference Highlights */}
      <div className="mt-4 p-4 rounded">
        <h3 className="text-lg font-bold">Conference Benefites</h3>
        <ul className="list-disc list-inside  text-sm">
          <li>INTERNATIONAL KEYNOTE ADDRESS.</li>
          <li> HYBRID MODE OF PRESENTATIONS.</li>
          <li>Publication opportunities in conference proceedings.</li>
          <li>
            SELECTED PAPERS WILL BE PUBLISHED IN SCOPUS INDEXED PROCEEDINGS.
          </li>
          <li> E-CERTIFICATE OF PARTICIPATION.</li>
          <li>BEST PAPER AWARD.</li>
          <li>E-PROCEEDINGS WITH ISBN/ISSN/DOI.</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftColumn;
