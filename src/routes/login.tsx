import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { StarlinkHeader } from "@/components/StarlinkHeader";
import { StarlinkFooter } from "@/components/StarlinkFooter";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Fazer login — Starlink" },
      { name: "description", content: "Acesse a sua conta Starlink." },
    ],
  }),
  component: LoginPage,
});

const helpCards = [
  {
    title: "Ative a sua Starlink",
    desc: "Recebi um kit Starlink e tenho tudo pronto para a instalação.",
    to: "/activate",
  },
  {
    title: "Pedir a Starlink",
    desc: "Teste gratuito de 30 dias com reembolso total em caso de insatisfação.",
    to: "/",
  },
  {
    title: "Visite a nossa central de suporte",
    desc: "Receba orientação de nossa equipe de suporte.",
    to: "/",
  },
  {
    title: "Consulte as nossas histórias de clientes",
    desc: "Saiba mais sobre a nossa comunidade.",
    to: "/",
  },
];

function LoginPage() {
  const [email, setEmail] = useState("");
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <StarlinkHeader />
      <main className="flex-1 pt-28 md:pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-light mb-10">Fazer login</h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white placeholder:text-neutral-400 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded font-medium hover:bg-neutral-200 transition"
              >
                Próxima
              </button>
            </form>

            <div className="mt-12 max-w-md border-t border-neutral-800 pt-6">
              <button
                onClick={() => setHelpOpen(!helpOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium">Precisa de ajuda?</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${helpOpen ? "rotate-180" : ""}`}
                />
              </button>
              {helpOpen && (
                <p className="mt-4 text-sm text-neutral-400">
                  Entre em contato com o suporte da Starlink para receber ajuda
                  com sua conta.
                </p>
              )}
            </div>
          </div>

          <div className="md:pt-20 space-y-2">
            {helpCards.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="flex items-start justify-between gap-4 py-4 border-b border-neutral-800 hover:border-neutral-600 transition group"
              >
                <div>
                  <h3 className="font-medium mb-1">{c.title}</h3>
                  <p className="text-sm text-neutral-400">{c.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <StarlinkFooter />
    </div>
  );
}
