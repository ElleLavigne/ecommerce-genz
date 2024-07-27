import { CollectionSection } from "@/components/CollectionSection"
import { Container } from "@/components/Container"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductsSection } from "@/components/ProductsSection"
import { WelcomeSection } from "@/components/WelcomeSection"
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <Container className={"px-6"}>
        <Header></Header>
      </Container>
      <div className="space-y-6 px-6">
        <WelcomeSection />
        <CollectionSection />
        <ProductsSection />
      </div>
      <Footer />
    </main>
  )
}
