import React from "react";

const SteeringCommittee = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto ">
      <h2 className="text-2xl font-medium mb-4">Steering Committee</h2>

      <h3 className="text-xl font-semibold mt-4">Chief Patrons</h3>
      <ul className="list-disc list-inside text-gray-800 mb-4">
        <li>
          <span className="font-semibold italic text-blue-800">
            Shri. Dnyaneshwar P. Landge
          </span>
          , Chairman, PCET
        </li>
        <li>
          <span className="font-semibold italic text-blue-800">
            Smt. Padma M. Bhosale
          </span>
          , Vice Chairperson, PCET
        </li>
        <li>
          <span className="font-semibold italic text-blue-800">
            Shri. Vitthal S. Kalbhor
          </span>
          , Secretary, PCET
        </li>
        <li>
          <span className="font-semibold italic text-blue-800">
            Shri. Shantaram D. Garade
          </span>
          , Treasurer, PCET
        </li>
        <li>
          <span className="font-semibold italic text-blue-800">
            Shri. Harshwardhan S. Patil
          </span>
          , Trustee, PCET
        </li>
        <li>
          <span className="font-semibold italic text-blue-800">
            Dr. Girish Desai
          </span>
          , Executive Director, PCET
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Patrons</h3>
      <ul className="list-disc list-inside text-gray-800 mb-4">
        <li>
          <span className="font-semibold italic text-blue-800">
            Dr. Harish Tiwari
          </span>
          , Principal
        </li>
      </ul>

      
    </div>
  );
};

export default SteeringCommittee;
