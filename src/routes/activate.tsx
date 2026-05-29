import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { StarlinkHeader } from "@/components/StarlinkHeader";
import { StarlinkFooter } from "@/components/StarlinkFooter";

export const Route = createFileRoute("/activate")({
  head: () => ({
    meta: [
      { title: "Ativar a Starlink — Starlink" },
      { name: "description", content: "Ative o seu kit Starlink." },
    ],
  }),
  component: ActivatePage,
});

function ActivatePage() {
  const [kit, setKit] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <StarlinkHeader />
      <main className="flex-1 flex items-center justify-center pt-28 md:pt-32 pb-20 px-6">
        <div className="w-full max-w-xl bg-neutral-900/70 border border-neutral-800 rounded-md p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-light text-center">Ativar a Starlink</h1>
          <p className="text-center text-sm text-neutral-300 mt-3">
            Digite o seu <span className="underline">Identificador Starlink</span> e endereço de e-mail abaixo
          </p>

          <div className="mt-8 flex justify-center">
            <div className="relative w-64">
              <div className="flex flex-col items-center text-[10px] text-neutral-400 mb-1">
                <span>SN: KIT00000000</span>
                <ArrowDown className="w-3 h-3 mt-1" />
              </div>
              <div className="aspect-[4/3] border border-neutral-600 rounded-md flex items-center justify-center">
                <span className="tracking-[0.3em] text-sm text-neutral-200">STARLINK</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 space-y-3"
          >
            <input
              value={kit}
              onChange={(e) => setKit(e.target.value)}
              placeholder="KIT00001 OU 00000000-321A2345-B10C5D00"
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="NAME@EMAIL.COM"
              className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white"
            />

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                className="border border-neutral-600 py-3 text-sm tracking-wide hover:bg-white/5 transition rounded"
              >
                NOVA CONTA
              </button>
              <button
                type="submit"
                className="border border-neutral-600 py-3 text-sm tracking-wide hover:bg-white/5 transition rounded"
              >
                CONTA EXISTENTE
              </button>
            </div>

            <p className="text-xs text-neutral-400 pt-3">
              Ao clicar em "Nova conta", você concorda com nossos{" "}
              <a href="#" className="underline">Termos de Serviço</a> e nossa{" "}
              <a href="#" className="underline">Política de Privacidade</a>.
            </p>
          </form>
        </div>
      </main>
      <StarlinkFooter />
    </div>
  );
}
