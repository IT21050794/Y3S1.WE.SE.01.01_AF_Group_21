import React from "react";

function Header() {
    return(
        <div>
    <section id="hero-area" className="bg-blue-100 pt-10 pb-10">
  <div className="container px-4">
    <div className="flex justify-between">
      <div className="w-full text-center">
        <h2 className="text-4xl font-bold leading-snug text-gray-700 mb-10">
        WELCOME<br className="hidden lg:block" />
        TO OUR MUNICIPAL COUNCIL PAYMENT SECTION
        </h2>
        <div className="text-center mb-10">
          <a
            href="#services"
            rel="nofollow"
            className="
            text-white
            bg-blue-600
            px-10
            py-3
            rounded-full
            duration-300
            hover:bg-blue-500
          "
          >
            PAYMENT
          </a>
        </div>
        <div className="text-center">
          <img className="img-fluid mx-auto" src="assets/img/hero.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Header