import React,{useState} from 'react'

function Header() {

  const [navbarOpen, setNavbarOpen] = useState(false);

	
	return (
	
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a
          className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="/"
        >
        Patel's Blog
        </a>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-white rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars" color='white'></i>
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="/"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="pylint"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pylint</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="aaa-testing"
            >
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">AAA Testing</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="oop"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">OOP's</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="design-patterns"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Design Patterns</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



	)
}

export default Header
