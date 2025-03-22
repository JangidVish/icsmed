import React from "react";

const LeftColumn = () => {
  return (
    <div className="  p-4  mx-auto">
      <button className="bg-blue-500  py-2 px-4 w-full rounded hover:bg-blue-600 font-semibold">
        Register Now
      </button>

      {/* Conference Tracks */}
      <div className="mt-4 p-2 rounded">
        <h3 className=" font-bold">Conference Tracks</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Big Data and Data Analytics</li>
          <li>Information and Cyber Security</li>
          <li>Edge and Cloud Computing</li>
          <li>Embedded Systems and IoT</li>
          <li>Robotics and Drone Technologies</li>
          <li>Multidisciplinary</li>
        </ul>
      </div>

      {/* Conference Highlights */}
      <div className="mt-4 p-4 rounded">
        <h3 className="text-lg font-bold">Conference Highlights</h3>
        <ul className="list-disc list-inside  text-sm">
          <li>Present your research papers and receive feedback.</li>
          <li>Learn new trends in STEM from peer presentations.</li>
          <li>Publication opportunities in conference proceedings.</li>
          <li>Compete for the Best Paper Award in each track.</li>
          <li>Receive a Certificate of Participation.</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftColumn;
