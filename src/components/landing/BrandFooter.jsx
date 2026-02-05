const BrandFooter = () => {
  return (
    <section className="relative bg-white py-16 px-4 overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Logo */}
        <div className="w-28 h-28 overflow-hidden rounded-full bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] flex items-center justify-center mb-6">
          <img
            src="https://algo.dilsetrader.in/assets/dilsetraderLogo-C4rcftXu.png" // replace with your exact logo path
            alt="Dil Se Trader"
            className="w-full h-full object-center"
          />
        </div>

        {/* Brand Name */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-black mb-6">
          DIL SE TRADER
        </h2>

        {/* Follow Us */}
        <p className="text-gray-500 font-semibold mb-4">
          FOLLOW US ON:
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mb-10">
          {/* WhatsApp */}
          <a
            href="#"
            className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center hover:scale-105 transition"
          >
            
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-full h-full"
            />
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center hover:scale-105 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-full h-full"
            />
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-400 text-sm">
          Disclaimer
        </p>
        <p className="max-w-6xl text-sm text-gray-500">
The Training Programs are designed to teach investors about technical analysis and market psychology by providing various information and material including live cases and examples from the stock market. Such information and material is provided solely for educational and training purposes and does not constitute advice, guarantee, invitation, or recommendation to buy, sell, trade, or invest in any stocks. Trading stocks involves significant risks, and past performance is not indicative of future results.
        </p>

      </div>
    </section>
  );
};

export default BrandFooter;
