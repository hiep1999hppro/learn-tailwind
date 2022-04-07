import './App.css';

import Header from './components/Header/Header';
import Features from './components/Features/Features'; 
import Why from './components/Why/Why';
import Team from './components/Team/Team';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="w-full">
      <div className="h-full bg-gradient-to-b from-[#361cc1] to-[#2e82ef]">
        <div className="mx-5 py-5 sm:mx-10 md:mx-20">

          <Header />

          <div className="mt-10 mb-9 text-center text-white">
            <h2 className="text-4xl leading-[45px]">Basic - SaaS Landing Page</h2>
            <h1 className="text-4xl font-bold leading-[50px] mt-2 mb-3">Kickstart Your SaaS or App Site</h1>
            <h4 className="text-base mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h4>
            <button className="bg-gradient-to-r from-[#33c8c1] via-[#119bd2] to-[#33c8c1] px-5 py-3 rounded-md font-medium hover:shadow-2xl cursor-pointer" style={{transition: "all 0.5s"}}>Get started</button>
          </div>
          <img src="https://preview.tailwindtemplates.co/basic/assets/images/header-hero.png" alt="" />
        </div>
      </div>
      <div className="bg-white mx-5 my-10 sm:mx-10 md:mx-20">
        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
          <div className="mt-5 first:mt-0 md:w-1/2 lg:w-1/3">
            <img src="https://preview.tailwindtemplates.co/basic/assets/images/brand-1.png" alt="" className="opacity-60 md:w-full md:scale-50 lg:scale-[0.8]" />
          </div>
          <div className="mt-5 md:w-1/2 md:mt-0 lg:w-1/3">
            <img src="https://preview.tailwindtemplates.co/basic/assets/images/brand-2.png" alt="" className="opacity-60 md:w-full md:scale-50 lg:scale-[0.8]" />
          </div>
          <div className="mt-5 md:w-1/2 md:mt-0 lg:w-1/3">
            <img src="https://preview.tailwindtemplates.co/basic/assets/images/brand-3.png" alt="" className="opacity-60 md:w-full md:scale-50 lg:scale-[0.8]" />
          </div>
          <div className="mt-5 md:w-1/2 md:mt-0 lg:w-1/3">
            <img src="https://preview.tailwindtemplates.co/basic/assets/images/brand-4.png" alt="" className="opacity-60 md:w-full md:scale-50 lg:scale-[0.8]" />
          </div>
          <div className="mt-5 md:w-1/2 md:mt-0 lg:w-1/3">
            <img src="https://preview.tailwindtemplates.co/basic/assets/images/brand-5.png" alt="" className="opacity-60 md:w-full md:scale-50 lg:scale-[0.8]" />
          </div>
        </div>
      </div>

      <Features />

      <About />

      <Why />

      <Team />

      <Blog />

      <section className="mx-5 my-10 px-4 py-10 shadow-xl sm:mx-10 sm:px-10 md:mx-20">
        <h3 className="text-2xl font-semibold w-2/3 sm:w-3/4 sm:text-3xl lg:w-full lg:text-center">Subscribe Our Newsletter</h3>
        <h4 className="text-2xl leading-10 sm:text-3xl sm:mt-3 lg:w-full lg:text-center">get regular updates</h4>
        <form className="my-4 sm:my-7 sm:flex sm:items-center">
          <input type="text" placeholder="Enter email ..." className="w-full px-6 py-4 border-2 border-gray-300 rounded-md sm:w-3/4 sm:rounded-sm" />
          <button type="submit" className="w-full bg-gradient-to-r from-[#fe8464] via-[#fe6e9a] to-[#fe8464] mt-6 py-4 text-center text-white rounded-md cursor-pointer sm:mt-0 sm:h-[60px] sm:w-1/4 sm:rounded-sm">Subscribe</button>
        </form>
      </section>

      <Footer />

      {/*Scroll to top button*/}
      <ScrollToTop />
    </div>
  );
}

export default App;
