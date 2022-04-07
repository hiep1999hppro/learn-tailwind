function Team() {
  return ( 
    <section className="mx-5 my-10 sm:mx-10" id="team">
      <h2 className="block pt-5 py-8 text-center text-3xl leading-normal relative before:content-[''] before:absolute before:border-2 before:border-red-400 before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-3/5 sm:pb-10">Meet Our <span className="font-bold">Creative Team Members</span></h2>
      <div className="flex flex-col sm:items-center lg:flex-row lg:flex-wrap lg:-ml-4">
        <div className="mt-10 first:mt-0 rounded-2xl shadow-md hover:shadow-xl sm:w-2/3 md:w-1/2 lg:ml-4 lg:mt-0 lg:mb-4 lg:w-[calc(33.3334%-1rem)]" style={{transition: "all 0.5s"}}>
          <div className="relative">
            <img src="https://preview.tailwindtemplates.co/basic/assets/images/team-1.png" alt="" className="w-full" />
            <div className="bg-gray-400 bg-opacity-60 text-white px-6 py-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#fe8464] hover:to-[#fe6e9a] absolute bottom-5 left-1/2 -translate-x-1/2 transition">
              <i className="fa-brands fa-facebook-f mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-twitter mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-instagram mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-linkedin mr-5 last:mr-0 cursor-pointer hover:text-blue-500"></i>
            </div>
          </div>
          <div className="py-6 text-center">
            <div className="text-xl font-bold">Isabela Moreira</div>
            <div className="mt-2 text-gray-600">Founder and CEO</div>
          </div>
        </div>
        <div className="mt-10 first:mt-0 rounded-2xl shadow-md hover:shadow-xl sm:w-2/3 md:w-1/2 lg:ml-4 lg:mt-0 lg:mb-4 lg:w-[calc(33.3334%-1rem)]" style={{transition: "all 0.5s"}}>
          <div className="relative">
            <img src="https://preview.tailwindtemplates.co/basic/assets/images/team-2.png" alt="" className="w-full" />
            <div className="bg-gray-400 bg-opacity-60 text-white px-6 py-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#fe8464] hover:to-[#fe6e9a] absolute bottom-5 left-1/2 -translate-x-1/2 transition">
              <i className="fa-brands fa-facebook-f mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-twitter mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-instagram mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-linkedin mr-5 last:mr-0 cursor-pointer hover:text-blue-500"></i>
            </div>
          </div>
          <div className="py-6 text-center">
            <div className="text-xl font-bold">Elon Musk</div>
            <div className="mt-2 text-gray-600">Founder and CEO</div>
          </div>
        </div>
        <div className="mt-10 first:mt-0 rounded-2xl shadow-md hover:shadow-xl sm:w-2/3 md:w-1/2 lg:ml-4 lg:mt-0 lg:mb-4 lg:w-[calc(33.3334%-1rem)]" style={{transition: "all 0.5s"}}>
          <div className="relative">
            <img src="https://preview.tailwindtemplates.co/basic/assets/images/team-3.png" alt="" className="w-full" />
            <div className="bg-gray-400 bg-opacity-60 text-white px-6 py-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#fe8464] hover:to-[#fe6e9a] absolute bottom-5 left-1/2 -translate-x-1/2 transition">
              <i className="fa-brands fa-facebook-f mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-twitter mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-instagram mr-5 cursor-pointer hover:text-blue-500"></i>
              <i className="fa-brands fa-linkedin mr-5 last:mr-0 cursor-pointer hover:text-blue-500"></i>
            </div>
          </div>
          <div className="py-6 text-center">
            <div className="text-xl font-bold">Fiona Smith</div>
            <div className="mt-2 text-gray-600">Founder and CEO</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;