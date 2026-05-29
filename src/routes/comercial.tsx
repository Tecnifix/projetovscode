import { createFileRoute, Link } from "@tanstack/react-router";
import { StarlinkHeader } from "@/components/StarlinkHeader";
import { StarlinkFooter } from "@/components/StarlinkFooter";
import bizHeroD from "@/assets/biz-hero-d.webp";
import bizHeroM from "@/assets/biz-hero-m.jpg";
import bizFeature3D from "@/assets/biz-feature3-d.jpg";
import bizFeature4D from "@/assets/biz-feature4-d.jpg";
import bizFixedSite from "@/assets/biz-fixedsite.webp";
import bizLandMobility from "@/assets/biz-landmobility.webp";
import bizMaritime from "@/assets/biz-maritime.webp";
import bizAviationD from "@/assets/biz-aviation-d.webp";
import bizIllustration1 from "@/assets/biz-illustration1.webp";

export const Route = createFileRoute("/comercial")({
  head: () => ({
    meta: [
      { title: "Starlink Comercial | Internet para Empresas" },
      {
        name: "description",
        content:
          "Internet estável de alta velocidade para empresas. Conectividade em local fixo, terrestre, marítima e aviação.",
      },
      { property: "og:title", content: "Starlink Comercial | Internet para Empresas" },
      {
        property: "og:description",
        content: "Internet estável de alta velocidade para empresas em qualquer lugar do mundo.",
      },
    ],
  }),
  component: ComercialPage,
});

function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-neutral-800">
      <img src={bizHeroD} alt="" className="absolute inset-0 w-full h-full object-cover hidden md:block" />
      <img src={bizHeroM} alt="" className="absolute inset-0 w-full h-full object-cover md:hidden" />
      <div className="absolute inset-0 bg-black/40" />
      <StarlinkHeader />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-medium tracking-tight">
          STARLINK PARA EMPRESAS
        </h1>
        <p className="text-white/90 mt-6 text-base md:text-lg max-w-2xl">
          Internet estável de alta velocidade para empresas.
          <br />
          A partir de R$ 245/mês, com um custo de R$ 3.407 pelo equipamento.
        </p>
        <p className="text-white mt-8 text-base md:text-lg">
          <a href="#" className="underline">Entre em contato com nossa equipe</a> ou acesse o{" "}
          <a href="#" className="underline">Guia do Comprador</a>.
        </p>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-7">
            <h3 className="text-white text-xl font-semibold tracking-wide">PRIORITÁRIO LOCAL</h3>
            <p className="text-white/70 text-sm mt-3">Conectividade em todo o país</p>
            <p className="text-white/90 text-sm mt-4">A partir de R$ 245/mês pelo serviço</p>
            <div className="flex gap-3 mt-5">
              <button className="px-5 py-2 bg-white text-black text-xs font-semibold tracking-widest uppercase rounded">
                Começar
              </button>
              <button className="px-5 py-2 border border-white/40 text-white text-xs font-semibold tracking-widest uppercase rounded">
                Detalhes do serviço
              </button>
            </div>
          </div>
          <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-7">
            <h3 className="text-white text-xl font-semibold tracking-wide">PRIORITÁRIO GLOBAL</h3>
            <p className="text-white/70 text-sm mt-3">Conectividade em terra e em alto-mar ao redor do mundo</p>
            <p className="text-white/90 text-sm mt-4">A partir de R$ 1.695/mês pelo serviço</p>
            <div className="flex gap-3 mt-5">
              <button className="px-5 py-2 bg-white text-black text-xs font-semibold tracking-widest uppercase rounded">
                Começar
              </button>
              <button className="px-5 py-2 border border-white/40 text-white text-xs font-semibold tracking-widest uppercase rounded">
                Detalhes do serviço
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    { title: "LOCAL FIXO", desc: "Conectividade para empresas", img: bizFixedSite },
    { title: "MOBILIDADE TERRESTRE", desc: "Conectividade durante o deslocamento por terra", img: bizLandMobility },
    { title: "MARÍTIMA", desc: "Conectividade na água", img: bizMaritime },
    { title: "AVIAÇÃO", desc: "Conectividade durante o voo", img: bizAviationD },
  ];
  return (
    <section className="bg-black py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-sm tracking-[0.3em] uppercase mb-10">Casos de uso</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => {
            return (
              <div
                key={c.title}
                className="relative aspect-[16/10] bg-neutral-800 rounded-sm overflow-hidden flex flex-col justify-start p-8"
              >
                <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">{c.title}</h3>
                  <p className="text-white/80 mt-2">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KeepOnline() {
  return (
    <section className="relative bg-black py-28 px-6 md:px-10 overflow-hidden">
      <img src={bizIllustration1} alt="" className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_oklch(0.3_0_0)_0%,_transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-wide">
          MANTENHA SUA EMPRESA ON-LINE
        </h2>
        <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed">
          Mantenha os funcionários conectados em diferentes locais, monitore dispositivos de IoT e disponha de uma conexão reserva para a sua rede, mesmo nos locais mais remotos do mundo.
        </p>
      </div>
    </section>
  );
}

function EasyConnection() {
  return (
    <section className="relative bg-black py-20 px-6 md:px-10 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-wide">
            CONEXÃO FACILITADA
          </h2>
          <p className="text-white/70 mt-6 text-base leading-relaxed">
            O Kit Starlink vem com tudo que você precisa para se conectar em poucos minutos. Você só precisa de uma visão desobstruída do céu.
          </p>
          <p className="text-white/70 mt-4 text-base leading-relaxed">
            Baixe o aplicativo Starlink para determinar o melhor local de instalação.
          </p>
          <div className="flex gap-6 mt-8">
            <a href="#" className="text-white text-xs font-semibold tracking-widest uppercase border-b border-white/40 pb-1">
              Baixar para Android →
            </a>
            <a href="#" className="text-white text-xs font-semibold tracking-widest uppercase border-b border-white/40 pb-1">
              Baixar para iOS →
            </a>
          </div>
        </div>
        <div className="aspect-[4/3] bg-neutral-900 rounded-sm overflow-hidden">
          <img src={bizFeature3D} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function DataAndSupport() {
  return (
    <section className="relative bg-black py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <div className="w-12 h-12 mb-6 border border-white/30 rounded flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rotate-45" />
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
            FRANQUIA DE DADOS FLEXÍVEL
          </h3>
          <p className="text-white/70 mt-6 text-sm leading-relaxed">
            Nossos planos prioritários são flexíveis e podem ser ajustados às suas necessidades de consumo de dados. Escolha um dos nossos planos predefinidos e ajuste-o acrescentando pacotes de dados de 50 GB ou 500 GB.
          </p>
        </div>
        <div>
          <div className="w-12 h-12 mb-6 border border-white/30 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-full" />
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
            ATENDIMENTO PRIORITÁRIO 24 HORAS
          </h3>
          <p className="text-white/70 mt-6 text-sm leading-relaxed">
            Os clientes dos planos de Dados Prioritários têm preferência na rede e recebem velocidades consistentemente mais rápidas. Os clientes dos planos Prioritários também têm suporte prioritário 24 horas por dia, 7 dias por semana, um endereço IPv4 roteado publicamente e contam com um Acordo de Nível de Serviço.
          </p>
        </div>
      </div>
    </section>
  );
}

function HighSeas() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden bg-stone-700">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-stone-700 to-stone-900" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-20">
        <div className="max-w-xl">
          <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-wide">
            ACESSO À REDE EM ALTO-MAR
          </h2>
          <p className="text-white/85 mt-6 text-base leading-relaxed">
            Use Dados Prioritários Globais em alto-mar. Agora inclui velocidades de download de até 1 Mbps e upload de 0,5 Mbps após esgotar a sua franquia de Dados Prioritários.
          </p>
          <button className="mt-8 px-6 py-2.5 bg-white text-black text-xs font-semibold tracking-widest uppercase rounded">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}

function SpaceX() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden bg-slate-800">
      <img src={bizFeature4D} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center px-6 md:px-20">
        <div className="max-w-xl">
          <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-wide">
            DESENVOLVIDA PELA SPACEX
          </h2>
          <p className="text-white/85 mt-6 text-base leading-relaxed">
            Como líder mundial em serviços de lançamento (e a única fornecedora com foguetes reutilizáveis de classe orbital) a SpaceX tem vasta experiência em espaçonaves e operações em órbita.
          </p>
          <button className="mt-8 px-6 py-2.5 bg-white text-black text-xs font-semibold tracking-widest uppercase rounded">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}

function Trial() {
  return (
    <section className="relative bg-black py-28 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_oklch(0.3_0_0)_0%,_transparent_70%)]" />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-wide">
          30 DIAS DE TESTE
        </h2>
        <p className="text-white/70 mt-6 text-base md:text-lg">
          Experimente a Starlink por 30 dias e, se o serviço não for satisfatório, receba reembolso total.
        </p>
        <div className="mt-10 text-left">
          <p className="text-white/80 text-xs tracking-[0.25em] uppercase mb-3">
            Endereço de uso do serviço
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="DIGITE E SELECIONE"
              className="flex-1 bg-transparent border border-white/30 rounded px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/60"
            />
            <button className="px-8 py-3 bg-white text-black text-xs font-semibold tracking-widest uppercase rounded">
              Começar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComercialPage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <UseCases />
      <KeepOnline />
      <EasyConnection />
      <DataAndSupport />
      <HighSeas />
      <SpaceX />
      <Trial />
      <StarlinkFooter />
    </main>
  );
}
