import React from 'react'

const page = () => {
  return (
    <div className="flex flex-wrap justify-between p-4">
      {/* Venue Information */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold">Venue</h2>
        <h3 className="text-lg font-semibold mt-2">
          PCET Pimpri Chinchwad College of Engineering and Research
        </h3>
        <p className="mt-2 text-gray-700">
          Plot No. B, Sector no. 110, Gate no.1, Laxminagar, Ravet, Haveli, Pune - 412101, Maharashtra, India
        </p>
        <img
          src="https://www.journalpressindia.com/siteadmin/upload/1730521657_Venue%20.png"
          alt="PCET Pimpri Chinchwad College of Engineering and Research"
          className="mt-4 rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h3 className="text-xl font-semibold mb-2">Location</h3>
        <iframe
          title="PCET Pimpri Chinchwad College of Engineering and Research Location"
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2400730835676!2d73.743654174972!3d18.644616067926347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b977f8eeb5e7%3A0x76c3e0b1f1c17c6e!2sPCET%20PCCOER!5e0!3m2!1sen!2sin!4v1711428578176!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
   ); 
};

export default page
