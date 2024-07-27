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
      <div className="border border-red-400 h-[90vh] relative">
        <img
          className="-z-10 inset-0 rounded-[50px] absolute w-full h-full object-cover"
          src="background.png"
          alt=""
        />
        <Container>
        
            <h1 className=" mt-[154px] text-[94px] text-white">
              <span>We believe in</span>
              <br />
              <span>free fashion</span>
            </h1>
            <h2 className="text-[32px] text-white max-w-[668px]">
              Fashion is an art of expression, and we take it very seriously.
            </h2>
          
        </Container>
      </div>
    </div>
  )
}
