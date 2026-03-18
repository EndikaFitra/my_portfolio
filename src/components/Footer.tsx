const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-display">
        © {new Date().getFullYear()} Endika Fitra Ramadani. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
