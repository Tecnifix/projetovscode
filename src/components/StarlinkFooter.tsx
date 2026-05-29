export function StarlinkFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-white font-medium mb-4">Starlink</h4>
          <ul className="space-y-2 text-white/60">
            <li><a href="#" className="hover:text-white">Residencial</a></li>
            <li><a href="#" className="hover:text-white">Viagem</a></li>
            <li><a href="#" className="hover:text-white">Comercial</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Suporte</h4>
          <ul className="space-y-2 text-white/60">
            <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
            <li><a href="#" className="hover:text-white">Especificações</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Empresa</h4>
          <ul className="space-y-2 text-white/60">
            <li><a href="#" className="hover:text-white">Sobre</a></li>
            <li><a href="#" className="hover:text-white">Imprensa</a></li>
            <li><a href="#" className="hover:text-white">Carreiras</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Legal</h4>
          <ul className="space-y-2 text-white/60">
            <li><a href="#" className="hover:text-white">Privacidade</a></li>
            <li><a href="#" className="hover:text-white">Termos</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
        © {new Date().getFullYear()} Starlink. Todos os direitos reservados.
      </div>
    </footer>
  );
}
