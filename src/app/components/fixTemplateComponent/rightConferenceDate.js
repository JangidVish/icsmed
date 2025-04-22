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
              <td>
                27<sup>th</sup> Mar 2025
              </td>
            </tr>
            <tr className="border-b">
              <td className="">Last Date</td>
              <td className="">
                <p className="line-through">
                  25<sup>th</sup> April 2025
                </p>
                <p>
                  {" "}
                  15<sup>th</sup> May 2025
                </p>
              </td>
            </tr>
            <tr className="border-b">
              <td className="">Notification of Acceptance</td>
              <td className="">
                10<sup>th</sup> May 2025
              </td>
            </tr>
            <tr className="bg-[#006699]  text-white font-bold">
              <td colSpan="2">Registration</td>
            </tr>
            <tr className="border-b">
              <td className="">Date</td>
              <td className="">
                10<sup>th</sup> - 20<sup>th</sup> May 2025
              </td>
            </tr>

            <tr className="border-b">
              <td className="">Submission of Camera Ready Manuscript:</td>
              <td className="">
                10<sup>th</sup> - 20<sup>th</sup> May 2024
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
                30<sup>th</sup> - 31<sup>st</sup> May 2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfqjEa5wRic4sDCP1Zu2IJAGjlNDv5r_CkjjHxI57COhhG6-A/viewform"
        className="mt-4"
      >
        <button className="bg-blue-500  py-2 px-4 w-full rounded hover:bg-blue-600 font-semibold cursor-pointer">
          Register Now
        </button>
      </a>
    </div>
  );
}
