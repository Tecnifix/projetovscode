import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { StarlinkHeader } from "@/components/StarlinkHeader";
import { StarlinkFooter } from "@/components/StarlinkFooter";
import heroImg from "@/assets/v4-night-sky.webp";
import heroImgMobile from "@/assets/v4-night-sky-mobile.webp";
import featCabin from "@/assets/feat-cabin-lights.webp";
import featHiker from "@/assets/feat-hiker.webp";
import featDuskHouse from "@/assets/feat-dusk-house.webp";
import featRock from "@/assets/feat-rock.webp";
import illustration10 from "@/assets/illustration-10.webp";

export const Route = createFileRoute("/inicio")({
  head: () => ({
    meta: [
      { title: "Começar - Starlink | Internet de Alta Velocidade" },
      {
        name: "description",
        content: "Comece sua jornada com Starlink. Escolha seu plano de internet.",
      },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  const [tab, setTab] = useState<"residencial" | "viagem">("residencial");
  const [phone, setPhone] = useState("");

  const plans = [
    {
      name: "Residencial",
      desc: "Internet residencial de alta velocidade",
    },
    {
      name: "MAX 600+ Mbps",
      desc: "Nosso serviço de internet residencial de melhor desempenho",
    },
    {
      name: "Família 700+ Mbps",
      desc: "Inclui dois planos do serviço Residencial",
    },
  ];

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-neutral-900">
        <img
          src={heroImgMobile}
          alt=""
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

        <StarlinkHeader />

        <div className="relative z-10 min-h-screen flex items-center px-6 md:px-10 pt-32">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-4">
              {tab === "residencial"
                ? "INTERNET RESIDENCIAL RÁPIDA E ESTÁVEL"
                : "CONECTE-SE EM QUALQUER LUGAR"}
            </h1>

            <p className="text-white/80 text-base md:text-lg mb-2">
              {tab === "residencial"
                ? "R$ 1.199 R$ 499 pela Starlink Mini"
                : "Leve internet onde você quiser"}
            </p>

            <p className="text-white/70 text-sm mb-6">
              {tab === "residencial"
                ? "Exclusivo para os planos Família e Residencial Máx. Os 12 primeiros de R$ 49 no seu cartão"
                : "Plano de viagem com 100GB a partir de R$ 339/mês"}
            </p>

            <p className="text-white/90 text-sm mb-8">
              {tab === "residencial"
                ? "Comece abaixo ou ligue para +55 (11) 1914"
                : "Comece agora e leve Starlink com você"}
            </p>

            <div className="mb-8">
              <label className="block text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                {tab === "residencial"
                  ? "Inscreva-se ligando agora"
                  : "Digite seu número"}
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Digite e selecione"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                />
                <button className="px-6 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-white/90 transition whitespace-nowrap">
                  Começar
                </button>
              </div>
            </div>

            {/* Tab Selection */}
            <div className="flex gap-2">
              <button
                onClick={() => setTab("residencial")}
                className={`text-sm font-medium transition ${
                  tab === "residencial"
                    ? "text-white border-b-2 border-white pb-2"
                    : "text-white/60 hover:text-white/80 pb-2"
                }`}
              >
                Residencial
              </button>
              <button
                onClick={() => setTab("viagem")}
                className={`text-sm font-medium transition ${
                  tab === "viagem"
                    ? "text-white border-b-2 border-white pb-2"
                    : "text-white/60 hover:text-white/80 pb-2"
                }`}
              >
                Viagem
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="bg-neutral-950 py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-medium mb-2 tracking-tight">
            ASSISTA A FILMES, FAÇA VIDEOCHAMADAS, JOGUE E MUITO MAIS
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mt-12 mb-16">
            {/* Plan Cards */}
            <div className="border border-white/20 rounded-lg p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Residencial 500+ Mbps</h3>
              <p className="text-white/70 text-sm mb-4">
                Serviço de internet residencial estável e acessível para uma conectividade sem entraves.
              </p>
              <p className="text-3xl font-medium">R$ 189</p>
              <p className="text-white/60 text-xs mt-1">Dados ilimitados</p>
              <p className="text-white/60 text-xs mt-3">
                Wi-Fi com bom desempenho
              </p>
            </div>

            <div className="border border-white/20 rounded-lg p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Residencial MAX 600+ Mbps</h3>
              <p className="text-white/70 text-sm mb-4">
                Nosso serviço de internet residencial com melhor desempenho e maior velocidade disponível.
              </p>
              <p className="text-3xl font-medium">R$ 249</p>
              <p className="text-white/60 text-xs mt-1">Wi-Fi com melhor desempenho</p>
              <p className="text-white/60 text-xs mt-3">
                Kit Mini grátis para viagens
              </p>
            </div>

            <div className="border border-white/20 rounded-lg p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Residencial FAMÍLIA 700+ Mbps</h3>
              <p className="text-white/70 text-sm mb-4">
                Inclui dois planos do serviço Residencial, a melhor opção de internet residencial.
              </p>
              <p className="text-3xl font-medium">R$ 423</p>
              <p className="text-white/60 text-xs mt-1">Dados ilimitados</p>
              <p className="text-white/60 text-xs mt-3">
                Kit Mini grátis e 15% de desconto
              </p>
            </div>

            <div className="border-2 border-red-600 rounded-lg p-6 text-white bg-red-600/10 relative">
              <div className="absolute -top-3 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                PROMO BRADESCO
              </div>
              <h3 className="font-semibold text-lg mb-2 mt-2">START 500+ Mbps</h3>
              <p className="text-white/70 text-sm mb-4">
                Pacote exclusivo Starlink com instalação grátis, equipamento incluído.
              </p>
              <p className="text-3xl font-medium">R$ 67,90</p>
              <p className="text-white/60 text-xs mt-1">Primeiro pagamento em até 4 meses</p>
              <p className="text-white/60 text-xs mt-3">
                R$ 10 de adesão
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/precos"
              className="px-8 py-3 border border-white/40 text-white rounded-lg font-medium hover:bg-white/10 transition text-center"
            >
              Exibir todos os planos
            </Link>
            <button className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition">
              Começar
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div>
              <img src={featCabin} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">STREAMING SEM INTERRUPÇÕES</h3>
              <p className="text-white/70 text-sm">
                Aproveite a alta velocidade para assistir a filmes e eventos ao vivo em alta definição e em sua plataforma de streaming.
              </p>
            </div>

            <div>
              <img src={featHiker} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">TRABALHO REMOTO</h3>
              <p className="text-white/70 text-sm">
                Trabalhe com a velocidade e disponibilidade da Starlink. Faça regularmente chamadas com áudio e vídeo de alta qualidade.
              </p>
            </div>

            <div>
              <img src={featDuskHouse} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">JOGOS ON-LINE COM BAIXA LATÊNCIA</h3>
              <p className="text-white/70 text-sm">
                Jogue em casa com qualidade sem lag. A Starlink oferece conexão rápida e confiável para uma melhor experiência.
              </p>
            </div>
          </div>

          {/* Mini Kit Section */}
          <div className="bg-neutral-900 rounded-lg p-12 mb-20 text-center">
            <h2 className="text-white text-3xl font-medium mb-4">KIT MINI GRÁTIS PARA VIAGENS</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Com o Residencial Máx, você tem direito a uma Starlink Mini grátis. Kit portátil que funciona em qualquer lugar com acessórios, baterias, cabos e muito mais com mais de 150 mercados.
            </p>
            <button className="px-6 py-2.5 border border-white/40 text-white rounded-lg font-medium hover:bg-white/10 transition">
              Começar
            </button>
          </div>

          {/* Family Plan */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <img src={featRock} alt="" className="w-full rounded-lg" />
            <div>
              <h2 className="text-white text-3xl font-medium mb-4">PLANO FAMILIAR COM DESCONTO</h2>
              <p className="text-white/70 mb-6">
                Receba uma Starlink. Mini grátis para um membro da sua família em uma segunda propriedade e realize uma promoção de 15% de desconto em novos planos Residenciais.
              </p>
              <button className="px-6 py-2.5 border border-white/40 text-white rounded-lg font-medium hover:bg-white/10 transition">
                Começar
              </button>
            </div>
          </div>

          {/* Starlink Mini */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white text-3xl font-medium mb-4">STARLINK MINI</h2>
              <p className="text-white/70 mb-6">
                A Starlink Mini é o satélite que combina portabilidade com uma grande velocidade de internet da alta velocidade e a acessibilidade e conectado em qualquer lugar em sua velocidade de download acima de 200 Mbps.
              </p>
              <button className="px-6 py-2.5 text-white underline hover:no-underline transition">
                Ver especificações →
              </button>
            </div>
            <img src={illustration10} alt="" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-950 py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl font-medium mb-12 text-center">O QUE DIZEM NOSSOS CLIENTES</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">BAIXA LATÊNCIA</h3>
              <p className="text-white/70 text-sm">
                "É um cenário totalmente diferente. Antes de Starlink, precisávamos economizar os dados e não podíamos usar serviços de streaming. Agora, temos funções pelo Zoom e tudo isso bem fácil."
              </p>
              <p className="text-white/60 text-xs mt-4">— William D. do Colorado, EUA</p>
            </div>

            <div className="border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">UM DIVISOR DE ÁGUAS</h3>
              <p className="text-white/70 text-sm">
                "Está em outro patamar! Sem promessas exageradas, nem desempenho entediante como com o provedor anterior. É só me ver conectado no cabo apontador a antena para a cor! Em minutos, não, que antes d'antemão rápida de região."
              </p>
              <p className="text-white/60 text-xs mt-4">— Aarón W., do sul da Patagônia</p>
            </div>

            <div className="border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">RAPIDEZ IMPRESSIONANTE</h3>
              <p className="text-white/70 text-sm">
                "Milhões são bem arredores à internet, mas tenho a alegria de usar que já não fazemos mais parte daquele grupo. Com uma rapidez em questão de minutos, a Starlink entrega uma oportunidade de conexão."
              </p>
              <p className="text-white/60 text-xs mt-4">— Neil V., de Nova Gales do Sul, Austrália</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-3xl font-medium mb-4">30 DIAS DE TESTE</h2>
          <p className="text-white/70 mb-8">
            Experimente a Starlink por 30 dias e se o serviço não for satisfatório, recebi reembolso total.
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition inline-block">
            Começar
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-neutral-950 py-20 px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-2xl font-medium mb-2">RECEBA NOVIDADES DA STARLINK POR E-MAIL</h2>
          <p className="text-white/70 mb-6">Cadastre-se abaixo</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
            />
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition">
              Cadastrar-se
            </button>
          </div>
        </div>
      </section>

      <StarlinkFooter />
    </>
  );
}
