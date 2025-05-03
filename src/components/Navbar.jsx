import React from "react";

function Navbar() {
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
                key={index}
                href={item.href}
                className="text-black px-2 hover:bg-[var(--color-primary-bg)]
                 hover:primary-bg rounded-sm hover:underline underline-offset-4 
                 transition-all duration-300"
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
