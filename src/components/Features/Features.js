function Features() {
  return ( 
    <>
      <section className="pt-5 pb-12 mx-5 border-t-4 border-red-500 text-center text-3xl text-black leading-normal sm:mx-10 sm:pb-6 md:mx-20" id="feature">
        <span className="font-bold">Clean and simple design</span>, Comes with everything you need to get started!
      </section>
      <section className="mx-5 my-10 flex flex-col sm:mx-10 sm:items-center md:mx-20 lg:flex-row lg:flex-wrap lg:justify-start lg:ml-[calc(5rem-1rem)]">
        <div className="w-full flex flex-col justify-center items-center p-10 mt-8 first:mt-0 shadow-md border-2 border-transparent hover:border-red-400 sm:w-1/2 md:w-2/3 lg:ml-4 lg:mb-4 lg:w-[calc(33.3334%-1rem)]" style={{transition: "all 0.5s"}}>
          <img src="https://preview.tailwindtemplates.co/basic/assets/images/services-shape-1.svg" alt="" className="" />
          <h3 className="my-5 text-[22px] font-bold">Clean</h3>
          <h4 className="text-center text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</h4>
          <a href="/#" className="mt-5">Learn More ...</a>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-10 mt-8 shadow-md border-2 hover:border-red-400 sm:w-1/2 md:w-2/3 lg:mt-0 lg:ml-4 lg:mb-4 lg:w-[calc(33.3334%-1rem)]" style={{transition: "all 0.5s"}}>
          <img src="https://preview.tailwindtemplates.co/basic/assets/images/services-shape-2.svg" alt="" className="" />
          <h3 className="my-5 text-[22px] font-bold">Robust</h3>
          <h4 className="text-center text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</h4>
          <a href="/#" className="mt-5">Learn More ...</a>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-10 mt-8 shadow-md border-2 hover:border-red-400 sm:w-1/2 md:w-2/3 lg:mt-0 lg:ml-4 lg:mb-4 lg:w-[calc(33.3334%-1rem)]" style={{transition: "all 0.5s"}}>
          <img src="https://preview.tailwindtemplates.co/basic/assets/images/services-shape-3.svg" alt="" className="" />
          <h3 className="my-5 text-[22px] font-bold">Powerful</h3>
          <h4 className="text-center text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</h4>
          <a href="/#" className="mt-5">Learn More ...</a>
        </div>
      </section>
    </>
  );
}

export default Features;