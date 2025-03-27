import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-4  overflow-hidden max-w-3xl">
      <h2 className="text-xl font-bold mb-4">Conference Tracks</h2>
      <ul className="space-y-2 list-disc list-inside">
        <li>Heat and Mass Transfer</li>
        <li>Mechatronics</li>
        <li>Material Engineering</li>
        <li>Additive and Digital Manufacturing</li>
        <li>Design and Manufacturing</li>
        <li>Technology</li>
        <li>Noise and Vibration</li>
        <li>Energy Engineering</li>
        <li>Fracture and Damage Mechanics</li>
        <li>Micro- and nano electromechanical systems</li>
        <li>Electric Vehicle</li>
        <li>Biomechanical engineering</li>
        <li>Automobile Engineering</li>
        <li>
          Advance Materials
          <ol className="list-decimal list-inside pl-6">
            <li>Powder Metallurgy</li>
            <li>Nano Materials</li>
            <li>Nano Composites</li>
            <li>Bio-Inspired Composite Material</li>
          </ol>
        </li>
        <li>Computational Fluid Dynamics</li>
        <li>Artificial Intelligence and Machine Learning</li>
        <li>Data Science</li>
        <li>3D Printing and Rapid Prototyping</li>
        <li>Energy Storage Systems</li>
        <li>Renewable Energy Sources,</li>
        <li>Applications and Implementation</li>
        <li>Refrigeration and Air Conditioning</li>
        <li>Robotics and Automation</li>
      </ul>
    </div>
  );
};

export default page;
