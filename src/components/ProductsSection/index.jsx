import Image from "next/image"
import { Button } from "../Button"
import { Container } from "../Container"
import { SearchInput } from "../SearchInput"
import { ProductCard } from "./ProductCard"

export const ProductsSection = () => {
  const products = [
    {
      title: "Suéter Cinza linho",
      imgSource: "/gray-sweater.png",
      imgSource2: "/gray-sweater-2.png",
      price: 60,
    },
    {
      title: "Suéter Vinho",
      imgSource: "/lilac-sweater.png",
      imgSource2: "/lilac-sweater-2.png",
      price: 100,
    },
    {
      title: "Suéter Marrom Gola",
      imgSource: "/brown-sweater.png",
      imgSource2: "/brown-sweater-2.png",
      price: 100,
    },
  ]
  return (
    <div className="pb-[80px]">
      <Container>
        <header className="mb-6">
          <h1 className="app-title mb-4">Conheça nossas peças autênticas</h1>
        </header>
        <div className="products-container ">
          {products.map((product, index) => {
            return (
              <ProductCard
                key={product.title + index}
                imgSource={product.imgSource}
                imgSource2={product.imgSource2}
                title={product.title}
                price={product.price}
                className=""
              />
            )
          })}
        </div>
      </Container>
    </div>
  )
}
