import { Container } from "../Container"

export const Footer = ({ children, variant, className = "", size }) => {
  return (
    <footer className="bg-stroke pb-20">
      <Container className={"p-6 flex flex-wrap items-start gap-2"}>
        <div className="space-y-6 md:min-w-[500px]">
          <img src="logo.svg" />
          <p>Nome do bairro, 1009 - Teresina PI</p>
          <div className="flex items-center gap-[10px]">
            <img src="instagram.svg" alt="" />
            <img src="tiktok.svg" alt="" />
            <img src="x.svg" alt="" />
          </div>
        </div>
        <nav className="grid grid-cols-2">
          <div className="space-y-6">
            <p className="font-black">Links</p>
            <a href="">Coleção</a>
            <a href="">Sobre nós</a>
            <a href="">Peças</a>
          </div>
          <div className="space-y-6">
            <p className="font-black">Ajuda</p>
            <a href="">Pagamentos</a>
            <a href="">Políticas e privacidade</a>
          </div>
        </nav>
      </Container>
    </footer>
  )
}
