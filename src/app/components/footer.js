import React from "react";

const Footer = () => {
  return (
    <div class="container mx-auto px-4 py-6">
      <div class="p-4 rounded-lg">
        <h2 class="text-lg font-semibold underline">Disclaimers</h2>
        <ul class="list-disc pl-5 mt-2 space-y-2 text-sm">
          <li>
            <span class="font-semibold">Webpage Content:</span>
            Journal Press India (JPI) is only a service provider to host
            conferences through its Conference Management Service (CMS) hosting
            portal, facilitating online abstract & paper submissions,
            registrations, and ISBN e-publications. The content and publication
            commitments on the respective conference webpages are owned and
            honored by the organizing institution, not JPI.
          </li>
          <li>
            <span class="font-semibold">Publications:</span>
            In case of ISBN e-proceedings/e-book publications, all finalized
            articles/chapters are decided by the organizing institution. Journal
            Press India (JPI) is not responsible for any insights or favors
            related to the publication, including journal publications.
          </li>
        </ul>
      </div>
      <div class="text-center mt-4 text-sm text-gray-600">
        <p>© 2025 Journal Press India. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
