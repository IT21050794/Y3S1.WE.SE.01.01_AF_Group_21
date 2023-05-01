import React from 'react';

const Navbar = () => {
  return (
    <>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/*====== Favicon Icon ======*/}
  <link rel="shortcut icon" href="assets/img/favicon.png" type="image/png" />
  <title>Shine - TailwindCSS Startup and SaaS Landing Page Template</title>
  {/* Icon */}
  <link rel="stylesheet" href="assets/css/lineicons.css" />
  {/* Tailwind css */}
  <link rel="stylesheet" href="assets/css/tailwindcss.css" />
  {/* Header Area wrapper Starts */}
  <header id="header-wrap" className="relative">
    {/* Navbar Start */}
    <div className="navigation fixed top-0 left-0 w-full z-30 duration-300">
      <div className="container px-4">
        <nav
          className="
        navbar
        py-2
        navbar-expand-lg
        flex
        justify-between
        items-center
        relative
        duration-300
      "
        >
          <a className="navbar-brand" href="index.html">
            <img src="assets/img/logo.svg" alt="Logo" />
          </a>
          <button className="navbar-toggler focus:outline-none block lg:hidden">
            <span
              className="
            toggler-icon
            block
            bg-gray-700
            relative
            duration-300
            h-[2px]
            w-[30px]
            my-[6px]
          "
            ></span>
            <span
              className="
            toggler-icon
            block
            bg-gray-700
            relative
            duration-300
            h-[2px]
            w-[30px]
            my-[6px]
          "
            ></span>
            <span
              className="
            toggler-icon
            block
            bg-gray-700
            relative
            duration-300
            h-[2px]
            w-[30px]
            my-[6px]
          "
            ></span>
          </button>
          <div
            className="
          collapse
          navbar-collapse
          hidden
          lg:block
          duration-300
          shadow
          absolute
          top-full
          left-0
          mt-full
          bg-white
          z-20
          px-5
          py-3
          w-full
          lg:static lg:bg-transparent lg:shadow-none
        "
            id="navbarSupportedContent"
          >
          </div>
          <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
              <li className="nav-item">
                <a className="page-scroll nav-link active" href="#hero-area">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="page-scroll nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="page-scroll nav-link" href="#feature">
                  feature
                </a>
              </li>
              <li className="nav-item">
                <a className="page-scroll nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="page-scroll nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          <div
            className="
          header-btn
          hidden
          sm:block sm:absolute sm:right-0 sm:mr-16
          lg:static lg:mr-0
        "
          >
            <a
              className="
            text-blue-600
            border border-blue-600
            px-10
            py-3
            rounded-full
            duration-300
            hover:bg-blue-600 hover:text-white
          "
              href="#feature"
            >
              FAQ
            </a>
          </div>
        </nav>
      </div>
    </div>
    {/* Navbar End */}
  </header>
  {/* Header Area wrapper End */}
  {/* Hero Area Start */}
  <section id="hero-area" className="bg-blue-100 pt-48 pb-10">
    <div className="container px-4">
      <div className="flex justify-between">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold leading-snug text-gray-700 mb-10">
            You are Using Free Lite Version of{" "}
            <br className="hidden lg:block" />
            Shine Template
          </h2>
          <div className="text-center mb-10">
            <a
              href="javascript:void(0)"
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
              Purchase Now
            </a>
          </div>
          <div className="text-center">
            <img
              className="img-fluid mx-auto"
              src="assets/img/hero.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Hero Area End */}
  {/* Services Section Start */}
  <section id="services" className="py-24">
    <div className="container px-4">
      <div className="text-center">
        <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
          Our Services
        </h2>
      </div>
      <div className="flex flex-wrap">
        {/* Services item */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="m-4">
            <div className="mb-4 text-blue-600 text-5xl">
              <i className="lni lni-cog"> </i>
            </div>
            <div>
              <h3
                className="
              text-gray-800
              font-semibold
              text-lg
              block
              mb-3
              uppercase
            "
              >
                Web Development
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                perspiciatis dicta labore nulla beatae quaerat quia incidunt
                laborum aspernatur...
              </p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="m-4">
            <div className="mb-4 text-blue-600 text-5xl">
              <i className="lni lni-bar-chart"> </i>
            </div>
            <div>
              <h3
                className="
              text-gray-800
              font-semibold
              text-lg
              block
              mb-3
              uppercase
            "
              >
                Graphic Design
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                perspiciatis dicta labore nulla beatae quaerat quia incidunt
                laborum aspernatur...
              </p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="m-4">
            <div className="mb-4 text-blue-600 text-5xl">
              <i className="lni lni-briefcase"> </i>
            </div>
            <div>
              <h3
                className="
              text-gray-800
              font-semibold
              text-lg
              block
              mb-3
              uppercase
            "
              >
                Business Branding
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                perspiciatis dicta labore nulla beatae quaerat quia incidunt
                laborum aspernatur...
              </p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="m-4">
            <div className="mb-4 text-blue-600 text-5xl">
              <i className="lni lni-pencil-alt"> </i>
            </div>
            <div>
              <h3
                className="
              text-gray-800
              font-semibold
              text-lg
              block
              mb-3
              uppercase
            "
              >
                Content Writing
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                perspiciatis dicta labore nulla beatae quaerat quia incidunt
                laborum aspernatur...
              </p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="m-4">
            <div className="mb-4 text-blue-600 text-5xl">
              <i className="lni lni-mobile"> </i>
            </div>
            <div>
              <h3
                className="
              text-gray-800
              font-semibold
              text-lg
              block
              mb-3
              uppercase
            "
              >
                App Development
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                perspiciatis dicta labore nulla beatae quaerat quia incidunt
                laborum aspernatur...
              </p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="m-4">
            <div className="mb-4 text-blue-600 text-5xl">
              <i className="lni lni-layers"> </i>
            </div>
            <div>
              <h3
                className="
              text-gray-800
              font-semibold
              text-lg
              block
              mb-3
              uppercase
            "
              >
                Digital Marketing
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                perspiciatis dicta labore nulla beatae quaerat quia incidunt
                laborum aspernatur...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Feature Section Start */}
  <div id="feature" className="bg-blue-100 py-24">
    <div className="container px-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="mb-5 lg:mb-0">
            <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
              Learn More About Us
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-1/2">
                <div className="m-3">
                  <div className="icon text-4xl text-blue-600 mb-3">
                    <i className="lni lni-layers"> </i>
                  </div>
                  <div className="features-content">
                    <h4 className="text-gray-800 font-medium block mb-3">
                      Built with TailwindCSS
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Veniam tempora quidem vel sint.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/2">
                <div className="m-3">
                  <div className="icon text-4xl text-blue-600 mb-3">
                    <i className="lni lni-gift"> </i>
                  </div>
                  <div className="features-content">
                    <h4 className="text-gray-800 font-medium block mb-3">
                      Free to Use
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Veniam tempora quidem vel sint.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/2">
                <div className="m-3">
                  <div className="icon text-4xl text-blue-600 mb-3">
                    <i className="lni lni-laptop-phone"> </i>
                  </div>
                  <div className="features-content">
                    <h4 className="text-gray-800 font-medium block mb-3">
                      Fully Responsive
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Veniam tempora quidem vel sint.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/2">
                <div className="m-3">
                  <div className="icon text-4xl text-blue-600 mb-3">
                    <i className="lni lni-leaf"> </i>
                  </div>
                  <div className="features-content">
                    <h4 className="text-gray-800 font-medium block mb-3">
                      Easy to Customize
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Veniam tempora quidem vel sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-3 lg:mr-0 lg:ml-3">
            <img src="assets/img/feature/img-1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature Section End */}
  {/* Team Section Start */}
  <section id="team" className="py-24 text-center">
    <div className="container px-4">
      <div className="text-center">
        <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
          Our Team
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div
            className="
          m-3
          text-center
          bg-white
          shadow
          duration-300
          group
          hover:shadow-lg
        "
          >
            <div className="team-img relative">
              <img
                className="img-fluid"
                src="assets/img/team/img1.jpg"
                alt=""
              />
              <div
                className="
              w-full
              h-full
              flex
              items-center
              justify-center
              absolute
              top-0
              left-0
              bg-white bg-opacity-60
              duration-300
              opacity-0
              group-hover:opacity-100
            "
              >
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-indigo-500"
                    >
                      <i
                        className="lni lni-facebook-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-blue-400"
                    >
                      <i
                        className="lni lni-twitter-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-red-500"
                    >
                      <i
                        className="lni lni-instagram-filled"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="text-gray-800 font-bold uppercase text-lg my-2">
                John Doe
              </h3>
              <p>UX UI Designer</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div
            className="
          m-3
          text-center
          bg-white
          shadow
          duration-300
          group
          hover:shadow-lg
        "
          >
            <div className="team-img relative">
              <img
                className="img-fluid"
                src="assets/img/team/img2.jpg"
                alt=""
              />
              <div
                className="
              w-full
              h-full
              flex
              items-center
              justify-center
              absolute
              top-0
              left-0
              bg-white bg-opacity-60
              duration-300
              opacity-0
              group-hover:opacity-100
            "
              >
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-indigo-500"
                    >
                      <i
                        className="lni lni-facebook-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-blue-400"
                    >
                      <i
                        className="lni lni-twitter-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-red-500"
                    >
                      <i
                        className="lni lni-instagram-filled"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="text-gray-800 font-bold uppercase text-lg my-2">
                Sarah Doe
              </h3>
              <p>Front-End Developer</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div
            className="
          m-3
          text-center
          bg-white
          shadow
          duration-300
          group
          hover:shadow-lg
        "
          >
            <div className="team-img relative">
              <img
                className="img-fluid"
                src="assets/img/team/img3.jpg"
                alt=""
              />
              <div
                className="
              w-full
              h-full
              flex
              items-center
              justify-center
              absolute
              top-0
              left-0
              bg-white bg-opacity-60
              duration-300
              opacity-0
              group-hover:opacity-100
            "
              >
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-indigo-500"
                    >
                      <i
                        className="lni lni-facebook-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-blue-400"
                    >
                      <i
                        className="lni lni-twitter-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-1">
                    <a
                      href="javascript:void(0)"
                      className="social-link hover:bg-red-500"
                    >
                      <i
                        className="lni lni-instagram-filled"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="text-gray-800 font-bold uppercase text-lg my-2">
                Rob Hope
              </h3>
              <p>Front-end Developer</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
      </div>
    </div>
  </section>
  {/* Team Section End */}
  {/* Clients Section Start */}
  <div id="clients" className="py-16 bg-blue-100">
    <div className="container px-4">
      <div className="text-center">
        <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
          As Seen On
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-1/2 md:w-1/4 lg:w-1/4">
          <div className="m-3 p-4 group text-center">
            <img
              className="
            mx-auto
            opacity-60
            group-hover:opacity-100
            filter
            grayscale
            group-hover:filter-none group-hover:grayscale-[none]
          "
              src="assets/img/clients/graygrids.svg"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/4">
          <div className="m-3 p-4 group text-center">
            <img
              className="
            mx-auto
            opacity-60
            group-hover:opacity-100
            filter
            grayscale
            group-hover:filter-none group-hover:grayscale-[none]
          "
              src="assets/img/clients/uideck.svg"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/4">
          <div className="m-3 p-4 group text-center">
            <img
              className="
            mx-auto
            opacity-60
            group-hover:opacity-100
            filter
            grayscale
            group-hover:filter-none group-hover:grayscale-[none]
          "
              src="assets/img/clients/ayroui.svg"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/4">
          <div className="m-3 p-4 group text-center">
            <img
              className="
            mx-auto
            opacity-60
            group-hover:opacity-100
            filter
            grayscale
            group-hover:filter-none group-hover:grayscale-[none]
          "
              src="assets/img/clients/lineicons.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Clients Section End */}
  {/* Pricing section Start */}
  <section id="pricing" className="py-24">
    <div className="container px-4">
      <div className="flex flex-wrap justify-center md:justify-start">
        {/* single pricing table starts */}
        <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
          <div
            className="
          m-3
          text-center
          py-10
          px-8
          shadow
          rounded
          duration-300
          hover:shadow-lg hover:bg-blue-100
          wow
          fadeInLeft
        "
          >
            <div className="mb-3">
              <h3 className="text-blue-600 font-bold uppercase text-sm">
                Basic
              </h3>
            </div>
            <div className="mb-5">
              <p className="text-gray-700">
                <span className="font-bold text-2xl">$12.90</span>
                <span className="font-medium text-sm">/ Month</span>
              </p>
            </div>
            <ul className="mb-16">
              <li className="text-gray-500 leading-9">Up to 5 projects</li>
              <li className="text-gray-500 leading-9">Up to 10 collabrators</li>
              <li className="text-gray-500 leading-9">2gb of storage</li>
            </ul>
            <a
              href="javascript:void(0)"
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
              Get It
            </a>
          </div>
        </div>
        {/* single pricing table ends */}
        {/* single pricing table starts */}
        <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
          <div
            className="
          m-3
          text-center
          py-10
          px-8
          shadow
          rounded
          duration-300
          hover:shadow-lg hover:bg-blue-100
          bg-blue-100
          wow
          fadeInLeft
        "
          >
            <div className="mb-3">
              <h3 className="text-blue-600 font-bold uppercase text-sm">
                PROFESIONAL
              </h3>
            </div>
            <div className="mb-5">
              <p className="text-gray-700">
                <span className="font-bold text-2xl">$49.90</span>
                <span className="font-medium text-sm">/ Month</span>
              </p>
            </div>
            <ul className="mb-16">
              <li className="text-gray-500 leading-9">Up to 10 projects</li>
              <li className="text-gray-500 leading-9">Up to 20 collabrators</li>
              <li className="text-gray-500 leading-9">10gb of storage</li>
              <li className="text-gray-500 leading-9">
                Real-time collabration
              </li>
            </ul>
            <a
              href="javascript:void(0)"
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
              Get It
            </a>
          </div>
        </div>
        {/* single pricing table ends */}
        {/* single pricing table starts */}
        <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
          <div
            className="
          m-3
          text-center
          py-10
          px-8
          shadow
          rounded
          duration-300
          hover:shadow-lg hover:bg-blue-100
        "
          >
            <div className="mb-3">
              <h3 className="text-blue-600 font-bold uppercase text-sm">
                EXPERT
              </h3>
            </div>
            <div className="mb-5">
              <p className="text-gray-700">
                <span className="font-bold text-2xl">$89.90</span>
                <span className="font-medium text-sm">/ Month</span>
              </p>
            </div>
            <ul className="mb-16">
              <li className="text-gray-500 leading-9">unlimited projects</li>
              <li className="text-gray-500 leading-9">
                Unlimited collabrators
              </li>
              <li className="text-gray-500 leading-9">Unlimited of storage</li>
              <li className="text-gray-500 leading-9">
                Real-time collabration
              </li>
              <li className="text-gray-500 leading-9">24x7 Support</li>
            </ul>
            <a
              href="javascript:void(0)"
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
              Get It
            </a>
          </div>
        </div>
        {/* single pricing table ends */}
      </div>
    </div>
  </section>
  {/* Pricing Table Section End */}
  {/* Subscribe Section Start */}
  <section id="Subscribes" className="text-center py-20 bg-blue-100">
    <div className="container px-4">
      <div className="flex justify-center mx-3">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <h4 className="mb-3 text-4xl text-gray-700 font-bold tracking-wide">
            Start For Free
          </h4>
          <p className="mb-4 text-gray-600 leading-loose text-sm">
            Existing customized ideas through client-based deliverables.
            <br />
            Compellingly unleash fully tested outsourcing
          </p>
          <form htmlFor="">
            <div className="wow fadeInDown">
              <input
                type="Email"
                className="
              w-full
              mb-5
              bg-white
              border border-blue-300
              rounded-full
              px-5
              py-3
              duration-300
              focus:border-blue-600
              outline-none
            "
                name="email"
                placeholder="Email Address"
              />
              <button
                className="
              border-0
              bg-blue-600
              text-white
              rounded-full
              w-12
              h-12
              duration-300
              hover:opacity-75
            "
                type="submit"
              >
                <i className="lni lni-arrow-right"> </i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Subscribe Section End */}
  {/* Contact Section Start */}
  <section id="contact" className="py-24">
    <div className="container px-4">
      <div className="text-center">
        <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
          Contact
        </h2>
      </div>
      <div className="flex flex-wrap contact-form-area">
        <div className="w-full md:w-1/2">
          <div className="contact">
            <h2 className="uppercase font-bold text-xl text-gray-700 mb-5 ml-3">
              Contact Form
            </h2>
            <form id="contactForm" action="#0" method="POST">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                  <div className="mx-3">
                    <input
                      type="text"
                      className="form-input rounded-full"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required=""
                      data-error="Please enter your name"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                  <div className="mx-3">
                    <input
                      type="text"
                      placeholder="Email"
                      id="email"
                      className="form-input rounded-full"
                      name="email"
                      required=""
                      data-error="Please enter your email"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="mx-3">
                    <input
                      type="text"
                      placeholder="Subject"
                      id="subject"
                      name="subject"
                      className="form-input rounded-full"
                      required=""
                      data-error="Please enter your subject"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="mx-3">
                    <textarea
                      className="form-input rounded-lg"
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      data-error="Write your message"
                      required=""
                      defaultValue={"                      "}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="submit-button mx-3">
                    <button
                      className="
                    text-white
                    bg-blue-600
                    px-10
                    py-3
                    rounded-full
                    duration-300
                    hover:bg-blue-500
                  "
                      id="form-submit"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="ml-3 md:ml-12 wow fadeIn">
            <h2 className="uppercase font-bold text-xl text-gray-700 mb-5">
              Get In Touch
            </h2>
            <div>
              <div className="flex flex-wrap mb-6 items-center">
                <div
                  className="
                w-10
                h-10
                flex
                items-center
                justify-center
                bg-blue-600
                text-xl text-white
                rounded-full
              "
                >
                  <i className="lni lni-map-marker"> </i>
                </div>
                <p className="pl-3">Skopje, Macedonia</p>
              </div>
              <div className="flex flex-wrap mb-6 items-center">
                <div
                  className="
                w-10
                h-10
                flex
                items-center
                justify-center
                bg-blue-600
                text-xl text-white
                rounded-full
              "
                >
                  <i className="lni lni-envelope"> </i>
                </div>
                <p className="pl-3">
                  <a href="javascript:void(0)" className="block">
                    email@gmail.com
                  </a>
                  <a href="javascript:void(0)" className="block">
                    tomsaulnier@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap mb-6 items-center">
                <div
                  className="
                w-10
                h-10
                flex
                items-center
                justify-center
                bg-blue-600
                text-xl text-white
                rounded-full
              "
                >
                  <i className="lni lni-phone-set"> </i>
                </div>
                <p className="pl-3">
                  <a href="javascript:void(0)" className="block">
                    +42 374 5967
                  </a>
                  <a href="javascript:void(0)" className="block">
                    +99 123 5967
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section End */}
  {/* Map Section Start */}
  <section id="google-map-area">
    <div className="mx-6 mb-6">
      <div className="flex">
        <div className="w-full">
          <object
            style={{ border: 0, height: 450, width: "100%" }}
            data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Map Section End */}
  {/* Footer Section Start */}
  <footer id="footer" className="bg-gray-800 py-16">
    <div className="container px-4">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div className="mx-3 mb-8">
            <div className="footer-logo mb-3">
              <img src="assets/img/logo.svg" alt="" />
            </div>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              excepturi quasi, ipsam voluptatem.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div className="mx-3 mb-8">
            <h3 className="font-bold text-xl text-white mb-5">Company</h3>
            <ul>
              <li>
                <a
                  href="javascript:void(0)"
                  className="
                leading-9
                text-gray-100
                duration-300
                hover:text-blue-500
              "
                >
                  Press Releases
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="
                leading-9
                text-gray-100
                duration-300
                hover:text-blue-500
              "
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="
                leading-9
                text-gray-100
                duration-300
                hover:text-blue-500
              "
                >
                  Strategy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div className="mx-3 mb-8">
            <h3 className="font-bold text-xl text-white mb-5">About</h3>
            <ul>
              <li>
                <a
                  href="javascript:void(0)"
                  className="
                leading-9
                text-gray-100
                duration-300
                hover:text-blue-500
              "
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="
                leading-9
                text-gray-100
                duration-300
                hover:text-blue-500
              "
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="
                leading-9
                text-gray-100
                duration-300
                hover:text-blue-500
              "
                >
                  Clients
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div className="mx-3 mb-8">
            <h3 className="font-bold text-xl text-white mb-5">Find us on</h3>
            <ul className="social-icons flex justify-start">
              <li className="mr-4">
                <a
                  href="javascript:void(0)"
                  className="
                flex
                justify-center
                items-center
                w-8
                h-8
                bg-white
                rounded-full
                text-sm text-gray-700
                duration-300
                hover:text-white hover:bg-indigo-500
              "
                >
                  <i className="lni lni-facebook-filled" aria-hidden="true">
                    {" "}
                  </i>
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="javascript:void(0)"
                  className="
                flex
                justify-center
                items-center
                w-8
                h-8
                bg-white
                rounded-full
                text-sm text-gray-700
                duration-300
                hover:text-white hover:bg-blue-400
              "
                >
                  <i className="lni lni-twitter-filled" aria-hidden="true">
                    {" "}
                  </i>
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="javascript:void(0)"
                  className="
                flex
                justify-center
                items-center
                w-8
                h-8
                bg-white
                rounded-full
                text-sm text-gray-700
                duration-300
                hover:text-white hover:bg-red-500
              "
                >
                  <i className="lni lni-instagram-filled" aria-hidden="true">
                    {" "}
                  </i>
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="javascript:void(0)"
                  className="
                flex
                justify-center
                items-center
                w-8
                h-8
                bg-white
                rounded-full
                text-sm text-gray-700
                duration-300
                hover:text-white hover:bg-indigo-600
              "
                >
                  <i
                    className="lni lni-linkedin-original"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Section End */}
  <section className="bg-gray-800 py-6 border-t-2 border-gray-700 border-dotted">
    <div className="container px-4">
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <p className="text-white">
            Designed and Developed by
            <a
              className="text-white duration-300 hover:text-blue-600"
              href="https://tailwindtemplates.co"
              rel="nofollow"
            >
              TailwindTemplates
            </a>
            and
            <a
              className="text-white duration-300 hover:text-blue-600"
              href="https://uideck.com"
              rel="nofollow"
            >
              UIdeck
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Go to Top Link */}
  <a
    href="#"
    className="
  back-to-top
  w-10
  h-10
  fixed
  bottom-0
  right-0
  mb-5
  mr-5
  flex
  items-center
  justify-center
  rounded-full
  bg-blue-600
  text-white text-lg
  z-20
  duration-300
  hover:bg-blue-400
"
  >
    <i className="lni lni-chevron-up"> </i>
  </a>
  {/* All js Here */}
</>

  );
};

export default Navbar;
