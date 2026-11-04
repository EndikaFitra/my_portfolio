import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Karya", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Keahlian", href: "#skills" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape menutup menu dan mengembalikan fokus ke tombolnya.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          aria-label="Endika Fitra Ramadani — kembali ke atas"
          className="font-display text-xl font-bold text-foreground tracking-tight"
        >
          E<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link py-2">
              {l.label}
            </a>
          ))}
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-3 flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary/70 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-seluler"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-seluler"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-3 flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link flex min-h-[44px] items-center text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    const target = document.querySelector(l.href);
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: "smooth" });
                      }, 150);
                    }
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
