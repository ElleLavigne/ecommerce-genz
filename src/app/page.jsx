import { CollectionSection } from "@/components/CollectionSection"
import { Container } from "@/components/Container"
import { Header } from "@/components/Header"
import { ProductsSection } from "@/components/ProductsSection"
import { WelcomeSection } from "@/components/WelcomeSection"
import Image from "next/image"

export default function Home() {
  return (
    <main className="pb-20">
      <Container>
        <Header></Header>
      </Container>
      <div className="space-y-6" >
        <WelcomeSection />
        <CollectionSection />
        <ProductsSection />
      </div>
    </main>
  )
}
