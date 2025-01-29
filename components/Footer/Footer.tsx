import Link from "next/link";

export default function Footer() {
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Our Team", path: "/team" },
    { name: "Impact", path: "/impact" },
    { name: "Accomplishments", path: "/accomplishments" },
    { name: "FAQ", path: "/faq" },
  ];

  const linkedinUrl = "https://www.linkedin.com/";

  return (
    <>
      <div className="footer-container w-full min-h-[13rem] bg-dgreen flex flex-col md:flex-row relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg
            className="w-full h-32"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                id="dropGradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#FBF6E9", stopOpacity: 0.4 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FBF6E9", stopOpacity: 0 }}
                />
              </radialGradient>

              <path id="dropPath" d="M0,0 Q -4,8 0,16 Q 4,8 0,0" />
            </defs>

            <g>
              {[...Array(12)].map((_, i) => (
                <use
                  key={i}
                  href="#dropPath"
                  fill="url(#dropGradient)"
                  transform={`translate(${100 + i * 100}, 0) scale(2)`}>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`${100 + i * 100},0; ${100 + i * 100},100`}
                    dur={`${1.5 + Math.random()}s`}
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${1.5 + Math.random()}s`}
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </use>
              ))}
            </g>
          </svg>
        </div>

        <div className="footer-start hidden md:block md:w-1/5"></div>

        <div className="footer-mobile w-full flex flex-row md:hidden relative z-10">
          <div className="social-media-container w-1/3 flex flex-col my-8 pt-2">
            <div className="social-media-text text-cream text-2xl text-center font-lilita hover:scale-105 transition-transform">
              Social
            </div>
            <div className="footer-logo-container h-full w-full flex justify-center">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block">
                <img
                  src="/images/linkedin.png"
                  alt="Linkedin"
                  className="footer-logo-image h-20 w-20 hover:opacity-80 cursor-pointer transform hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
            <div className="text-cream text-2xl text-center font-lilita hover:scale-105 transition-transform">
              Media
            </div>
          </div>

          <div className="links-container w-1/3 flex flex-col my-4 ml-3 mr-2 pl-1 text-center">
            <div className="links-text text-cream text-2xl font-lilita">
              Links
            </div>
            <ul className="links text-cream text-base font-lilita space-y-1 mt-2">
              {navigationLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:opacity-80 cursor-pointer transform hover:translate-x-1 transition-transform duration-200">
                  <Link href={link.path} className="block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="logo-container w-1/3 flex justify-center items-start pl-4 mt-16">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="footer-logo-image w-16 hover:rotate-[360deg] transition-transform duration-1000 ease-in-out cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div className="footer-middle w-full md:w-3/5 hidden md:flex flex-col md:flex-row px-4 md:px-0 mr-14 relative z-10">
          <div className="links-container1 w-full md:w-1/3 flex flex-col my-4 md:my-6 text-center">
            <div className="links-text text-cream text-3xl md:text-4xl font-lilita">
              Links
            </div>
            <ul className="links1 text-cream text-xl md:text-2xl font-lilita space-y-2 md:space-y-3 mt-2">
              {navigationLinks.slice(0, 3).map((link) => (
                <li
                  key={link.name}
                  className="hover:opacity-80 cursor-pointer transform hover:translate-x-2 transition-transform duration-200">
                  <Link href={link.path} className="block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="links-container2 w-full md:w-1/3 flex flex-col my-4 md:my-6 text-center">
            <div className="links-text text-cream text-3xl md:text-4xl font-lilita">
              Links
            </div>
            <ul className="links2 text-cream text-xl md:text-2xl font-lilita space-y-2 md:space-y-3 mt-2">
              {navigationLinks.slice(3).map((link) => (
                <li
                  key={link.name}
                  className="hover:opacity-80 cursor-pointer transform hover:translate-x-2 transition-transform duration-200">
                  <Link href={link.path} className="block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="social-media-container w-full md:w-1/3 flex flex-col my-4 md:my-6">
            <div className="social-media-text text-cream text-3xl md:text-4xl text-center font-lilita hover:scale-105 transition-transform">
              Social Media
            </div>
            <div className="footer-logo-container h-full w-full flex justify-center mt-2">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block">
                <img
                  src="/images/linkedin.png"
                  alt="Linkedin"
                  className="footer-logo-image w-24 md:w-32 hover:opacity-80 cursor-pointer transform hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-end hidden md:flex h-full md:w-1/5 md:justify-end items-center md:mr-2 relative z-10">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="footer-logo-image w-24 md:w-32 mt-14 mr-20 hover:rotate-[360deg] transition-transform duration-1000 ease-in-out cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="bg-dgreen w-full pb-4 relative z-10">
        <div className="md:hidden text-center">
          <div className="w-full flex justify-center">
            <div className="w-2/3 h-[3px] bg-cream mt-5 mb-2"></div>
          </div>
          <p className="text-cream font-lilita hover:scale-105 transition-transform">
            Website by PCOJ
          </p>
        </div>

        <div className="hidden md:block text-center">
          <div className="w-full flex justify-center">
            <div className="w-2/3 h-[4px] bg-cream mt-6 mb-3"></div>
          </div>
          <p className="text-cream font-lilita hover:scale-105 transition-transform">
            ©2025 All rights reserved. Website by PCOJ
          </p>
        </div>
      </div>
    </>
  );
}
