export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div>
      <div className="bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%"></div>
      <div className="container h-screen relative z-20">
        <div className="h-full flex flex-col justify-end text-center items-center pb-4 lg:pb-0 lg:w-96 lg:text-left lg:justify-center lg:items-start">
          <h1 className="text-4xl lg:text-5xl text-primary-dark-blue pb-5">
            Next generation digital banking
          </h1>
          <p className="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7">
            Request Invite
          </button>
        </div>
      </div>
    </section>
  );
}
