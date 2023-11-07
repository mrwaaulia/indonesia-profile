import React from "react";

function FeaturedCulture() {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src="/assets/bali.jpeg"
            alt="bali"
            width={1000}
            height={1000}
            className="h-screen object-cover w-full grayscale"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-end px-6 py-4">
            <h1 className="text-white font-bold text-5xl">People</h1>
          </div>
        </div>
        <div className="flex justify-end px-4 py-4">
          <a href="#" className="bg-black text-white font-bold p-4">
            View Photos
          </a>
        </div>
        <div>
          <h1 className="text-4xl text-black font-bold p-4">
            The carousel-type galleries give context to your work
          </h1>
          <p className="text-xl p-4">
            Check out the dropdown portfolios in the navigation bar. That's
            where all your galleries will sit, united by concept and free of
            written content. This layout will allow your visitors to admire your
            work without any distractions.
          </p>
        </div>
      </div>
      <div>
        <div className="relative">
          <img
            src="/assets/temple.jpg"
            alt="baduy"
            width={1000}
            height={1000}
            className="h-screen w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 flex items-end justify-end px-6 py-4">
            <h1 className="text-white font-bold text-5xl">Temple</h1>
          </div>
        </div>
        <div className="flex justify-start px-4 py-4">
          <a href="#" className="bg-black text-white font-bold p-4">
            View Photos
          </a>
        </div>
        <div>
          <h1 className="text-4xl text-black font-bold p-4">
            The carousel-type galleries give context to your work
          </h1>
          <p className="text-xl p-4">
            Check out the dropdown portfolios in the navigation bar. That's
            where all your galleries will sit, united by concept and free of
            written content. This layout will allow your visitors to admire your
            work without any distractions.
          </p>
        </div>
      </div>
      <div>
        <div className="relative">
          <img
            src="/assets/sawah.jpg"
            alt="baduy"
            width={1000}
            height={1000}
            className="h-screen w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute inset-0 flex items-end px-6 py-4">
            <h1 className="text-white font-bold text-5xl">Nature</h1>
          </div>
        </div>
        <div className="flex justify-end px-4 py-4">
          <a href="#" className="bg-black text-white font-bold p-4">
            View Photos
          </a>
        </div>
        <div>
          <h1 className="text-4xl text-black font-bold p-4">
            The carousel-type galleries give context to your work
          </h1>
          <p className="text-xl p-4 mb-6">
            Check out the dropdown portfolios in the navigation bar. That's
            where all your galleries will sit, united by concept and free of
            written content. This layout will allow your visitors to admire your
            work without any distractions.
          </p>
        </div>
        <div className="p-4 mb-28">
          <a href="#" className="bg-black text-white font-bold p-4">
            LET'S GET IN TOUCH!
          </a>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <a
          href="#"
          className="hover:text-slate-500 underline duration-300 ease-linear"
        >
          ▵Back to Top
        </a>
      </div>
      <hr className="border border-slate-300 mb-8" />
    </>
  );
}

export default FeaturedCulture;
