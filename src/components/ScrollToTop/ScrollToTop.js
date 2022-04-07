function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({top: "0", behavior: "smooth"});
  }

  return ( 
    <div 
      className="fixed p-2 bg-gradient-to-r from-[#361cc1] to-[#2e82ef] bottom-5 right-5 text-white rounded-xl shadow-xl cursor-pointer sm:bottom-8 sm:right-8 lg:p-3"
      onClick={scrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </div> 
  );
}

export default ScrollToTop;