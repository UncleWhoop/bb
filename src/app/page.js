import Image from "next/image";
import Link from "next/link";
import bb from "/public/images/era.jpg";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen w-full bg-[#060923]">
      <nav className="z-10 w-full h-[150px] bg-gradient-to-b from-[#0E0928] to-trans-dark-100 px-4">
        <div className="container mx-auto flex items-center justify-between pt-[25px]">
          {/* Left: Logo + members */}
          <div className="flex items-center">
            <Link href="/" title="Click to go home">
              LOGO
            </Link>

            <div className="mx-3 h-7 w-[1px] bg-[#443873]" />

            <div className="flex cursor-pointer items-center gap-2 rounded-full bg-[#191644] px-2 py-2">
              <div className="flex items-center gap-1.5">
                {/* Avatars 1–4 with their SVGs */}
                <div className="h-6 w-6 rounded-full bg-blue-500">
                  {/* SVG */}
                </div>
                <div className="-ml-4 h-6 w-6 rounded-full bg-gray-400">
                  {/* SVG */}
                </div>
                <div className="-ml-4 h-6 w-6 rounded-full bg-yellow-500">
                  {/* SVG */}
                </div>
                <div className="-ml-4 h-6 w-6 rounded-full bg-green-500">
                  {/* SVG */}
                </div>
              </div>
              <div className="pr-2 font-inter text-sm text-[#FBF8FA]">
                300k+ members
              </div>
            </div>
          </div>

          {/* Center: Navigation links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-gray-100"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-300 hover:text-gray-100"
            >
              Dashboard
            </Link>
            <Link
              href="/launchpad"
              className="text-sm font-medium text-gray-300 hover:text-gray-100"
            >
              Launchpad
            </Link>
            <Link
              href="/stake"
              className="text-sm font-medium text-gray-300 hover:text-gray-100"
            >
              Stake
            </Link>
            <a
              href="https://equinox.eclipsefi.io/"
              className="text-sm font-medium text-gray-300 hover:text-gray-100"
            >
              Equinox
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://airtable.com/appocm8m9oZWPJv0t/pagBaVi0C6GsDZ6o5/form"
              className="flex items-center gap-1 bg-gradient-to-r from-[#846BEA] to-[#5882DA] bg-clip-text text-sm font-semibold text-transparent"
            >
              Apply For IDO
              {/* optional arrow svg */}
            </a>
          </div>

          {/* Right: Launch button */}
          <button
            type="button"
            className="relative inline-flex w-28 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-[2px] cursor-pointer"
          >
            <span className="w-full bg-[#060923] h-full rounded-xl  text-sm font-bold leading-[16px] text-gray-100 py-3 flex items-center justify-center">
              Launch App
            </span>
          </button>
        </div>
      </nav>

      <main className="flex flex-col items-center">
        <section className="bg-[#060923] flex h-screen w-full items-center justify-center overflow-hidden bg-[url('/assets/svg/svg-hero-circle-sm.svg')] bg-cover bg-center bg-no-repeat">
          {/* Content */}
          <div className="z-10 text-center text-gray-100">
            <h1 className="text-[33px] font-bold leading-[42px] md:mt-5 md:text-[64px] md:leading-[80px]">
              DeFi
              <br />
              the Status Quo
            </h1>
            <p className="mx-auto mt-3 max-w-[480px] px-[45px] text-sm font-normal leading-5 text-gray-200 font-inter md:mt-4 md:px-0 md:text-[18px] md:leading-[28px]">
              We’re dismantling predatory systems to build a launch and DeFi hub
              for sustainable growth—aligning and empowering communities and
              innovative builders to thrive together.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex justify-center md:mt-12">
              <Link href="/launchpad" title="Click to launch app">
                <button
                  type="button"
                  className="mr-[13px] flex items-center justify-center rounded-[8.84px] bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] px-[24px] py-[15px] text-base font-bold leading-[19px] text-gray-100 md:mr-6 md:rounded-xl md:px-6 md:py-4 md:text-[18px] md:leading-[24px]"
                >
                  Launch App
                </button>
              </Link>

              <a
                href="https://app.astroport.fi/swap?to=factory/neutron10sr06r3qkhn7xzpw3339wuj77hu06mzna6uht0/eclip"
                target="_blank"
                rel="noopener noreferrer"
                title="Click to get ECLIP"
                className="inline-block"
              >
                <span className="inline-flex rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-[2px]">
                  <button
                    type="button"
                    className="w-full h-full bg-[#060923] rounded-xl px-6 py-[14px] text-base font-bold leading-[19px] text-gray-100 md:text-[18px] md:leading-[24px]"
                  >
                    Get ECLIP
                  </button>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-[93px] w-full bg-[#060923] overflow-hidden  ">
          <div className="container mx-auto flex flex-row justify-between items-center py-[3rem]">
            <div className="flex flex-col w-full h-full">
              {/* Headings */}
              <h3 className="text-left text-[22px] font-medium leading-[27px] text-secondary-light md:text-[28px] md:leading-[36px]">
                A New Era for
              </h3>
              <h2 className="mt-[3px] text-left text-[32px] font-bold leading-[37px] text-gray-100 md:text-[48px] md:leading-[64px]">
                Fair and Aligned Token Launches
              </h2>

              {/* Paragraphs */}
              <div>
                <p className="font-inter mt-[10px] text-left text-sm font-normal leading-5 text-gray-200 md:mt-6 md:max-w-[812px] md:text-[18px] md:leading-[28px]">
                  Cryptos early promise was clear: to empower innovation
                  and break down access barriers for all—a free, fair, and open
                  financial system. In recent times the industry has shifted to
                  benefit short-term value extraction by a new
                  &quot;elite&quot;.
                </p>
                <p className="font-inter mt-[10px] text-left text-sm font-normal leading-5 text-gray-200 md:mt-6 md:max-w-[812px] md:text-[18px] md:leading-[28px]">
                  Eclipse Fi is reigniting that original vision, pioneering a
                  community-driven launch and DeFi hub that connects passionate
                  builders with dedicated communities. Through Eclipse Fi,
                  everyday people gain access to merit-based opportunities once
                  reserved for the whales.
                </p>
              </div>

              {/* Feature Icons */}
              <div className="flex w-full flex-wrap items-center pb-[106px] pt-[35px] md:pb-[168px] md:pt-[32px]">
                {/* Transparent */}
                <div className="mr-8 md:mr-16">
                  <div className="mr-8 mt-[20px] flex items-center md:mr-0">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="21" cy="21" r="21" fill="#31326F" />
                      <path
                        d="M30.324 19.3932L27.5233 16.6549C26.667 15.8133 25.6501 15.1456 24.5308 14.69C23.4115 14.2345 22.2117 14 21 14C19.7883 14 18.5885 14.2345 17.4692 14.69C16.3499 15.1456 15.333 15.8133 14.4767 16.6549L11.676 19.3932C11.4617 19.6034 11.2917 19.853 11.1757 20.1277C11.0597 20.4025 11 20.6969 11 20.9943C11 21.2917 11.0597 21.5862 11.1757 21.861C11.2917 22.1357 11.4617 22.3853 11.676 22.5955L14.4767 25.3451C15.333 26.1867 16.3499 26.8544 17.4692 27.31C18.5885 27.7655 19.7883 28 21 28C22.2117 28 23.4115 27.7655 24.5308 27.31C25.6501 26.8544 26.667 26.1867 27.5233 25.3451L30.324 22.5955C30.5383 22.3853 30.7083 22.1357 30.8243 21.861C30.9403 21.5862 31 21.2917 31 20.9943C31 20.6969 30.9403 20.4025 30.8243 20.1277C30.7083 19.853 30.5383 19.6034 30.324 19.3932ZM21 24.2928C20.3367 24.2928 19.6882 24.0996 19.1367 23.7378C18.5852 23.376 18.1553 22.8618 17.9014 22.2601C17.6476 21.6584 17.5812 20.9963 17.7106 20.3576C17.84 19.7189 18.1594 19.1322 18.6285 18.6717C19.0975 18.2112 19.6951 17.8976 20.3457 17.7705C20.9963 17.6435 21.6706 17.7087 22.2835 17.9579C22.8963 18.2071 23.4201 18.6291 23.7886 19.1706C24.1572 19.7121 24.3539 20.3488 24.3539 21C24.3539 21.8733 24.0005 22.7108 23.3715 23.3283C22.7426 23.9459 21.8895 24.2928 21 24.2928Z"
                        fill="#98B9FF"
                      />
                    </svg>
                    <p className="ml-2 text-sm font-bold leading-4 text-gray-100 md:ml-4 md:text-[18px] md:leading-[21px]">
                      Transparent
                    </p>
                  </div>
                </div>

                <div className="mr-8 md:mr-16">
                  <div className="mr-8 mt-[20px] flex items-center md:mr-0">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="21" cy="21" r="21" fill="#31326F" />
                      <path
                        d="M30.324 19.3932L27.5233 16.6549C26.667 15.8133 25.6501 15.1456 24.5308 14.69C23.4115 14.2345 22.2117 14 21 14C19.7883 14 18.5885 14.2345 17.4692 14.69C16.3499 15.1456 15.333 15.8133 14.4767 16.6549L11.676 19.3932C11.4617 19.6034 11.2917 19.853 11.1757 20.1277C11.0597 20.4025 11 20.6969 11 20.9943C11 21.2917 11.0597 21.5862 11.1757 21.861C11.2917 22.1357 11.4617 22.3853 11.676 22.5955L14.4767 25.3451C15.333 26.1867 16.3499 26.8544 17.4692 27.31C18.5885 27.7655 19.7883 28 21 28C22.2117 28 23.4115 27.7655 24.5308 27.31C25.6501 26.8544 26.667 26.1867 27.5233 25.3451L30.324 22.5955C30.5383 22.3853 30.7083 22.1357 30.8243 21.861C30.9403 21.5862 31 21.2917 31 20.9943C31 20.6969 30.9403 20.4025 30.8243 20.1277C30.7083 19.853 30.5383 19.6034 30.324 19.3932ZM21 24.2928C20.3367 24.2928 19.6882 24.0996 19.1367 23.7378C18.5852 23.376 18.1553 22.8618 17.9014 22.2601C17.6476 21.6584 17.5812 20.9963 17.7106 20.3576C17.84 19.7189 18.1594 19.1322 18.6285 18.6717C19.0975 18.2112 19.6951 17.8976 20.3457 17.7705C20.9963 17.6435 21.6706 17.7087 22.2835 17.9579C22.8963 18.2071 23.4201 18.6291 23.7886 19.1706C24.1572 19.7121 24.3539 20.3488 24.3539 21C24.3539 21.8733 24.0005 22.7108 23.3715 23.3283C22.7426 23.9459 21.8895 24.2928 21 24.2928Z"
                        fill="#98B9FF"
                      />
                    </svg>
                    <p className="ml-2 text-sm font-bold leading-4 text-gray-100 md:ml-4 md:text-[18px] md:leading-[21px]">
                      Transparent
                    </p>
                  </div>
                </div>

                <div className="mr-8 md:mr-16">
                  <div className="mr-8 mt-[20px] flex items-center md:mr-0">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="21" cy="21" r="21" fill="#31326F" />
                      <path
                        d="M30.324 19.3932L27.5233 16.6549C26.667 15.8133 25.6501 15.1456 24.5308 14.69C23.4115 14.2345 22.2117 14 21 14C19.7883 14 18.5885 14.2345 17.4692 14.69C16.3499 15.1456 15.333 15.8133 14.4767 16.6549L11.676 19.3932C11.4617 19.6034 11.2917 19.853 11.1757 20.1277C11.0597 20.4025 11 20.6969 11 20.9943C11 21.2917 11.0597 21.5862 11.1757 21.861C11.2917 22.1357 11.4617 22.3853 11.676 22.5955L14.4767 25.3451C15.333 26.1867 16.3499 26.8544 17.4692 27.31C18.5885 27.7655 19.7883 28 21 28C22.2117 28 23.4115 27.7655 24.5308 27.31C25.6501 26.8544 26.667 26.1867 27.5233 25.3451L30.324 22.5955C30.5383 22.3853 30.7083 22.1357 30.8243 21.861C30.9403 21.5862 31 21.2917 31 20.9943C31 20.6969 30.9403 20.4025 30.8243 20.1277C30.7083 19.853 30.5383 19.6034 30.324 19.3932ZM21 24.2928C20.3367 24.2928 19.6882 24.0996 19.1367 23.7378C18.5852 23.376 18.1553 22.8618 17.9014 22.2601C17.6476 21.6584 17.5812 20.9963 17.7106 20.3576C17.84 19.7189 18.1594 19.1322 18.6285 18.6717C19.0975 18.2112 19.6951 17.8976 20.3457 17.7705C20.9963 17.6435 21.6706 17.7087 22.2835 17.9579C22.8963 18.2071 23.4201 18.6291 23.7886 19.1706C24.1572 19.7121 24.3539 20.3488 24.3539 21C24.3539 21.8733 24.0005 22.7108 23.3715 23.3283C22.7426 23.9459 21.8895 24.2928 21 24.2928Z"
                        fill="#98B9FF"
                      />
                    </svg>
                    <p className="ml-2 text-sm font-bold leading-4 text-gray-100 md:ml-4 md:text-[18px] md:leading-[21px]">
                      Transparent
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="items-center">
              <Image
                src={bb}
                alt="hero-image"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-[3rem] bg-purple-900">
          <div className="container mx-auto content-wrapper flex flex-col gap-12 ">
            <div className="flex items-center justify-between">
              <div className="flex flex-col max-w-[600px]">
                <h1 className="px-5 text-[24px] font-bold leading-[26px] text-gray-100 md:px-0 md:text-[36px] md:leading-[44px]">
                  Upcoming projects
                </h1>
                <p className="mt-[8px] px-5 font-inter text-base font-normal leading-normal text-gray-100/[0.7] md:px-0">
                  Discover our selection of highly vetted live and upcoming
                  projects, and participate in the next big launches
                </p>
              </div>
              <button className="bg-[#1C1B3A] py-[0.75rem] px-[0.5rem] border border-blue-400 rounded-2xl">
                See all project
              </button>
            </div>
          </div>
          <div className="container mx-auto mt-8">
            <div className="flex flex-row gap-5">
            <div className="rounded-2xl bg-[#1C1B3A] p-4 shadow-xl text-white font-inter h-full">
                {/* Top Image with IDO Badge and Upcoming Tag */}
                <div className="rounded-xl overflow-hidden mb-4 flex flex-col gap-4">
                  <Image
                    src={bb}
                    alt="hero-image"
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover h-[200px]"
                  />

                  <div className="flex flex-row gap-2">
                    {/* IDO Badge */}
                    <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 py-1 rounded-md">
                      IDO
                    </button>
                    {/* Upcoming Tag */}
                    <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 py-1 rounded-md">
                      Upcoming
                    </button>
                    {/* App Icon (Bottom Left) */}
                    <Image
                      src={bb}
                      alt="app-icon"
                      width={32}
                      height={32}
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Title & Description */}
                <div className="mt-4 flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Kii Chain</h3>
                  <p className="text-sm text-gray-300">
                    The Blockchain for emerging markets...
                  </p>
                </div>

                {/* Raise & Application Info */}
                <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-400">Raise</span>
                    <span className="font-bold text-white">
                      100,000 <span className="text-xs text-gray-400">USD</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400">Applications Open In</span>
                    <span className="font-bold text-white">TBA</span>
                  </div>
                </div>

                {/* Project Details Button */}
                <div className="mt-4">
                  <button className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-bold text-white transition duration-300 hover:opacity-90">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16l4-4-4-4m5 8V8"
                      />
                    </svg>
                    Project Details
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-[#1C1B3A] p-4 shadow-xl text-white font-inter h-full">
                {/* Top Image with IDO Badge and Upcoming Tag */}
                <div className="rounded-xl overflow-hidden mb-4 flex flex-col gap-4">
                  <Image
                    src={bb}
                    alt="hero-image"
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover h-[200px]"
                  />

                  <div className="flex flex-row gap-2">
                    {/* IDO Badge */}
                    <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 py-1 rounded-md">
                      IDO
                    </button>
                    {/* Upcoming Tag */}
                    <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 py-1 rounded-md">
                      Upcoming
                    </button>
                    {/* App Icon (Bottom Left) */}
                    <Image
                      src={bb}
                      alt="app-icon"
                      width={32}
                      height={32}
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Title & Description */}
                <div className="mt-4 flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Kii Chain</h3>
                  <p className="text-sm text-gray-300">
                    The Blockchain for emerging markets...
                  </p>
                </div>

                {/* Raise & Application Info */}
                <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-400">Raise</span>
                    <span className="font-bold text-white">
                      100,000 <span className="text-xs text-gray-400">USD</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400">Applications Open In</span>
                    <span className="font-bold text-white">TBA</span>
                  </div>
                </div>

                {/* Project Details Button */}
                <div className="mt-4">
                  <button className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-bold text-white transition duration-300 hover:opacity-90">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16l4-4-4-4m5 8V8"
                      />
                    </svg>
                    Project Details
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-[#1C1B3A] p-4 shadow-xl text-white font-inter h-full">
                {/* Top Image with IDO Badge and Upcoming Tag */}
                <div className="rounded-xl overflow-hidden mb-4 flex flex-col gap-4">
                  <Image
                    src={bb}
                    alt="hero-image"
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover h-[200px]"
                  />

                  <div className="flex flex-row gap-2">
                    {/* IDO Badge */}
                    <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 py-1 rounded-md">
                      IDO
                    </button>
                    {/* Upcoming Tag */}
                    <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 py-1 rounded-md">
                      Upcoming
                    </button>
                    {/* App Icon (Bottom Left) */}
                    <Image
                      src={bb}
                      alt="app-icon"
                      width={32}
                      height={32}
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Project Title & Description */}
                <div className="mt-4 flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Kii Chain</h3>
                  <p className="text-sm text-gray-300">
                    The Blockchain for emerging markets...
                  </p>
                </div>

                {/* Raise & Application Info */}
                <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-400">Raise</span>
                    <span className="font-bold text-white">
                      100,000 <span className="text-xs text-gray-400">USD</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400">Applications Open In</span>
                    <span className="font-bold text-white">TBA</span>
                  </div>
                </div>

                {/* Project Details Button */}
                <div className="mt-4">
                  <button className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 font-bold text-white transition duration-300 hover:opacity-90">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16l4-4-4-4m5 8V8"
                      />
                    </svg>
                    Project Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[url('/assets/svg/svg-innovation-bg.svg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
          {/* Content */}
          <div className="container mx-auto text-center px-4 md:px-0">
            <div className="md:w-[550px]">
              {/* Headings */}
              <h3 className="text-[22px] font-medium leading-[31px] text-gray-100 md:text-[34px] md:leading-[58px]">
                Fostering innovation across
              </h3>
              <h2 className="mb-[9px] text-[32px] font-bold leading-10 text-gray-100 md:mb-[26px] md:text-[72px] md:leading-[76px]">
                <span className="rainbow-text inline">Cosmos </span>
                <span>and</span>
                <br />
                <span className="rainbow-text inline">Layer 2s</span>
              </h2>

              {/* Paragraphs */}
              <p className="font-inter pr-5 text-p12 leading-[19px] text-gray-200 md:text-[18px] md:leading-[26px] mt-[10px] md:mt-6">
                For the upcoming cycle, streamlining the user experience is
                paramount for the next wave of adoption. Eclipse Fi is working
                with partners to radically transform the cross-chain user
                experience, leveraging account abstraction to create an
                intuitive “onboard your grandma” level experience.
              </p>
              <p className="font-inter pr-5 text-p12 leading-[19px] text-gray-200 md:text-[18px] md:leading-[26px] mt-[10px] md:mt-6">
                Eclipse Fi is committed to deep ecosystem building and has
                selected to focus on the Cosmos ecosystem with a homebase on
                Neutron blockchain, as well as emerging layer-2s like Mantle,
                Linea and Base. These ecosystems hold immense potential for
                robust foundations and collaborative ecosystem growth.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-[40px]  w-full h-full overflow-x-clip pt-40 md:mb-[120px]">
          <div className="container mx-auto flex flex-col items-start justify-between md:flex-row md:items-center">
            {/* Left Column */}
            <div className="max-w-[470px]">
              <div className="flex flex-col justify-center">
                <h3 className="text-[22px] font-normal leading-[27px] text-purple-400 md:text-[28px] md:leading-[36px]">
                  Empowering the Future:
                </h3>
                <h2 className="text-[32px] font-bold leading-[37px] text-gray-100 md:text-[48px] md:leading-[64px]">
                  Tools for a Decentralised Revolution
                </h2>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex w-full max-w-[620px] flex-col gap-16 md:grid md:grid-cols-2 md:grid-rows-2 md:bg-[url('/assets/svg/svg-cross.svg')] md:bg-center md:bg-no-repeat">
              {/* Card 1 */}
              <div className="border-b border-[#98B9FF4D] pb-14 pt-8 md:border-none md:py-0 md:pr-7">
                {/* SVG icon */}
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="28" cy="28" r="28" fill="#31326F" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9266 27.1888L27.3678 29.9088V37.2243L21.9266 39.9443L16.4866 37.2243V29.9088L21.9266 27.1888ZM33.44 26.091L28 28.811L22.56 26.091V18.7754L28 16.0554L33.44 18.7754V26.091ZM28.6322 37.2243V29.9088L34.0733 27.1888L39.5133 29.9088V37.2243L34.0733 39.9443L28.6322 37.2243Z"
                    fill="#98B9FF"
                  />
                </svg>
                <div className="mt-6 text-[20px] font-bold leading-[23px] text-gray-100">
                  Modular Token Launches and Flexible Launch Tracks
                </div>
                <p className="font-inter mt-3 max-w-[290px] text-sm leading-5 text-gray-200">
                  Our modular approach to token launches gives projects the
                  flexibility to choose what fits best, whether its a liquidity
                  pool launch or another custom path. Eclipse Fi provides
                  the tools to ensure a successful, long-term launch that aligns
                  with both project and community outcomes.
                </p>
              </div>

              <div className="border-b border-[#98B9FF4D] pb-14 pt-8 md:border-none md:py-0 md:pr-7">
                {/* SVG icon */}
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="28" cy="28" r="28" fill="#31326F" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9266 27.1888L27.3678 29.9088V37.2243L21.9266 39.9443L16.4866 37.2243V29.9088L21.9266 27.1888ZM33.44 26.091L28 28.811L22.56 26.091V18.7754L28 16.0554L33.44 18.7754V26.091ZM28.6322 37.2243V29.9088L34.0733 27.1888L39.5133 29.9088V37.2243L34.0733 39.9443L28.6322 37.2243Z"
                    fill="#98B9FF"
                  />
                </svg>
                <div className="mt-6 text-[20px] font-bold leading-[23px] text-gray-100">
                  Modular Token Launches and Flexible Launch Tracks
                </div>
                <p className="font-inter mt-3 max-w-[290px] text-sm leading-5 text-gray-200">
                  Our modular approach to token launches gives projects the
                  flexibility to choose what fits best, whether its a liquidity
                  pool launch or another custom path. Eclipse Fi provides
                  the tools to ensure a successful, long-term launch that aligns
                  with both project and community outcomes.
                </p>
              </div>

              <div className="border-b border-[#98B9FF4D] pb-14 pt-8 md:border-none md:py-0 md:pr-7">
                {/* SVG icon */}
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="28" cy="28" r="28" fill="#31326F" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9266 27.1888L27.3678 29.9088V37.2243L21.9266 39.9443L16.4866 37.2243V29.9088L21.9266 27.1888ZM33.44 26.091L28 28.811L22.56 26.091V18.7754L28 16.0554L33.44 18.7754V26.091ZM28.6322 37.2243V29.9088L34.0733 27.1888L39.5133 29.9088V37.2243L34.0733 39.9443L28.6322 37.2243Z"
                    fill="#98B9FF"
                  />
                </svg>
                <div className="mt-6 text-[20px] font-bold leading-[23px] text-gray-100">
                  Modular Token Launches and Flexible Launch Tracks
                </div>
                <p className="font-inter mt-3 max-w-[290px] text-sm leading-5 text-gray-200">
                  Our modular approach to token launches gives projects the
                  flexibility to choose what fits best, whether its a liquidity
                  pool launch or another custom path. Eclipse Fi provides
                  the tools to ensure a successful, long-term launch that aligns
                  with both project and community outcomes.
                </p>
              </div>

              <div className="border-b border-[#98B9FF4D] pb-14 pt-8 md:border-none md:py-0 md:pr-7">
                {/* SVG icon */}
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="28" cy="28" r="28" fill="#31326F" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9266 27.1888L27.3678 29.9088V37.2243L21.9266 39.9443L16.4866 37.2243V29.9088L21.9266 27.1888ZM33.44 26.091L28 28.811L22.56 26.091V18.7754L28 16.0554L33.44 18.7754V26.091ZM28.6322 37.2243V29.9088L34.0733 27.1888L39.5133 29.9088V37.2243L34.0733 39.9443L28.6322 37.2243Z"
                    fill="#98B9FF"
                  />
                </svg>
                <div className="mt-6 text-[20px] font-bold leading-[23px] text-gray-100">
                  Modular Token Launches and Flexible Launch Tracks
                </div>
                <p className="font-inter mt-3 max-w-[290px] text-sm leading-5 text-gray-200">
                  Our modular approach to token launches gives projects the
                  flexibility to choose what fits best, whether its a liquidity
                  pool launch or another custom path. Eclipse Fi provides
                  the tools to ensure a successful, long-term launch that aligns
                  with both project and community outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container w-full mx-auto px-5">
          <div className="h-[229px] rounded-xl bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 px-5 md:h-[370px] md:rounded-[40px]">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="mx-auto mb-[6px] max-w-[240px] text-center font-sans text-[20px] font-bold leading-[24px] text-gray-100 md:mb-3 md:max-w-[700px] md:text-[36px] md:leading-[42px]">
                Are you ready
                <br /> for your launch on Eclipse FI?
              </div>
              <div className="mb-5 max-w-[255px] text-center font-inter text-[11px] leading-[18px] text-gray-200 md:mb-10 md:max-w-[650px] md:text-[18px] md:leading-8">
                Apply to launch your project and token through the Eclipse Fi
                protocol or submit an early expression of interest.
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://airtable.com/appocm8m9oZWPJv0t/pagBaVi0C6GsDZ6o5/form"
              >
                <button
                  className="flex cursor-pointer items-center justify-center text-gray-100 bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] rounded-[8.84px] px-[10px] py-[6px] text-sm font-bold leading-[19px] md:rounded-xl md:px-6 md:py-4 md:text-[18px] md:leading-[24px] hover:opacity-90 transition-opacity duration-300"
                  type="button"
                >
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-28">
          <div className="flex flex-col justify-center">
            <div className="text-center">
              <h2 className="font-semibold text-3xl">Our Sponsors</h2>

              <p className="max-w-md mx-auto mt-2 text-gray-500">
                We are thankful to each and every company sponsored our plugin
                which helped us to continue working on it.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
              <div className="text-gray-400 ">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="60"
                  fill="#98B9FF"
                >
                  <g
                    transform="matrix(.06928 0 0 .06928 7.367398 13.505331)"
                    fill="none"
                  >
                    <circle
                      r="50.167"
                      cy="237.628"
                      cx="269.529"
                      fill="#00d8ff"
                    ></circle>
                    <g stroke="#00d8ff" stroke-width="24">
                      <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"></path>
                      <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"></path>
                      <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"></path>
                    </g>
                  </g>
                  <path
                    d="M64.62 38.848l-4.26-6.436c2.153-.19 4.093-1.75 4.093-4.6 0-2.9-2.058-4.756-4.945-4.756h-6.34v15.78h1.964v-6.27h3.147l4.022 6.27zm-5.347-7.997h-4.14v-6.033h4.14c1.87 0 3.147 1.23 3.147 3.005s-1.278 3.03-3.147 3.03zm12.658 8.28c1.87 0 3.407-.615 4.543-1.75l-.852-1.16c-.9.923-2.224 1.443-3.525 1.443-2.46 0-3.975-1.798-4.117-3.95h9.25v-.45c0-3.43-2.035-6.128-5.49-6.128-3.265 0-5.63 2.674-5.63 5.986 0 3.573 2.437 6 5.82 6zm3.55-6.72h-7.5c.095-1.75 1.3-3.81 3.738-3.81 2.603 0 3.738 2.106 3.762 3.81zm13.534 6.436v-7.855c0-2.768-2.01-3.857-4.424-3.857-1.87 0-3.336.615-4.566 1.893l.828 1.23c1.017-1.088 2.13-1.585 3.502-1.585 1.656 0 2.887.875 2.887 2.413v2.058c-.923-1.065-2.224-1.562-3.786-1.562-1.94 0-4 1.207-4 3.762 0 2.484 2.058 3.786 4 3.786 1.538 0 2.84-.544 3.786-1.585v1.3zm-4.92-.994c-1.656 0-2.816-1.04-2.816-2.484 0-1.467 1.16-2.508 2.816-2.508 1.254 0 2.46.473 3.147 1.42v2.153c-.686.946-1.893 1.42-3.147 1.42zm13.5 1.278c2.082 0 3.312-.852 4.188-1.987l-1.183-1.088c-.757 1.017-1.727 1.49-2.9 1.49-2.437 0-3.95-1.893-3.95-4.424s1.514-4.4 3.95-4.4c1.183 0 2.153.45 2.9 1.49l1.183-1.088c-.875-1.136-2.106-1.987-4.188-1.987-3.407 0-5.702 2.603-5.702 5.986 0 3.407 2.295 6 5.702 6zm9.56 0c1.04 0 1.68-.308 2.13-.733l-.52-1.325c-.237.26-.7.473-1.207.473-.78 0-1.16-.615-1.16-1.467v-7.098h2.32V27.42h-2.32v-3.123h-1.775v3.123h-1.893v1.562h1.893v7.477c0 1.704.852 2.674 2.532 2.674z"
                    fill="#00d8ff"
                  ></path>
                </svg> */}
              </div>

              <div className="text-gray-400 ">
                {/* <svg
                  width="82"
                  height="40"
                  viewBox="0 0 148 90"
                  className="text-black "
                >
                  <path
                    d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                    fill="currentColor"
                  ></path>
                </svg> */}
              </div>

              <div className="text-gray-400 ">
                {/* <svg
                  viewBox="0 0 248 31"
                  className="w-auto h-5 text-slate-900 "
                >
                  <path
                    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                    fill="#38bdf8"
                  ></path>
                  <path
                    d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                    fill="currentColor"
                  ></path>
                </svg> */}
              </div>

              <div className="text-gray-400 ">
                {/* <svg
                  viewBox="0 0 105 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  className="text-[#f03e2f]"
                >
                  <title>Sanity</title>
                  <path
                    opacity="0.7"
                    d="M78.1793 7.99261V21.0028H73.9031V10.2138L78.1793 7.99261Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.7"
                    d="M20.9511 21.33L30.944 16.1051L29.7121 12.9141L23.1332 15.9821L20.9511 21.33Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M73.9031 10.2027L84.7443 4.65477L82.9126 1.5571L73.9031 5.95997V10.2027Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.7"
                    d="M43.3705 6.96233V21.0028H39.2927V1.00714L43.3705 6.96233Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M27.1299 6.18617L20.9511 21.33L17.7731 18.5943L25.1353 1.00714L27.1299 6.18617Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M25.1353 1.00714H29.3477L37.1386 21.0028H32.8269L25.1353 1.00714Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M44.0012 1.00714L52.9824 14.6682V21.0028L39.2927 1.00714H44.0012Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M64.9183 1.00714H60.6739V21.0063H64.9183V1.00714Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M73.9031 4.65474H67.37V1.00714H82.5867L84.7443 4.65474H78.1793H73.9031Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M97.2754 13.4153V21.0028H93.0629V13.4153"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.0629 13.4152L100.191 1.00714H104.666L97.2754 13.4152H93.0629Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.7"
                    d="M93.063 13.4152L85.7363 1.00714H90.3456L95.3092 9.51008L93.063 13.4152Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1.96126 3.31479C1.96126 6.09921 3.71145 7.75595 7.21536 8.62956L10.9283 9.47533C14.2444 10.2236 16.2639 12.0822 16.2639 15.1103C16.2897 16.4295 15.8531 17.7173 15.0274 18.7579C15.0274 15.7368 13.4367 14.1044 9.59972 13.1229L5.95409 12.3085C3.03475 11.6541 0.781478 10.1262 0.781478 6.83709C0.766123 5.56693 1.18116 4.32781 1.96126 3.31479"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.7"
                    d="M52.9824 13.6415V1.00714H57.0602V21.0028H52.9824V13.6415Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.7"
                    d="M12.7458 14.3689C14.3294 15.3643 15.0238 16.7565 15.0238 18.7544C13.713 20.4041 11.4101 21.33 8.70333 21.33C4.14718 21.33 0.958577 19.1268 0.25 15.2982H4.62547C5.18878 17.0559 6.68034 17.8703 8.67144 17.8703C11.1019 17.8703 12.7174 16.5964 12.7493 14.3619"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.7"
                    d="M4.23567 7.44267C3.5125 7.02045 2.9192 6.41375 2.51873 5.68697C2.11827 4.96019 1.92558 4.14045 1.96113 3.31476C3.22594 1.67891 5.42608 0.679993 8.10804 0.679993C12.7492 0.679993 15.4347 3.08852 16.0972 6.47856H11.8883C11.4242 5.14203 10.2621 4.10136 8.14347 4.10136C5.87957 4.10136 4.33487 5.39611 4.24629 7.44267"
                    fill="currentColor"
                  ></path>
                </svg> */}
              </div>

              <div className="text-gray-400 ">
                {/* <svg
                  width="100"
                  height="64"
                  viewBox="0 0 284 65"
                  fill="currentColor"
                  class="text-black "
                >
                  <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
                </svg> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mb-16 mt-[68px] px-5 md:mb-[217px] md:mt-[218px]">
          <div className="h-[200px] rounded-2xl bg-purple-600 px-5 md:h-[370px] md:rounded-[40px] md:px-0">
            <form className="flex h-full flex-col items-center justify-center">
              <div>
                <div className="mx-auto mb-2 text-center text-base font-bold leading-[18px] text-gray-100 md:mb-3 md:max-w-[700px] md:text-[36px] md:leading-[42px]">
                  Dont miss out on the next great innovations launching on
                  Eclipse FI
                </div>
                <div className="mx-auto mb-5 max-w-[505px] text-center font-inter text-p12 leading-[14px] text-gray-200 md:mb-10 md:text-[18px] md:leading-8">
                  Stay up to date about upcoming Cosmos and L2 launches by
                  joining our mailing list
                </div>
              </div>
              <div>
                <div className="flex">
                  <input
                    type="email"
                    className="mr-2 rounded-xl border-[1.5px] border-trans-dark-600 bg-[#7554D5] px-3 py-2 font-medium text-gray-100 outline-none placeholder:text-purple-700 md:mr-5 md:px-6 md:py-4 md:font-[18px]"
                    placeholder="Enter email here"
                    required
                  />
                  <button
                    className="flex cursor-pointer items-center justify-center text-gray-100 bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] rounded-[8.84px] px-[10px] py-[6px] text-base font-bold leading-[19px] md:rounded-xl md:px-6 md:py-4 md:text-[18px] md:leading-6"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* <footer className="bg-white dark:bg-gray-900 w-full">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="FlowBite Logo"
                  className="h-8 me-3"
                  width={32}
                  height={32}
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              <a title="Click to view projects" href="/launchpad">
                <button
                  className="border-gradient-l-purple-blue-purple gradient-border-2 box-border items-center text-gray-100 
          flex cursor-pointer mt-7 rounded-[7.2px] px-[14.4px] py-[9px] text-sm font-bold leading-4 
          md:mt-0 md:rounded-xl md:px-6 md:py-[15px] md:text-base md:leading-[19px]"
                >
                  View Projects
                </button>
              </a>


              <div className="flex items-center gap-2 font-inter text-sm leading-5 text-[#A5AED5]">
                $ECLIP Arbitrum
                <button
                  className="cursor-pointer"
                  aria-label="ECLIP Arbitrum options"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z"
                      stroke="url(#paint0_linear_1943_33358)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1943_33358"
                        x1="12"
                        y1="4"
                        x2="12"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.343379" stopColor="#AB97FB" />
                        <stop offset="1" stopColor="#C7BAFC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-2 font-inter text-sm leading-5 text-[#A5AED5]">
                $ECLIP Neutron
                <button
                  className="cursor-pointer"
                  aria-label="ECLIP Neutron options"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z"
                      stroke="url(#paint1_linear_1943_33358)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint1_linear_1943_33358"
                        x1="12"
                        y1="4"
                        x2="12"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.343379" stopColor="#AB97FB" />
                        <stop offset="1" stopColor="#C7BAFC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>

              <a>Audit</a>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
