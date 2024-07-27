import Image from "next/image"

export const CollectionCard = ({
  imgSource = "",
  imgSource2 = "",
  className = "",
  children,
}) => {
  return (
    <>
      <div
        className={`h-[544px] flex flex-col justify-end min-w-[200px] rounded-[20px] overflow-hidden p-8 relative card-shadow ${className} relative`}
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
        <div className="flex items-center gap-4 z-[1] ">{children}</div>
      </div>
    </>
  )
}
