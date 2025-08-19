import React, { useState, useEffect, useCallback } from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Close on ESC
  const handleEsc = useCallback((e) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <a
  href="#hero"
  className="text-xl sm:text-2xl font-extrabold font-montserrat tracking-wide whitespace-nowrap overflow-hidden text-ellipsis"
>
  <img
  src="public\assets\Screenshot 2025-08-17 215201.png"
  alt="logo"
  className="w-18 h-auto sm:w-20"  // smaller on mobile, bigger on desktop
/>

</a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-montserrat font-medium text-gray-800 group"
            >
              {link.name}
              <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger (only < md) */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <div className={`hamburger ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile: click-away + popup */}
      <AnimatePresence>
        {open && (
          <>
            {/* Click outside overlay */}
            <motion.button
              key="overlay"
              className="fixed inset-0 md:hidden bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Popup menu */}
            <motion.nav
              key="popup"
              id="mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed right-4 top-20 md:hidden w-[70vw] max-w-sm rounded-2xl border border-gray-200 bg-white shadow-2xl z-50"
            >
              {/* Header row with brand + close */}
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <div className="text-base font-bold font-montserrat">Menu</div>
                <button onClick={() => setOpen(false)}>
                  <FiX className="text-gray-700" size={22} />
                </button>
              </div>

              {/* Links */}
              <div className="px-5 pb-5">
                <ul className="flex flex-col gap-4 text-lg">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="relative block font-montserrat text-gray-900 group"
                      >
                        {link.name}
                        <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
