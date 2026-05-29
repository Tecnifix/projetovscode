import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { StarlinkHeader } from "@/components/StarlinkHeader";
import { StarlinkFooter } from "@/components/StarlinkFooter";

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Starlink | Preços" },
      {
        name: "description",
        content:
          "Planos Starlink Residencial Bradesco com preços especiais, instalação grátis e primeiro pagamento em até 4 meses.",
      },
    ],
  }),
  component: PrecosPage,
});

function PrecosPage() {
  const [tab, setTab] = useState<"pessoal" | "comercial" | "tabela-oficial" | "bradesco">("bradesco");

  const planosResidencial = [
    { name: "RESIDENCIAL - 500+ Mbps", price: "R$ 189/mês", desc: "Até 500 Mbps. Serviço de internet residencial estável e acessível. Dados ilimitados." },
    { name: "RESIDENCIAL - MAX (600+ Mbps)", price: "R$ 249/mês", desc: "Até mais de 400 Mbps. Nosso serviço de internet residencial de melhor desempenho, com prioridade máxima na rede Residencial." },
    { name: "RESIDENCIAL - FAMÍLIA (700+ Mbps)", price: "R$ 423/mês", desc: "Inclui dois planos do serviço Residencial, nossa opção de internet residencial com melhor desempenho." },
  ];

  const planosViagem = [
    { name: "Viagem 100 GB", price: "R$ 339/mês", desc: "100 GB de dados prioritários para uso em movimento e viagens." },
    { name: "VIAGEM - ILIMITADO", price: "R$ 619/mês", desc: "Dados ilimitados para uso em movimento. Funciona em mais de 150 países e territórios." },
  ];

  const planosBradesco = [
    { name: "PROMO - START 500 (500+ Mbps)", price: "R$ 67,90/mês" },
    { name: "PROMO - MAX 600 (600+ Mbps)", price: "R$ 189/mês" },
    { name: "PROMO - ULTRA 700 (700+ Mbps)", price: "R$ 249/mês" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <StarlinkHeader />
      <main className="relative px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">PLANOS</h1>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="inline-flex gap-2 md:gap-3 border border-white/20 rounded-full p-1 bg-white/5">
              <button
                onClick={() => setTab("pessoal")}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition whitespace-nowrap ${
                  tab === "pessoal"
                    ? "bg-white text-black"
                    : "text-white hover:text-white/70"
                }`}
              >
                PESSOAL
              </button>
              <button
                onClick={() => setTab("comercial")}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition whitespace-nowrap ${
                  tab === "comercial"
                    ? "bg-white text-black"
                    : "text-white hover:text-white/70"
                }`}
              >
                COMERCIAL
              </button>
              <button
                onClick={() => setTab("tabela-oficial")}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition whitespace-nowrap ${
                  tab === "tabela-oficial"
                    ? "bg-white text-black"
                    : "text-white hover:text-white/70"
                }`}
              >
                Tabela Oficial
              </button>
              <button
                onClick={() => setTab("bradesco")}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition whitespace-nowrap ${
                  tab === "bradesco"
                    ? "bg-white text-black"
                    : "text-white hover:text-white/70"
                }`}
              >
                Preço Bradesco
              </button>
            </div>
          </div>

          {/* Content */}
          <div>
            {tab === "tabela-oficial" && (
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {/* Residencial */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
                  <h2 className="text-xl font-semibold text-white mb-2">RESIDENCIAL</h2>
                  <p className="text-sm text-white/60 mb-6">Indicado para residências</p>

                  <div className="mb-8">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">Principais recursos</h3>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li>Configuração tipo plugar e usar</li>
                      <li>Disponibilidade superior a 99,9%</li>
                      <li>Resistente a intempéries</li>
                      <li>Dados ilimitados</li>
                      <li>30 dias de teste</li>
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">Planos mensais</h3>
                    <div className="space-y-3">
                      {planosResidencial.map((plano) => (
                        <div key={plano.name} className="flex flex-col gap-1">
                          <div className="flex justify-between items-start">
                            <span className="text-sm font-medium text-white">{plano.name}</span>
                            <span className="text-sm font-semibold text-white">{plano.price}</span>
                          </div>
                          <p className="text-xs text-white/50">{plano.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Viagem */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
                  <h2 className="text-xl font-semibold text-white mb-2">VIAGEM</h2>
                  <p className="text-sm text-white/60 mb-6">Indicado para motorhomes, passeios que levam um estilo de vida nômade. Compatível e para apojetar que trabalham do caminho</p>

                  <div className="mb-8">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">Principais recursos</h3>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li>Configuração tipo plugar e usar</li>
                      <li>Usa em movimento</li>
                      <li>Funciona em mais de 150 países e territórios</li>
                      <li>Pause quando quiser com o modo de espera</li>
                      <li>30 dias de teste</li>
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">Planos mensais</h3>
                    <div className="space-y-3">
                      {planosViagem.map((plano) => (
                        <div key={plano.name} className="flex flex-col gap-1">
                          <div className="flex justify-between items-start">
                            <span className="text-sm font-medium text-white">{plano.name}</span>
                            <span className="text-sm font-semibold text-white">{plano.price}</span>
                          </div>
                          <p className="text-xs text-white/50">{plano.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === "bradesco" && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
                <div className="text-center mb-12">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/60">Residencial · Bradesco</p>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    Parceria exclusiva Starlink + Bradesco
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-sm text-white/70 leading-7">
                    R$ 10 de adesão, instalação grátis e primeiro pagamento em até 4 meses.
                  </p>
                </div>

                <div className="grid gap-8">
                  <section className="rounded-2xl border border-white/10 bg-black/60 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">Principais recursos</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      <li>Configuração tipo plugar e usar</li>
                      <li>Disponibilidade superior a 99,9%</li>
                      <li>Resistente a intempéries</li>
                      <li>Dados ilimitados</li>
                      <li>Instalação grátis · R$ 10 de adesão</li>
                      <li>Primeiro pagamento em até 4 meses</li>
                    </ul>
                  </section>

                  <section className="rounded-2xl border border-white/10 bg-black/60 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">Planos mensais</h3>
                    <div className="mt-4 space-y-3">
                      {planosBradesco.map((plano) => (
                        <div
                          key={plano.name}
                          className="flex justify-between items-center rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                          <h4 className="text-sm font-medium text-white">{plano.name}</h4>
                          <p className="text-sm font-semibold text-white">{plano.price}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-xs text-white/50">
                      Condições especiais da parceria Starlink + Bradesco. Sujeito à análise e disponibilidade na sua região.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {tab === "pessoal" && (
              <div className="text-center py-12">
                <p className="text-white/70">Conteúdo para planos pessoais em desenvolvimento.</p>
              </div>
            )}

            {tab === "comercial" && (
              <div className="text-center py-12">
                <p className="text-white/70">Conteúdo para planos comerciais em desenvolvimento.</p>
              </div>
            )}
          </div>

          {/* Footer Links */}
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <Link
              to="/"
              className="text-sm text-white/70 hover:text-white transition"
            >
              ← Voltar para o início
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Começar
            </Link>
          </div>
        </div>
      </main>
      <StarlinkFooter />
    </div>
  );
}
