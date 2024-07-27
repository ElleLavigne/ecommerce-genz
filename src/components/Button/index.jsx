export const Button = ({ children, variant, className = "", size }) => {
  const primaryClass = "border border-stroke rounded-lg px-4 py-[10px]"
  const secondaryClass =
    "px-[30px] py-3 bg-white rounded-[24px] shadow-lg shadow-black-100 font-medium"

  const variantStyle = variant === "secondary" ? secondaryClass : primaryClass
  const sizeStyle = size === "icon" ? "w-[44px] h-[44px] !p-2" : ""
  return (
    <button className={`${variantStyle} ${sizeStyle} ${className}`}>
      {children}
    </button>
  )
}
