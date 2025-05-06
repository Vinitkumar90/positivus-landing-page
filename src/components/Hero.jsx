import React from "react";

function Hero() {
  return (
    <section className='pt-12 bg-white id="about'>
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* left side */}
          <div className="md:w-1/2">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4 text-[var(--color-secondary-bg)] ">
                Navigating the digital landscape for success
              </h1>
              <p className="text-gray-600 mb-6">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <button
                className="inline-block bg-black text-white font-semibold rounded-md
                hover:bg-[var(--color-primary-bg)] hover:text-black transition-all duration-300
                px-6 py-3
            "
              >
                Book a consultation
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="md:w-1/2 order-first md:order-last">
            <img
              src="../src/assets/illustration.png"
              alt=""
              className="w-full h-auto "
            />
          </div>
        </div>

        {/* brand logo  */}
      </div>
    </section>
  );
}

export default Hero;
