import { useEffect, useState } from 'react';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [fixed, setFixed] = useState(false);

  /* Toggle Navbar */
  const toggleFunc = () => {
    setToggle(!toggle);
  }

  /* Set Fixed Header */
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 300) {
        setFixed(true);
      }
      else setFixed(false);
    })

    return () => {
      window.removeEventListener('scroll', () => {
        setFixed(false);
      });
    }
  }, [])

  return ( 
    <header className={`py-3 flex justify-between items-center ${fixed ? 'fixed top-0 left-0 w-full h-auto z-10 px-5 bg-gradient-to-b from-[#361cc1] to-[#2e82ef] shadow-2xl sm:px-10 py-4 md:px-20 md:py-5' : ''}`}>
      <a href="/#" className="uppercase text-3xl text-white font-bold">Basic</a>
      {<ul className={`bg-white text-black p-3 fixed top-0 left-0 w-full z-10 shadow-lg transition ${toggle ? 'translate-x-0' : 'translate-x-full'} 
        sm:bg-transparent sm:text-white sm:relative sm:translate-x-0 sm:shadow-none sm:flex sm:justify-between sm:items-center sm:pl-8 sm:pr-0 sm:py-0
        md:pl-14 
        lg:pr-14
        xl:px-32`
        }>
        <li className="text-lg mb-4 sm:mb-0"> 
          <a href="/#" className="block w-full text-center hover:text-red-400" onClick={toggleFunc}>Home</a>
        </li>
        <li className="text-lg mb-4 sm:mb-0">
          <a href="#feature" className="block w-full text-center hover:text-red-400" onClick={toggleFunc}>Features</a>
        </li>
        <li className="text-lg mb-4 sm:mb-0">
          <a href="#about" className="block w-full text-center hover:text-red-400" onClick={toggleFunc}>About</a>
        </li>
        <li className="text-lg mb-4 sm:mb-0">
          <a href="#why" className="block w-full text-center hover:text-red-400" onClick={toggleFunc}>Why</a>
        </li>
        <li className="text-lg mb-4 sm:mb-0">
          <a href="#team" className="block w-full text-center hover:text-red-400" onClick={toggleFunc}>Team</a>
        </li>
        <li className="text-lg mb-4 sm:mb-0">
          <a href="#blog" className="block w-full text-center hover:text-red-400" onClick={toggleFunc}>Blog</a>
        </li>
        <li className="text-lg mb-4 last:mb-0 sm:hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="block w-full h-8 text-center sm:hidden"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth="2"
            onClick={toggleFunc}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg> 
        </li>
      </ul>}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={toggle ? "h-8 w-8 text-white relative top-1 hidden sm:hidden" : "h-8 w-8 text-white relative top-1 sm:hidden"}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
        onClick={toggleFunc}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg> 
      <button className="bg-gradient-to-r from-[#fe8464] via-[#fe6e9a] to-[#fe8464] text-white px-5 py-3 rounded-lg font-medium hover:shadow-2xl cursor-pointer hidden lg:block" style={{transition: "all .5s"}}>Download</button>
    </header>
  );
}

export default Header;