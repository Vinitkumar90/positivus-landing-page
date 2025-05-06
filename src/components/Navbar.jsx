import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isOpnen, setIsOpen] = useState(false);
  const [activeItem, setActiveitem] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpnen);
  };

  const handleMenuClick = (name) => {
    setActiveitem(name);
    setIsOpen(false);
  };

  const menuItems = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#Blog" },
  ];

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* logo */}
          <a href="/">
            <img src="../src/assets/logo.png" className=" h-9 " alt="" />
          </a>

          {/* nav items */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                key={index}
                href={item.href}
                className={`text-black px-2 hover:bg-[var(--color-primary-bg)]
                 rounded-sm hover:underline underline-offset-4 
                 transition-all duration-300 ${
                   activeItem == item.name ? "bg-[var(--color-primary-bg)] text-black underline underline-offset-4" : ""
                 }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border px-4 py-2 border-black hover:bg-[var(--color-primary-bg)]
               hover:border-[var(--color-primary-bg)] rounded-md transition-all duration-300"
            >
              Request a qoute
            </a>
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[var(--color-primary-bg)] focus:outline-none"
            >
              {isOpnen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isOpnen && (
        <div className="md:hidden bg-red shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={`block text-black px-2 rounded-sm hover:underline underline-offset-4 transition-all
                    duration-300 hover:bg-[var(--color-primary-bg)]
                    ${
                      activeItem === item.name
                        ? "bg-[var(--color-primary-bg)]"
                        : ""
                    }
                  `}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block border px-4 py-2 border-black rounded-md transition-all duration-300
              hover:bg-[var(--color-primary-bg)] hover:border-[var(--color-pirmary-bg)]
              "
            >
              Request a qoute
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
