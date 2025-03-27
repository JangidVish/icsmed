import React from "react";

const SubmissionGuidelines = () => {
  return (
    <div className="md:w-3/4 w-full flex align-middle flex-col items-center max-w-3xl">
      <div className="guidline_container">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Submission Guidelines
        </h1>
        <p className="leading-7">
          Full Text Paper should follow IEEE Journal guidelines:
          <ul className="list-disc px-4">
            <li>
              Must be camera-ready in MS Word format, within 3000 words
              (excluding figures, tables, and appendices).
            </li>
            <li>Written in English using third-person (passive voice).</li>
            <li>
              SI units should be used; other units may appear in parentheses
              after SI units.~
            </li>
            <li>
              Mathematical symbols must be clear, with proper differentiation
              between similar characters (e.g., 1 and l), upper/lowercase
              letters, and subscripts/superscripts.
            </li>
            <li>
              Avoid lengthy proofs and extensive test data—include them in
              appendices if essential.{" "}
            </li>
          </ul>
        </p>
      </div>

      <div className="instruction_container mt-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Important Instructions
        </h1>
        <p className="leading-7">
          <ul className="list-disc px-4">
            <li>Papers must be original and not submitted elsewhere.</li>
            <li>
              {" "}
              Copyright of accepted papers belongs to The Institution of
              Engineers (India) (IEEE). Reproduction is prohibited without
              permission.
            </li>
            <li>
              Authors must sign & submit the Declaration Form upon submission.
            </li>
            <li>
              As per Bye-Law 115 of IEEE, copyright for papers published in IEEE
              Journals or Proceedings remains with the institution.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;
