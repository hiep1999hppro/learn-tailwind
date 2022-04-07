function Footer() {
  return ( 
    <footer className="bg-gradient-to-b from-[#2e82ef] to-[#361cc1]">
      <div className="mx-5 py-6 sm:mx-10 sm:py-12 md:mx-20 lg:flex">
        <div className="lg:w-2/5 lg:mr-10">
          <a href="/#" className="uppercase text-3xl text-white font-bold">Basic</a>
          <h3 className="py-10 text-white">Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</h3>
          <div className="text-white text-2xl mb-10 lg:mb-0">
            <i className="fa-brands fa-facebook-f mr-5 hover:text-red-400 transition"></i>
            <i className="fa-brands fa-twitter mr-5 hover:text-red-400 transition"></i>
            <i className="fa-brands fa-instagram mr-5 hover:text-red-400 transition"></i>
            <i className="fa-brands fa-linkedin mr-5 last:mr-0 hover:text-red-400 transition"></i>
          </div>
        </div>
        <div className="sm:flex lg:w-3/5">
          <div className="text-white mb-14 w-3/4 sm:mb-0 sm:flex-1">
            <div className="font-semibold text-2xl mb-8">Quick Link</div>
            <ul>
              <li className="mb-3 hover:text-red-400 transition">Road Map</li>
              <li className="mb-3 hover:text-red-400 transition">Privacy Policy</li>
              <li className="mb-3 hover:text-red-400 transition">Refund Policy</li>
              <li className="mb-3 last:mb-0 hover:text-red-400 transition">Terms of Service</li>
            </ul>
          </div>
          <div className="text-white mb-14 w-3/4 sm:mb-0 sm:flex-1">
            <div className="font-semibold text-2xl mb-8">Resources</div>
            <ul>
              <li className="mb-3 hover:text-red-400 transition">Home</li>
              <li className="mb-3 hover:text-red-400 transition">Page</li>
              <li className="mb-3 hover:text-red-400 transition">Blog</li>
              <li className="mb-3 last:mb-0 hover:text-red-400 transition">Contact</li>
            </ul>
          </div>
          <div className="text-white mb-14 last:mb-0 w-3/4 sm:mb-0 sm:flex-1">
            <div className="font-semibold text-2xl mb-8">Contact Us</div>
            <ul>
              <li className="mb-3">+8093215512672</li>
              <li className="mb-3">info@gmail.com</li>
              <li className="mb-3">www.yourweb.com</li>
              <li className="mb-3 last:mb-0">123 Street New York City , United States Of America 750.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5 py-7 text-white border-t-2 border-t-white sm:px-10 md:px-20">
        Template by Hoang Hiep, 2022
      </div>
    </footer>
   );
}

export default Footer;