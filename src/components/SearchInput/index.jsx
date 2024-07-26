export const SearchInput = () => {
  return (
    <>
      <div className="border border-stroke py-[10px] px-4 rounded-lg flex items-center gap-2">
        <input className="outline-none" type="text" name="Search" placeholder="Pesquisar..." />
        <img src="search.svg" alt="" />
      </div>
    </>
  )
}