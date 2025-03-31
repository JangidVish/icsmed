"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); // Use router for navigation

  return (
    <nav className="bg-gray-100 shadow-md text-base w-full flex md:flex-row flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-3 flex flex-col items-center justify-center w-full">
        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-gray-700 focus:outline-none "
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          <NavItem href="/" label="Home" />
          <Dropdown
            label="About Conference"
            items={[
              { href: "/Confrence/About", label: "About Conference" },
              { href: "/Confrence/Schedule", label: "Program Schedule" },
              { href: "/Confrence/Tracks", label: "Conference Tracks" },
              // { href: "", label: "Keynote Speaker" },
              { href: "/Confrence/Venue", label: "Venue" },
            ]}
          />
          <Dropdown
            label="Management"
            items={[
              { href: "/organisers", label: "About the Organiser" },
              { href: "/committee", label: "Steering Committee" },
              { href: "/partners", label: "Partner" },
              { href: "/review", label: "Advisory Committee" },
            ]}
          />
          <NavItem href="/papers" label="Call for Papers" />
          <Dropdown
            label="Submission"
            items={[
              { href: "/guidelines", label: "Guidelines" },
              {
                href: "https://docs.google.com/forms/d/e/1FAIpQLSfqjEa5wRic4sDCP1Zu2IJAGjlNDv5r_CkjjHxI57COhhG6-A/viewform",
                label: "Paper Submission Form",
              },
            ]}
          />
          <Dropdown
            label="Contact Us"
            items={[{ href: "/query", label: "Post your query" }]}
          />
          <NavItem
            href="https://www.journalpressindia.com/website/pccoer-icetc2025/special-issue"
            label="Edited Book"
            external
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-3 space-y-2 bg-gray-100 flex flex-col">
          <NavItem href="/" label="Home" />
          <NavItem href="/Confrence/About" label="About Conference" />
          <NavItem href="/Confrence/Schedule" label="Program Schedule" />
          <NavItem href="/Confrence/Tracks" label="Conference Tracks" />
          {/* <NavItem href="" label="Keynote Speaker" /> */}
          <NavItem href="/Confrence/Venue" label="Venue" />
          <NavItem href="/organisers" label="About the Organiser" />
          <NavItem href="/committee" label="Steering Committee" />
          <NavItem href="/partners" label="Partner" />
          <NavItem href="/review" label="Advisory Committee" />
          <NavItem href="/papers" label="Call for Papers" />
          <NavItem href="/guidelines" label="Submission Guidelines" />
          <NavItem href="/query" label="Post Your Query" />
          <NavItem
            href="https://www.journalpressindia.com/website/pccoer-icetc2025/special-issue"
            label="Edited Book"
            external
          />
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, label, external = false }) {
  const router = useRouter();

  const handleClick = (e) => {
    if (!external) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-800 hover:text-blue-600"
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {label}
      <br />
    </a>
  );
}

function Dropdown({ label, items }) {
  return (
    <div className="relative group text-base ">
      <button className="text-gray-800 hover:text-blue-600">{label} ▼</button>
      <div className="absolute left-0 hidden bg-white shadow-md rounded-md group-hover:block w-50 gap-4">
        {items.map((item, index) => (
          <div className="">
            <NavItem key={index} href={item.href} label={item.label} />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
