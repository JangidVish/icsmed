export default function ConferenceDates() {
  return (
    <div className="container">
      <div className=" rounded-lg">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Important Dates
        </h2>

        <table className="w-full border border-gray-300 text-center">
          <tbody>
            <tr className="bg-[#006699] text-white  font-bold">
              <td colSpan="2">Paper Submission</td>
            </tr>
            <tr className="border-b">
              <td className="">Start Date</td>
              <td className="">
                3<sup>rd</sup> Mar 2025
              </td>
            </tr>
            <tr className="border-b">
              <td className="">Last Date</td>
              <td className="">
                3<sup>rd</sup> April 2025
              </td>
            </tr>
            <tr className="border-b">
              <td className="">Notification of Acceptance</td>
              <td className="">
                17<sup>th</sup> April 2025
              </td>
            </tr>
            <tr className="bg-[#006699]  text-white font-bold">
              <td colSpan="2">Registration</td>
            </tr>
            <tr className="border-b">
              <td className="">Start Date</td>
              <td className="">
                17<sup>th</sup> - 30<sup>th</sup> April 2024
              </td>
            </tr>

            <tr className="border-b">
              <td className="">Submission of Camera Ready Manuscript:</td>
              <td className="">
                17<sup>th</sup> - 30<sup>th</sup> April 2024
              </td>
            </tr>
            {/* <tr className="border-b">
              <td className="">Early Bird</td>
              <td className="">
                15<sup>th</sup> - 30<sup>th</sup> Nov 2024
              </td>
            </tr>
            <tr className="border-b">
              <td className="">Regular</td>
              <td className="">
                01<sup>st</sup> - 31<sup>st</sup> Dec 2024
              </td>
            </tr>
            <tr className="border-b">
              <td className="">Extended Date</td>
              <td className="">
                05<sup>th</sup> Jan 2025
              </td>
            </tr> */}
            <tr className="bg-blue-800 text-white font-bold">
              <td className="mt-4">Conference Dates</td>
              <td>
                08<sup>th</sup> - 09<sup>th</sup> May 2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
