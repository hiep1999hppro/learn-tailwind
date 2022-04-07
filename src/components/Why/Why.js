function Why() {
  return ( 
    <section className="mx-5 pt-10 sm:mx-10 md:mx-20" id="why">
      <div className="py-10 mt-10 flex flex-col relative before:content-[''] before:absolute before:w-1/3 before:border-2 before:border-red-400 before:top-[12px] lg:flex-row lg:items-start lg:mt-5">
        <div className="lg:w-1/2">
          <div className="mb-4 text-3xl leading-normal sm:w-4/5 md:w-full"><span className="font-bold">Cool facts</span> about this app</div>
          <div className="mb-4 text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</div>
          <button className="mb-10 px-5 py-3 w-auto text-white bg-gradient-to-r from-[#fe8464] via-[#fe6e9a] to-[#fe8464] rounded-md hover:shadow-2xl cursor-pointer" style={{transition: "all 0.5s"}}>Try it Free</button>
        </div>
        <div className="flex flex-wrap -ml-4 lg:w-1/2 lg:ml-10">
          <div className="w-[140px] relative z-[1] before:content-[''] before:absolute before:-z-[1] before:bg-gradient-to-r before:from-[#33c8c1] to-[#119bd2] before:top-0 before:left-0 before:w-full before:h-full px-3 py-10 ml-4 mb-4 text-center text-white before:rounded-3xl lg:ml-0 lg:mb-0 lg:mr-4 lg:flex-1">
            <span className="block mb-1 text-2xl font-bold">125K</span>Downloads
          </div>
          <div className="w-[140px] relative z-[1] before:content-[''] before:absolute before:-z-[1] before:bg-gradient-to-r before:from-[#fe8464] before:to-[#fe6e9a] before:top-0 before:left-0 before:w-full before:h-full px-3 py-10 ml-4 mb-4 text-center text-white before:rounded-3xl lg:ml-0 lg:mr-4 lg:mb-0 lg:flex-1">
            <span className="block mb-1 text-2xl font-bold">87K</span>Active Users
          </div>
          <div className="w-[140px] relative z-[1] before:content-[''] before:absolute before:-z-[1] before:bg-gradient-to-r before:from-[#361cc1] before:to-[#2e82ef] before:top-0 before:left-0 before:w-full before:h-full px-3 py-10 ml-4 mb-4 text-center text-white before:rounded-3xl lg:ml-0 lg:mr-4 last:mr-0 lg:mb-0 lg:flex-1">
            <span className="block mb-1 text-2xl font-bold">4.8</span>User Rating
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;