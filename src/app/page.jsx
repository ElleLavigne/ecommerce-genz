import { CollectionSection } from "@/components/CollectionSection"
import { Container } from "@/components/Container"
import { Header } from "@/components/Header"
import { WelcomeSection } from "@/components/WelcomeSection"
import Image from "next/image"

export default function Home() {
  return (
    <main className="pb-20">
      <Container>
        <Header></Header>
      </Container>
      <WelcomeSection />
      <CollectionSection />
    </main>
  )
}
