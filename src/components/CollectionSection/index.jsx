import Image from "next/image"
import { Button } from "../Button"
import { Container } from "../Container"
import { SearchInput } from "../SearchInput"
import { CollectionCard } from "./CollectionCard"

export const CollectionSection = () => {
  return (
    <div className="min-h-[500px]">
      <Container>
        <header className="mb-6">
          <h1 className="app-title mb-4">Coleção</h1>
          <div className="relative h-[1px] w-[calc(50%-1rem)] bg-black">
            <span className="block h-2 w-2 bg-black left-0 rounded-full top-[50%] translate-y-[-50%] "></span>
          </div>
        </header>
        <div className="grid grid-cols-4 gap-4">
          <CollectionCard imgSource="/card-2000.png" className="col-span-2" />
          <CollectionCard imgSource="/business-card.png" className="" />
          <CollectionCard imgSource="/summer-card.png" className="" />
        </div>
      </Container>
    </div>
  )
}
