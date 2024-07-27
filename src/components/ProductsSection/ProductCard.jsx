import Image from "next/image"
import { Stars } from "../Stars"

export const ProductCard = ({
  imgSource = "",
  imgSource2 = "",
  title = "",
  price = 0,
}) => {
  function toCurrency(number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number)
  }
  return (
    <>
      <div>
        <div
          className={`h-[544px] flex flex-col rounded-[20px] overflow-hidden relative mb-6`}
        >
          {imgSource2 && (
            <Image
              src={imgSource2}
              fill
              className="object-cover transition-all hover:opacity-1 duration-500 "
            />
          )}
          <Image
            src={imgSource}
            fill
            className="object-cover transition-all hover:opacity-0 duration-500  "
          />
        </div>
        <div>
          <h3 className="mb-2 app-title">{title}</h3>
          <Stars />
          <p className="mt-6 app-title">{toCurrency(price)}</p>
        </div>
      </div>
    </>
  )
}
