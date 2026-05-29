import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Wifi, CheckCircle2, PlayCircle } from "lucide-react";
import { StarlinkHeader } from "@/components/StarlinkHeader";
import { StarlinkFooter } from "@/components/StarlinkFooter";

export const Route = createFileRoute("/como-instalar")({
  head: () => ({
    meta: [
      { title: "Como instalar — Starlink" },
      { name: "description", content: "Aprenda a instalar a sua Starlink pelo celular assistindo ao vídeo do Assistente de Configuração." },
    ],
  }),
  component: ComoInstalarPage,
});

const steps = [
  {
    icon: Smartphone,
    title: "1. Receba o aplicativo Starlink",
    description: "O app da Starlink é disponibilizado exclusivamente através do WhatsApp. Entre em contato pelo nosso WhatsApp oficial para receber o aplicativo antes de iniciar a instalação.",
  },
  {
    icon: PlayCircle,
    title: "2. Assista ao vídeo do Assistente",
    description: "O vídeo abaixo mostra passo a passo o Assistente de Configuração. Acompanhe junto com o aplicativo aberto no seu celular.",
  },
  {
    icon: Wifi,
    title: "3. Conecte-se à rede Starlink",
    description: "Posicione a antena em local com vista desobstruída do céu, ligue na tomada e conecte o celular à rede Wi-Fi STARLINK.",
  },
  {
    icon: CheckCircle2,
    title: "4. Conclua pelo aplicativo",
    description: "Siga as instruções do app para criar sua rede, definir senha e começar a navegar. Pronto, sua internet já está funcionando!",
  },
];

function ComoInstalarPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <StarlinkHeader />

      <main className="flex-1 pt-28 md:pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-4">
              Central de ajuda
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              Como instalar
            </h1>
            <p className="mt-5 text-neutral-300 max-w-2xl mx-auto text-base md:text-lg">
              Instalação completa feita pelo celular. Assista ao vídeo abaixo para
              aprender a instalar e ativar a sua Starlink em poucos minutos.
            </p>
            <div className="mt-6 inline-block border border-amber-500/40 bg-amber-500/10 text-amber-200 text-sm rounded-md px-4 py-3 max-w-xl">
              Importante: o aplicativo da Starlink é disponibilizado{" "}
              <strong className="font-semibold">exclusivamente através do WhatsApp</strong>.
              Solicite o app pelo nosso WhatsApp oficial antes de iniciar a instalação.
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
            <video
              src="/videos/assistente-configuracao.mp4"
              controls
              playsInline
              className="w-full h-auto block bg-black"
            >
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>

          <p className="text-center text-sm text-neutral-400 mt-4">
            Assistente de Configuração — Starlink
          </p>

          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-10">
              Passo a passo da instalação
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="border border-neutral-800 rounded-md p-6 bg-neutral-900/40 hover:bg-neutral-900/70 transition"
                >
                  <step.icon className="w-7 h-7 text-white mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-neutral-800 pt-10 text-center">
            <h2 className="text-xl md:text-2xl font-light mb-3">
              Precisa de mais ajuda?
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Assista ao vídeo quantas vezes for necessário. Se ainda tiver dúvidas,
              acesse a Central de Ajuda ou entre em contato com o suporte Starlink.
            </p>
          </section>
        </div>
      </main>

      <StarlinkFooter />
    </div>
  );
}
