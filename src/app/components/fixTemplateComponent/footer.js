import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="p-4 rounded-lg">
        <h2 className="text-lg font-semibold underline">Disclaimers</h2>
        <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
          <li>
            <span className="font-semibold">Webpage Content:</span>
            Journal Press India (JPI) is only a service provider to host
            conferences through its Conference Management Service (CMS) hosting
            portal, facilitating online abstract & paper submissions,
            registrations, and ISBN e-publications. The content and publication
            commitments on the respective conference webpages are owned and
            honored by the organizing institution, not JPI.
          </li>
          <li>
            <span className="font-semibold">Publications:</span>
            In case of ISBN e-proceedings/e-book publications, all finalized
            articles/chapters are decided by the organizing institution. Journal
            Press India (JPI) is not responsible for any insights or favors
            related to the publication, including journal publications.
          </li>
        </ul>
      </div>
      <div className="text-center mt-4 text-sm text-gray-600">
        <p>© 2025 Journal Press India. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
