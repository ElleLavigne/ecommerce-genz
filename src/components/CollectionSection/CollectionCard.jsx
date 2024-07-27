import Image from "next/image"

export const CollectionCard = ({
  imgSource = "",
  imgSource2 = "",
  className = "",
}) => {
  return (
    <>
      <div
        className={`h-[544px] min-w-[200px] rounded-[20px] overflow-hidden p-8 relative card-shadow ${className}`}
      >
        {imgSource2 && (
          <Image
            src={imgSource2}
            fill
            className="object-cover transition-all hover:opacity-1 duration-500"
          />
        )}
        <Image
          src={imgSource}
          fill
          className="object-cover transition-all hover:opacity-0 duration-500"
        />
      </div>
    </>
  )
}
