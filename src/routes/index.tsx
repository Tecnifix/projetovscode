import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StarlinkHeader } from "@/components/StarlinkHeader";
import { StarlinkFooter } from "@/components/StarlinkFooter";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import heroImg from "@/assets/v4-night-sky.webp";
import heroImgMobile from "@/assets/v4-night-sky-mobile.webp";
import robustnessImg from "@/assets/v4-lightning.webp";
import mobilityImg from "@/assets/mobility-ice.webp";
import globalImg from "@/assets/global-greenroof.webp";
import setupImg from "@/assets/setup-yard.webp";
import featCabin from "@/assets/feat-cabin-lights.webp";
import featHiker from "@/assets/feat-hiker.webp";
import featDuskHouse from "@/assets/feat-dusk-house.webp";
import featRock from "@/assets/feat-rock.webp";
import illustration07 from "@/assets/illustration-07.webp";
import illustration10 from "@/assets/illustration-10.webp";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starlink | Internet de Alta Velocidade em Qualquer Lugar" },
      {
        name: "description",
        content:
          "Internet rápida e acessível via satélite. Conectividade estável e de alta velocidade para residências, viagens e negócios.",
      },
      { property: "og:title", content: "Starlink | Internet de Alta Velocidade" },
      {
        property: "og:description",
        content: "Internet rápida e acessível via satélite, em qualquer lugar.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"residencial" | "viagem" | null>(null);
  const [address, setAddress] = useState("");

  const handleSelectPlan = (plan: "residencial" | "viagem") => {
    setSelectedPlan(plan);
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-neutral-900">
      <img src={heroImgMobile} alt="" className="absolute inset-0 w-full h-full object-cover md:hidden" />
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover hidden md:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

      <StarlinkHeader />

      <div className="relative z-10 h-full flex items-end pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight">
            Internet Starlink com<br />parceria Bradesco
          </h1>
          <p className="text-white/90 mt-6 text-base md:text-lg max-w-md">
            Planos a partir de R$ 67,90, com R$ 10 de adesão, instalação grátis e primeiro pagamento em até 4 meses.
          </p>
          <div className="mt-8">
            <p className="text-white/60 text-xs tracking-widest uppercase">A partir de</p>
            <p className="text-white text-5xl md:text-6xl font-medium mt-1">
              R$ 67,90<span className="text-2xl md:text-3xl text-white/70">/mês</span>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button 
              onClick={() => setPlanModalOpen(true)}
              className="px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition"
            >
              Começar
            </button>
            <Link
              to="/precos"
              className="px-6 py-2.5 text-white border border-white/40 rounded-full font-medium text-sm hover:bg-white/10 transition"
            >
              Ver os preços
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={planModalOpen} onOpenChange={setPlanModalOpen}>
        <DialogContent className="bg-neutral-950 border-neutral-800 max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-white text-2xl font-semibold">Escolha um plano.</h2>
            </div>

            {/* Plan Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleSelectPlan("residencial")}
                className={`p-6 rounded-lg border-2 transition text-left ${
                  selectedPlan === "residencial"
                    ? "border-white bg-white/5"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <h3 className="text-white font-semibold text-lg">Residencial</h3>
                <p className="text-white/70 text-sm mt-2">
                  Internet para sua casa com alta velocidade, estável para streaming, trabalho remoto e família conectada.
                </p>
              </button>

              <button
                onClick={() => handleSelectPlan("viagem")}
                className={`p-6 rounded-lg border-2 transition text-left ${
                  selectedPlan === "viagem"
                    ? "border-white bg-white/5"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <h3 className="text-white font-semibold text-lg">Viagem</h3>
                <p className="text-white/70 text-sm mt-2">
                  Internet portátil para usar em deslocamentos e destinos remotos, com cobertura em mais de 160 mercados.
                </p>
              </button>
            </div>

            {/* Address Input - Only show for Residencial */}
            {selectedPlan === "residencial" && (
              <div>
                <label className="block text-white text-lg font-semibold mb-2">
                  Onde você vai usar a Starlink?
                </label>
                <input
                  type="text"
                  placeholder="Endereço"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition"
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setPlanModalOpen(false)}
                className="px-6 py-2.5 text-white border border-white/20 rounded-lg font-medium text-sm hover:bg-white/5 transition"
              >
                Cancelar
              </button>
              <Link
                to={`/checkout?plan=${selectedPlan}&address=${encodeURIComponent(address)}`}
                onClick={() => setPlanModalOpen(false)}
                className="px-6 py-2.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-white/90 transition inline-block"
              >
                Ver os planos
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Plans() {
  const [tab, setTab] = useState<"casa" | "lugar">("casa");

  const planosCasa = [
    {
      name: "Residencial: 100 Mbps",
      desc: "Até 100 Mbps. Serviço de internet residencial estável e acessível. Dados ilimitados.",
      price: "189",
    },
    {
      name: "Residencial - Máx",
      desc: "Até mais de 400 Mbps. Nosso serviço de internet residencial de melhor desempenho, com prioridade máxima na rede Residencial. Adicione um plano de serviço de Viagem opcional com 50% de desconto e um Kit Mini gratuito. Reserve seu Mini por e-mail após a ativação.",
      price: "249",
    },
    {
      name: "Residencial - Família",
      desc: "Inclui dois planos do serviço Residencial, nossa opção de internet residencial com melhor desempenho. Até 400+ Mbps. Observação: velocidades de download do 99º percentil.",
      price: "423",
    },
  ];

  return (
    <section className="relative bg-black py-24 px-6 md:px-10 overflow-hidden">
      <img src={illustration10} alt="" className="pointer-events-none select-none absolute -top-32 -right-32 w-[480px] opacity-20" />
      <img src={illustration07} alt="" className="pointer-events-none select-none absolute -bottom-32 -left-32 w-[420px] opacity-15" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_oklch(0.3_0_0)_0%,_transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setTab("casa")}
              className={`px-6 py-2 rounded-full text-sm transition ${
                tab === "casa" ? "bg-white text-black" : "text-white"
              }`}
            >
              Em casa
            </button>
            <button
              onClick={() => setTab("lugar")}
              className={`px-6 py-2 rounded-full text-sm transition ${
                tab === "lugar" ? "bg-white text-black" : "text-white"
              }`}
            >
              Em qualquer lugar
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {planosCasa.map((p) => (
            <div
              key={p.name}
              className="bg-neutral-900/80 border border-white/10 rounded-2xl p-7 flex flex-col"
            >
              <h3 className="text-white text-xl font-medium">{p.name}</h3>
              <p className="text-white/60 text-sm mt-4 flex-1 leading-relaxed">{p.desc}</p>
              <div className="mt-8">
                <p className="text-white/50 text-xs tracking-widest uppercase">A partir de</p>
                <p className="text-white text-4xl font-medium mt-1">
                  R$ {p.price}<span className="text-xl text-white/70">/mês</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-xs mt-10 max-w-3xl mx-auto">
          As velocidades indicadas são as máximas disponíveis. Elas não são garantidas e podem diminuir em períodos de congestionamento.
        </p>
      </div>
    </section>
  );
}

function Robustness() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-neutral-900">
      <img src={robustnessImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="relative z-10 h-full flex items-center px-6 md:px-10">
        <div className="max-w-xl">
          <h2 className="text-white text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight">
            Robustez e<br />confiabilidade
          </h2>
          <p className="text-white/80 mt-6 text-base md:text-lg leading-relaxed">
            Internet de alta velocidade com mais de 99,9% de tempo médio operacional e conectividade estável ao redor do mundo. Desenvolvida para operar até nas condições mais extremas do planeta. A Starlink pode derreter a neve e resistir a granizo, chuva intensa e ventos fortes.
          </p>
          <Link to="/checkout" className="mt-8 inline-flex px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

function Mobility () {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900">
      <img src={mobilityImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 h-full flex items-center px-6 md:px-10">
        <div className="max-w-xl">
          <h2 className="text-white text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight">
            Internet para usar na estrada, no destino e durante os deslocamentos diários
          </h2>
          <p className="text-white/80 mt-6 text-base md:text-lg leading-relaxed">
            Internet de alta velocidade que acompanha você, até em áreas sem cobertura. Uso em movimento disponível em regiões selecionadas.
          </p>
          <Link to="/checkout" className="mt-8 inline-flex px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      img: featCabin,
      title: "Internet residencial em áreas rurais e remotas.",
      desc: "A Starlink Residencial oferece conectividade estável e de alta velocidade mesmo nas áreas mais remotas, fora do alcance do serviço de celular.",
    },
    {
      img: featHiker,
      title: "Conecte-se em qualquer lugar.",
      desc: "Use a Starlink Viagem fora de casa, em motorhomes, acampamentos, embarcações e muito mais. É fácil navegar, fazer streaming e manter a sua conexão sem sofrer com áreas sem cobertura ou internet lenta.",
    },
    {
      img: featDuskHouse,
      title: "Velocidades de até 400+ Mbps.",
      desc: "Tenha a liberdade de fazer streaming em 4K em vários dispositivos ao mesmo tempo, trabalhar remotamente sem limitações, jogar on-line, navegar nas redes sociais e muito mais.",
    },
    {
      img: featRock,
      title: "Conectividade em condições extremas.",
      desc: "A Starlink foi desenvolvida para resistir aos ambientes mais desafiadores, mantendo a conexão estável onde outras falham.",
    },
  ];

  return (
    <section className="relative bg-black py-24 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_oklch(0.35_0_0)_0%,_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-medium text-center tracking-tight mb-16">
          Internet de alta velocidade que funciona para você
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-5 bg-neutral-900">
                <img src={item.img} alt="" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Global() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-stone-900">
      <img src={globalImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-10">
        <div className="max-w-xl text-center">
          <h2 className="text-white text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight">
            Disponível<br />globalmente
          </h2>
          <p className="text-white/80 mt-6 text-base md:text-lg leading-relaxed">
            Oferecemos conectividade estável em mais de 160 países, territórios e outros mercados ao redor do mundo.
          </p>
          <button className="mt-8 px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition">
            Veja a disponibilidade
          </button>
        </div>
      </div>
    </section>
  );
}

function Setup() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-stone-900">
      <img src={setupImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="relative z-10 h-full flex items-center px-6 md:px-10">
        <div className="max-w-xl">
          <h2 className="text-white text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight">
            Conecte os cabos.<br />Aponte para o céu.
          </h2>
          <p className="text-white/80 mt-6 text-base md:text-lg leading-relaxed max-w-md">
            A Starlink foi desenvolvida para ser instalada por conta própria e vem com tudo o que você precisa para se conectar em poucos minutos.
          </p>
          <button className="mt-8 px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition">
            Baixe o aplicativo
          </button>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Plans />
      <Robustness />
      <Mobility />
      <Features />
      <Global />
      <Setup />
      <StarlinkFooter />
    </main>
  );
}
