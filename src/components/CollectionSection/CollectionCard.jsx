import Image from "next/image"

export const CollectionCard = ({ imgSource = "", className = "" }) => {
  return (
    <>
      <div
        className={`h-[544px] min-w-[200px] rounded-[20px] overflow-hidden p-8 relative card-shadow ${className}`}
      >
        <Image src={imgSource} fill className="object-cover" />
      </div>
    </>
  )
}
