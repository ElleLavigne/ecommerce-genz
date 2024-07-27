import Image from "next/image"
import { Button } from "../Button"
import { Container } from "../Container"
import { SearchInput } from "../SearchInput"

export const WelcomeSection = () => {
  return (
    <div className="max-w-[1763px] mx-auto">
      <div className="mt-8 mb-8">
        <Container>
          <div className="flex items-center gap-6 justify-end">
            <Button>Masculino</Button>
            <Button>Feminino</Button>
            <SearchInput />
          </div>
        </Container>
      </div>
      <div className="pt-[154px]  h-[90vh] relative">
        {/* <img
          className="-z-10 inset-0 rounded-[50px] absolute w-full h-full object-cover"
          src="background.png"
          alt=""
        /> */}
        <Image
          fill
          className="-z-10 inset-0 rounded-[50px] absolute w-full h-full object-cover"
          src="/background.png"
          alt=""
        />
        <Container>
          {/* <span className="">We believe in</span> */}
          <h1 className="app-fade text-[94px] text-white">We believe in</h1>

          <h1 className="app-fade-2 text-[94px] text-white">free fashion</h1>
          {/* <span>free fashion</span> */}

          <h2 className="text-[32px] text-white max-w-[668px]">
            Fashion is an art of expression, and we take it very seriously.
          </h2>
        </Container>
      </div>
    </div>
  )
}
