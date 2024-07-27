export const Button = ({ children, variant, className = "" }) => {
  const primaryClass = "border border-stroke rounded-lg px-4 py-[10px]"
  const secondaryClass =
    "px-[30px] py-4 bg-white rounded-[24px] shadow-lg shadow-black-100 font-medium"
  const style = variant === "secondary" ? secondaryClass : primaryClass
  return <button className={`${style} ${className}`}>{children}</button>
}
