import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.warn("404: rute tidak ditemukan:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="mb-3 font-display text-4xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-muted-foreground">
          Halaman yang kamu cari tidak ada.
        </p>
        <a
          href="/"
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
        >
          Kembali ke beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;
