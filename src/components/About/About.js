function About() {
  return ( 
    <section className="mx-5 pt-10 sm:mx-10 md:mx-20" id="about">
      <div className="py-10 mt-10 first:mt-0 flex flex-col relative before:content-[''] before:absolute before:w-1/3 before:border-2 before:border-red-400 before:top-[12px] lg:flex-row lg:items-start">
        <div className="lg:w-1/2">
          <div className="mb-4 text-3xl leading-normal sm:w-4/5 md:w-full"><span className="font-bold">Quick & Easy</span> to Use Tailwind Template</div>
          <div className="mb-4 text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</div>
          <button className="mb-10 px-5 py-3 w-auto text-white bg-gradient-to-r from-[#fe8464] via-[#fe6e9a] to-[#fe8464] rounded-md hover:shadow-2xl cursor-pointer" style={{transition: "all 0.5s"}}>Try it Free</button>
        </div>
        <img src="https://preview.tailwindtemplates.co/basic/assets/images/about1.svg" alt="" className="lg:w-1/2 lg:ml-10" />
      </div>
      <div className="py-10 mt-10 flex flex-col relative before:content-[''] before:absolute before:w-1/3 before:border-2 before:border-red-400 before:top-[12px] lg:flex-row-reverse lg:items-start lg:mt-5">
        <div className="lg:w-1/2">
          <div className="mb-4 text-3xl leading-normal sm:w-4/5 md:w-full"><span className="font-bold">Modern design</span> with Essential Features</div>
          <div className="mb-4 text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</div>
          <button className="mb-10 px-5 py-3 w-auto text-white bg-gradient-to-r from-[#fe8464] via-[#fe6e9a] to-[#fe8464] rounded-md hover:shadow-2xl cursor-pointer" style={{transition: "all 0.5s"}}>Try it Free</button>
        </div>
        <img src="https://preview.tailwindtemplates.co/basic/assets/images/about2.svg" alt="" className="lg:w-1/2 lg:mr-10" />
      </div>
      <div className="py-10 mt-10 flex flex-col relative before:content-[''] before:absolute before:w-1/3 before:border-2 before:border-red-400 before:top-[12px] lg:flex-row lg:items-start lg:mt-5">
        <div className="lg:w-1/2">
          <div className="mb-4 text-3xl leading-normal sm:w-4/5 md:w-full">Crafted for<span className="font-bold"> SaaS, App and Software Landing Page</span></div>
          <div className="mb-4 text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</div>
          <button className="mb-10 px-5 py-3 w-auto text-white bg-gradient-to-r from-[#fe8464] via-[#fe6e9a] to-[#fe8464] rounded-md hover:shadow-2xl cursor-pointer" style={{transition: "all 0.5s"}}>Try it Free</button>
          </div>
        <img src="https://preview.tailwindtemplates.co/basic/assets/images/about3.svg" alt="" className="lg:w-1/2 lg:ml-10" />
      </div>
    </section>
  );
}

export default About;