import { Link } from "@tanstack/react-router";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import logoWhite from "@/assets/logo-white.png";

const menuItems = [
  { label: "Fazer login", to: "/login" },
  { label: "Central de ajuda", to: "/" },
  { label: "Mapa de disponibilidade", to: "/" },
  { label: "Especificações", to: "/" },
  { label: "Planos", to: "/" },
  { label: "Guias em vídeo", to: "/" },
  { label: "Tecnologia", to: "/" },
  { label: "Novidades", to: "/" },
  { label: "Customer Stories", to: "/" },
];

export function StarlinkHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          <div className="flex items-center gap-10">
            <Link to="/" aria-label="Starlink" className="flex items-center">
              <img src={logoWhite} alt="Starlink" className="h-4 md:h-5 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-white text-sm hover:opacity-70 transition">
                Residencial
              </Link>
              <Link to="/" className="text-white text-sm hover:opacity-70 transition">
                Viagem
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="hidden md:inline-flex px-4 py-1.5 text-sm text-white border border-white/30 rounded-full hover:bg-white/10 transition">
              Pessoal
            </Link>
            <Link to="/comercial" className="hidden md:inline-flex px-4 py-1.5 text-sm text-white border border-white/30 rounded-full hover:bg-white/10 transition">
              Comercial
            </Link>
            <button
              className="text-white p-2"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex justify-end">
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside className="relative w-full sm:max-w-md bg-neutral-900 h-full overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between px-8 py-6">
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="text-white p-1 hover:opacity-70 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <button className="flex items-center gap-2 px-8 py-4 text-white text-base hover:opacity-70 transition">
              <span>BR</span>
              <Globe className="w-4 h-4" />
            </button>

            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-8 py-4 text-white text-base hover:bg-white/5 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
