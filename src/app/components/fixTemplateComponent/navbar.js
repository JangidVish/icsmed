"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md text-sm w-full flex flex-row items-center justify-center">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          <NavItem href="#home" label="Home" />
          <Dropdown
            label="About Conference"
            items={[
              { href: "#objectives", label: "About Conference" },
              { href: "#schedule", label: "Program Schedule" },
              { href: "#themes", label: "Conference Tracks" },
              { href: "#keynote", label: "Keynote Speaker" },
              { href: "#venue", label: "Venue" },
            ]}
          />
          <Dropdown
            label="Management"
            items={[
              { href: "#organisers", label: "About the Organiser" },
              { href: "#committee", label: "Steering Committee" },
              { href: "#partners", label: "Partner" },
              { href: "#review", label: "Advisory Committee" },
            ]}
          />
          <NavItem href="#papers" label="Call for Papers" />
          <Dropdown
            label="Registration"
            items={[
              { href: "#registration_guidelines", label: "Guidelines" },
              { href: "#registration", label: "Registration Form" },
            ]}
          />
          <Dropdown
            label="Submission"
            items={[
              { href: "#guidelines", label: "Guidelines" },
              { href: "#paper", label: "Paper Submission Form" },
            ]}
          />
          <Dropdown
            label="Contact Us"
            items={[{ href: "#query", label: "Post your query" }]}
          />
          <NavItem
            href="https://www.journalpressindia.com/website/pccoer-icetc2025/special-issue"
            label="Edited Book"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-3 space-y-2 bg-gray-100">
          <NavItem href="#home" label="Home" />
          <NavItem href="#objectives" label="About Conference" />
          <NavItem href="#schedule" label="Program Schedule" />
          <NavItem href="#themes" label="Conference Tracks" />
          <NavItem href="#keynote" label="Keynote Speaker" />
          <NavItem href="#venue" label="Venue" />
          <NavItem href="#organisers" label="About the Organiser" />
          <NavItem href="#committee" label="Steering Committee" />
          <NavItem href="#partners" label="Partner" />
          <NavItem href="#review" label="Advisory Committee" />
          <NavItem href="#papers" label="Call for Papers" />
          <NavItem
            href="#registration_guidelines"
            label="Registration Guidelines"
          />
          <NavItem href="#registration" label="Registration Form" />
          <NavItem href="#guidelines" label="Submission Guidelines" />
          <NavItem href="#paper" label="Paper Submission" />
          <NavItem href="#query" label="Post Your Query" />
          <NavItem
            href="https://www.journalpressindia.com/website/pccoer-icetc2025/special-issue"
            label="Edited Book"
          />
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <Link href={href} className="text-gray-800 hover:text-blue-600">
      {label}
    </Link>
  );
}

function Dropdown({ label, items }) {
  return (
    <div className="relative group text-sm">
      <button className="text-gray-800  hover:text-blue-600">{label} ▼</button>
      <div className="absolute left-0 hidden bg-white shadow-md rounded-md group-hover:block">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block w-50 px-4 py-2 hover:bg-gray-200 text-sm"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
