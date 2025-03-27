import React from "react";

const CallForPapers = () => {
  return (
    <>
      <div className="flex flex-col gap-2 max-w-3xl" id="#papers ">
        <h1 className="text-2xl font-semibold">Call For Papers</h1>
        <h3 className="text-base">
          Authors are encouraged to submit high-quality research papers for the
          Conference:
        </h3>
        <ul className="text-base px-4 list-disc">
          <li>
            Submit manuscripts in Word/PDF format as per the IEEE Journal
            guidelines.
          </li>
          <li>Use the IEEE Standard Template.</li>
          <li>Submit papers via Microsoft CMT by 15th December 2024.</li>
          <li>
            All submissions are handled electronically through the Microsoft CMT
            platform.
          </li>
        </ul>

        <h1 className="text-2xl font-semibold">Paper Publication</h1>

        <ul className="text-base px-4 list-disc">
          <li>Selected papers will be published in Scopus Proceedings.</li>
          <li>
            Other accepted & presented papers will be included in E-Proceedings
            with ISBN/ISSN/DOI.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CallForPapers;
