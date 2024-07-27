export const Header = () => {
  return (
    <header className="p-4 flex items-center justify-between">
      <img src="logo.svg" alt="logo" className="svg" />
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4">
          <a className="app-text" href="">Sobre Nós</a>
          <a className="app-text" href="">Acessibilidade</a>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <button>
            <img src="profile.svg" alt="" />
          </button>
          <button>
            <img src="favorite.svg" alt="" />
          </button>
          <button>
            <img src="bag.svg" alt="" />
          </button>
        </div>
      </div>
    </header>
  )
 
}