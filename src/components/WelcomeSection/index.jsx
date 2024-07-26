
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

        {/* <select className="" name="Categoria" id="">
          <option value="">Categoria</option>
          <option value="beach">Praia</option>
          <option value="gym">Academia</option>
        </select> */}
      </div>
      <img className="" src="background.png" alt="" />
    </div>
  )
}