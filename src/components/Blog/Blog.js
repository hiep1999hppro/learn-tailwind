function Blog() {
  return ( 
    <section className="mx-5 pt-20 pb-10 sm:mx-10 md:mx-20 lg:pt-14" id="blog">
      <h2 className="block py-5 text-center text-3xl leading-normal relative before:content-[''] before:absolute before:border-2 before:border-red-400 before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-3/5 sm:pb-10 sm:text-left sm:before:left-0 sm:before:translate-x-0 md:text-center md:before:w-2/3 md:before:left-1/2 md:before:-translate-x-1/2">Our recent <span className="font-bold">Blog Posts</span></h2>
      <div className="flex flex-col my-5 sm:my-0 md:items-center lg:flex-row lg:flex-wrap lg:-ml-6">
        <div className="mt-10 first:mt-0 sm:flex sm:flex-col md:w-2/3 lg:w-[calc(33.3334%-1.5rem)] lg:ml-6 lg:mb-10">
          <img src="https://preview.tailwindtemplates.co/basic/assets/images/blog-1.jpg" alt="" />
          <div className="pt-5">
            <div className="flex justify-between pr-7">
              <div>Post By: Admin</div>
              <div>03 June, 2023</div>
            </div>
            <a href="/#" className="block py-4 text-xl leading-normal hover:text-red-400">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</a>
            <a href="/#" className="text-red-400">Learn more ...</a>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 sm:flex sm:flex-col md:w-2/3 lg:w-[calc(33.3334%-1.5rem)] lg:mt-0 lg:ml-6 lg:mb-10">
          <img src="https://preview.tailwindtemplates.co/basic/assets/images/blog-2.jpg" alt="" />
          <div className="pt-5">
            <div className="flex justify-between pr-7">
              <div>Post By: Admin</div>
              <div>03 June, 2023</div>
            </div>
            <a href="/#" className="block py-4 text-xl leading-normal hover:text-red-400">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</a>
            <a href="/#" className="text-red-400">Learn more ...</a>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 sm:flex sm:flex-col md:w-2/3 lg:w-[calc(33.3334%-1.5rem)] lg:mt-0 lg:ml-6 lg:mb-10">
          <img src="https://preview.tailwindtemplates.co/basic/assets/images/blog-3.jpg" alt="" />
          <div className="pt-5">
            <div className="flex justify-between pr-7">
              <div>Post By: Admin</div>
              <div>03 June, 2023</div>
            </div>
            <a href="/#" className="block py-4 text-xl leading-normal hover:text-red-400">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</a>
            <a href="/#" className="text-red-400">Learn more ...</a>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Blog;