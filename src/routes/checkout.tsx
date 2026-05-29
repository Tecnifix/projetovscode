import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { StarlinkHeader } from "@/components/StarlinkHeader";
import { StarlinkFooter } from "@/components/StarlinkFooter";
import qrcodePixPng from "@/assets/qrcode-pix.png";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Conclusão da Compra - Starlink" },
      {
        name: "description",
        content: "Finalize sua compra de plano Starlink",
      },
    ],
  }),
  validateSearch: (search: Record<string, any>) => ({
    plan: search.plan || "residencial",
    address: search.address || "",
  }),
  component: Checkout,
});

function Checkout() {
  const [selectedPlan, setSelectedPlan] = useState("MAX 600");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("Brasil");
  const [activationCode, setActivationCode] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | null>(null);
  const [pixCpf, setPixCpf] = useState("");
  const [showPixModal, setShowPixModal] = useState(false);

  const plans = [
    {
      name: "START 500",
      speed: "500+ Mbps",
      price: "67,90",
      badge: "EXCLUSIVO BRADESCO",
      badgeColor: "red",
      features: "Plano de entrada com 500+ Mbps, ideal para navegação, streaming e uso leve em casa ou viagem.",
    },
    {
      name: "MAX 600",
      speed: "600+ Mbps",
      price: "189",
      badge: "EXCLUSIVO BRADESCO",
      badgeColor: "red",
      features: "Plano intermediário para residências com mais dispositivos, vídeo chamadas e entretenimento sem interrupção.",
    },
    {
      name: "ULTRA 700",
      speed: "700+ Mbps",
      price: "249",
      badge: "EXCLUSIVO BRADESCO",
      badgeColor: "red",
      features: "Plano premium para a família ou uso intensivo, com alta capacidade para downloads, jogos e múltiplos aparelhos.",
    },
  ];

  const residentialPlans = [
    { name: "Residencial 500 Mbps", speed: "500+ Mbps", price: "189" },
    { name: "Residencial Max", speed: "600+ Mbps", price: "249" },
    { name: "Residencial Família", speed: "700+ Mbps", price: "423" },
  ];

  const allPlans = [
    ...plans.map((plan) => ({ ...plan, category: "promo" as const })),
    ...residentialPlans.map((plan) => ({ ...plan, category: "residencial" as const })),
  ];

  const currentPlan = allPlans.find((plan) => plan.name === selectedPlan) ?? plans[1];
  const isPromoPlan = currentPlan.category === "promo";
  const planLabel = isPromoPlan ? `Promo Bradesco - ${currentPlan.name}` : currentPlan.name;
  const planPrice = currentPlan.price;
  const oneTimeTitle = isPromoPlan ? "Adesão" : "Kit Mini";
  const oneTimeValue = isPromoPlan ? "R$ 10" : "R$ 799";
  const totalToday = isPromoPlan ? "R$ 10" : "R$ 799";

  // Animação de progresso por 15 segundos
  useEffect(() => {
    if (isValidating && loadingProgress < 100) {
      const timer = setTimeout(() => {
        setLoadingProgress((prev) => {
          const next = prev + 100 / 150; // 15 segundos em 100ms intervals
          if (next >= 100) {
            setIsValidating(false);
            setIsValidated(true);
            return 100;
          }
          return next;
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isValidating, loadingProgress]);

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = "5511947682585";
    const message = encodeURIComponent(
      "Oi, acabei de finalizar minha solicitação e quero receber meu código de ativação."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleValidateCode = () => {
    if (activationCode.trim()) {
      setIsValidating(true);
      setLoadingProgress(0);
    }
  };

  return (
    <>
      <StarlinkHeader />
      <section className="bg-black min-h-screen py-12 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-white text-4xl font-medium">Conclusão da compra</h1>
            <Link to="/" className="text-white/70 hover:text-white text-sm">
              ← Voltar
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Plans */}
            <div className="md:col-span-2">
              {/* Promo Plans */}
              <div className="mb-12">
                <h2 className="text-white text-lg font-semibold mb-4">Escolha seu plano</h2>
                <div className="space-y-4 mb-8">
                  {plans.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setSelectedPlan(p.name)}
                      className={`w-full p-4 rounded-lg border-2 transition text-left ${
                        selectedPlan === p.name
                          ? "border-red-600 bg-red-600/10"
                          : "border-white/20 hover:border-white/40 bg-black"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                            {p.badge}
                          </div>
                          <h3 className="text-white font-semibold text-lg">🚀 {p.name}</h3>
                          <p className="text-white/70 text-sm">{p.speed}</p>
                          <p className="text-white/60 text-xs mt-2">{p.features}</p>
                        </div>
                        <p className="text-red-600 text-2xl font-bold">R$ {p.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Residential Plans */}
              <div className="mb-12">
                <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Planos Residenciais</h3>
                <div className="space-y-3">
                  {residentialPlans.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setSelectedPlan(p.name)}
                      className={`w-full p-4 rounded-lg border-2 transition text-left ${
                        selectedPlan === p.name
                          ? "border-white bg-white/5"
                          : "border-white/20 hover:border-white/40 bg-black"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-white font-semibold">{p.name}</h3>
                          <p className="text-white/70 text-sm">{p.speed}</p>
                        </div>
                        <p className="text-white text-lg font-semibold">R$ {p.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-white text-lg font-semibold mb-4">Informações de contato</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                    />
                    <input
                      type="text"
                      placeholder="Sobrenome"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Número de telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="mb-12">
                <h2 className="text-white text-lg font-semibold mb-4">Endereço de envio</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="CEP/código postal"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                  />
                  <input
                    type="text"
                    placeholder="Número"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                  />
                  <input
                    type="text"
                    placeholder="Linha 2 do endereço de envio (opcional)"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Cidade"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                    />
                    <input
                      type="text"
                      placeholder="Estado/província"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="País"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              {/* Finalize */}
              <div className="mb-12">
                <h2 className="text-white text-lg font-semibold mb-4">Finalizar solicitação do plano</h2>
                <p className="text-white/70 text-sm mb-6">
                  Para concluir o seu pedido é necessário falar com um atendente pelo WhatsApp. De lá:
                </p>
                <ul className="text-white/70 text-sm space-y-2 mb-6">
                  <li>• Verificar a disponibilidade de sinal via satélite na sua região</li>
                  <li>• Orientar a forma de pagamento</li>
                  <li>• Encaminhar a distribuição do equipamento e configuração</li>
                  <li>
                    Enviar seu <span className="text-green-500 font-semibold">código de ativação</span> imediato.
                  </li>
                </ul>
                <p className="text-white/70 text-sm mb-6">
                  Após receber o código, informe - o abaixo para liberar o pagamento.
                </p>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition mb-6"
                >
                  FINALIZAR MINHA SOLICITAÇÃO DE PLANO (WHATSAPP)
                </button>
              </div>

              {/* Activation Code */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-4">Código de ativação</h2>
                <p className="text-red-500 text-xs mb-2">Informe o código enviado pelo Atendente para liberar as opções de pagamento.</p>

                {!isValidated ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ex: 01-AT-A162-C104"
                      value={activationCode}
                      onChange={(e) => setActivationCode(e.target.value)}
                      disabled={isValidating}
                      className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition disabled:opacity-50"
                    />
                    <button
                      onClick={handleValidateCode}
                      disabled={isValidating || !activationCode.trim()}
                      className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isValidating ? "VALIDANDO..." : "VALIDAR"}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Success Message */}
                    <div className="flex items-center gap-3 p-4 bg-green-600/20 border border-green-600 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-600 font-semibold">✓ Código validado com sucesso. Forma de pagamento liberada.</p>
                      </div>
                    </div>

                    {/* Payment Section */}
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-4">Pagamento</h3>
                      <div className="space-y-4">
                        {/* Payment Method Selection */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <button
                            onClick={() => {
                              setPaymentMethod("pix");
                              setPixCpf("");
                              setShowPixModal(false);
                            }}
                            className={`p-4 rounded-lg border-2 transition text-left ${
                              paymentMethod === "pix"
                                ? "border-green-600 bg-green-600/10"
                                : "border-white/20 hover:border-white/40 bg-black"
                            }`}
                          >
                            <p className="text-white font-semibold">Pix</p>
                            <p className="text-white/70 text-sm">Pagamento instantâneo via Pix</p>
                          </button>
                          <button
                            onClick={() => setPaymentMethod("card")}
                            className={`p-4 rounded-lg border-2 transition text-left ${
                              paymentMethod === "card"
                                ? "border-green-600 bg-green-600/10"
                                : "border-white/20 hover:border-white/40 bg-black"
                            }`}
                          >
                            <p className="text-white font-semibold">Cartão</p>
                            <p className="text-white/70 text-sm">Débito ou crédito</p>
                          </button>
                        </div>

                        {/* Pix Section */}
                        {paymentMethod === "pix" && !showPixModal && (
                          <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                            <p className="text-white/70 text-sm mb-4">Para proceder com o pagamento via Pix, informe seu CPF:</p>
                            <input
                              type="text"
                              placeholder="Digite seu CPF (ex: 123.456.789-00)"
                              value={pixCpf}
                              onChange={(e) => setPixCpf(e.target.value)}
                              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition mb-4"
                            />
                            <button
                              onClick={() => pixCpf.trim() && setShowPixModal(true)}
                              disabled={!pixCpf.trim()}
                              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              PROCEDER COM PIX
                            </button>
                          </div>
                        )}

                        {/* Card Section */}
                        {paymentMethod === "card" && (
                          <div className="bg-white/5 border border-white/20 rounded-lg p-4 space-y-3">
                            <input
                              type="text"
                              placeholder="Número do cartão"
                              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                            />
                            <div className="grid md:grid-cols-3 gap-3">
                              <input
                                type="text"
                                placeholder="MM/AA"
                                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                              />
                              <input
                                type="text"
                                placeholder="CVV"
                                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                              />
                              <input
                                type="text"
                                placeholder="Titular"
                                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition"
                              />
                            </div>
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition">
                              FAZER PAGAMENTO
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Pix Payment Modal */}
                {showPixModal && (
                  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 max-w-sm mx-4 relative">
                      {/* Close Button */}
                      <button
                        onClick={() => setShowPixModal(false)}
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      <h2 className="text-white text-xl font-semibold text-center mb-6">Pagamento via Pix</h2>

                      {/* QR Code */}
                      <div className="bg-white p-4 rounded-lg mb-6 flex justify-center">
                        <img src={qrcodePixPng} alt="QR Code Pix" className="w-48 h-48" />
                      </div>

                      {/* Amount */}
                      <p className="text-white text-center text-2xl font-bold mb-6">R$ {totalToday.replace("R$ ", "")}.00</p>

                      {/* Pix Key */}
                      <p className="text-white/70 text-sm mb-2">Chave Pix:</p>
                      <div className="flex gap-2 mb-6">
                        <input
                          type="text"
                          value="00020126580014br.gov.bcb.pix0136xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx52040000530398654061.005802BR5913STARLINK6009SAO PAULO62410503***63041D3D"
                          readOnly
                          className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-xs focus:outline-none"
                        />
                      </div>

                      {/* Copy Button */}
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("00020126580014br.gov.bcb.pix0136xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx52040000530398654061.005802BR5913STARLINK6009SAO PAULO62410503***63041D3D");
                        }}
                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-white/90 transition mb-3"
                      >
                        COPIAR CHAVE PIX
                      </button>

                      {/* Info Text */}
                      <p className="text-white/60 text-xs text-center">Após o pagamento, sua compra será confirmada automaticamente.</p>
                    </div>
                  </div>
                )}

                {/* Loading Animation */}
                {isValidating && (
                  <div className="mt-6 flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-4">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20" />
                        {/* Progress circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray={`${Math.PI * 90 * (loadingProgress / 100)} ${Math.PI * 90}`}
                          strokeLinecap="round"
                          className="text-green-600 transition-all duration-100"
                          style={{ transformOrigin: "50% 50%", transform: "rotate(-90deg)" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white font-semibold text-lg">{Math.round(loadingProgress)}%</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm text-center">Aguardando finalização do pagamento</p>
                    <p className="text-white/50 text-xs text-center mt-2">Validando seu código de ativação e preparando o pagamento. Isso pode levar alguns segundos.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white/5 border border-white/20 rounded-lg p-6 sticky top-4">
                <h2 className="text-white text-lg font-semibold mb-6">Resumo do pedido</h2>

                <div className="space-y-4 pb-6 border-b border-white/20">
                  <div>
                    <p className="text-white/70 text-sm mb-2">Pagamento mensal</p>
                    <p className="text-white font-semibold">{planLabel}</p>
                    <p className="text-white text-lg font-bold">
                      R$ {planPrice}
                      <span className="text-white/70 text-sm">/mês</span>
                    </p>
                    <p className="text-white/60 text-xs mt-2">*Cobrança após ativação ou 7 dias após a entrega, o que ocorrer primeiro.</p>
                  </div>
                </div>

                <div className="space-y-3 pb-6 border-b border-white/20">
                  <div className="flex justify-between">
                    <p className="text-white/70 text-sm">Pagamento único</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-white text-sm">{oneTimeTitle}</p>
                    <p className="text-white font-semibold">{oneTimeValue}</p>
                  </div>
                  {isPromoPlan && (
                    <div className="flex justify-between">
                      <p className="text-white text-sm">Kit Starlink</p>
                      <p className="text-white">Incluso</p>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <p className="text-white text-sm">Envio e manuseio</p>
                    <p className="text-white">Grátis</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white text-sm">Instalação</p>
                    <p className="text-white">Grátis</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white text-sm">Equipamento</p>
                    <p className="text-white">Incluso</p>
                  </div>
                  {isPromoPlan && (
                    <div className="flex justify-between">
                      <p className="text-white text-sm">1º pagamento</p>
                      <p className="text-white">em 4 meses</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center mb-6 pt-6">
                  <p className="text-white font-semibold">Total a pagar hoje</p>
                  <p className="text-white text-2xl font-bold">{totalToday}</p>
                </div>

                <p className="text-white/60 text-xs">
                  Aviso sobre PJ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StarlinkFooter />
    </>
  );
}
