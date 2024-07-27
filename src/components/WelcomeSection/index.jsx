import Image from "next/image"
import { Button } from "../Button"
import { Container } from "../Container"
import { SearchInput } from "../SearchInput"

export const WelcomeSection = () => {
  return (
    <div className="max-w-[1763px] mx-auto  pb-[50px]">
      <div className="mt-4 mb-4 min-h-4 w-full">
        <Container className={"hidden md:block"}>
          <div className="flex items-center gap-6 justify-end">
            <Button>Masculino</Button>
            <Button>Feminino</Button>
            <SearchInput />
          </div>
        </Container>
      </div>
      <div className=" pt-[64px] pb-[32px] lg:pt-[154px] lg:pb-[70px] px-6 relative app-welcome-background">
        {/* <Image
          fill
          className="-z-10 inset-0 rounded-[50px] absolute w-full h-full object-cover app-welcome-image"
          src="/background.png"
          alt=""
        /> */}
        <Container className="">
          <h1 className="app-fade text-[42px] sm:text-[54px] lg:text-[94px] text-white">
            We believe in
          </h1>
          <h1 className="app-fade app-delay-500 text-[42px] sm:text-[54px] lg:text-[94px] text-white">
            free fashion
          </h1>
          <h2 className="mt-8 text-[20px] sm:text-[28px] lg:text-[32px] text-white max-w-[668px] app-fade app-delay-1000">
            Fashion is an art of expression, and we take it very seriously.
          </h2>
          <div className="mt-[100px] lg:mt-[174px] w-full flex justify-center lg:grid lg:grid-cols-3 items-center place-items-center gap-4  ">
            <div className="w-8 hidden lg:block"></div>
            <Button
              className="animate-fade-up animate-delay-500 text-ellipsis"
              variant={"secondary"}
            >
              Conheça a coleção 2000
            </Button>
            <Card />
          </div>
        </Container>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className="hidden lg:flex items-center gap-4 px-[20px] py-4 rounded-[20px] bg-white place-self-end cursor-pointer app-levitate">
      <img
        src="welcome-sweater.png"
        alt="sweater"
        className="w-[88px] rounded-full object-cover shadow-lg"
      />
      <div className="flex flex-col gap-2">
        <p>Cropped Mia coleção 2000</p>
        <div className="flex items-center gap-2">
          <img src="star.svg" alt="" />
          <img src="star.svg" alt="" />
          <img src="star.svg" alt="" />
          <img src="star.svg" alt="" />
        </div>
        <p>R$35,00</p>
      </div>
    </div>
  )
}
