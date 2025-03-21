/* eslint-disable react/no-unescaped-entities */
import SocialButtons from "./Reusable/SocialButtons";

const Footer = () => {
  return (
    <footer
      id="Contact"
      className="bg-slate-800 text-white lg:px-48 px-4 py-16"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="cursor-pointer text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
            <img height={80} width={80} src="/images/logo.png" alt="SH logo" />
          </span>
          <p className="text-[16px] font-sans my-5 font-normal leading-normal text-white">
          I bring ideas to life through innovative web and mobile app development, delivering seamless, user-centric solutions. Committed to excellence and client satisfaction, I craft digital experiences that are intuitive, impactful, and built for success in today’s dynamic landscape.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] font-sans">
            <li className="my-2">Poster Designing</li>
            <li className="my-2">UI/UX Designing</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">Mobile App Development</li>
            <li className="my-2">CRM Development</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-serif font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <div className="font-sans">
            <a
              href="mailto:sabiqhashilkp786@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[16px] my-2">
                <span className="text-fuchsia-500">Email: </span>
                sabiqhashilkp786@gmail.com
              </p>
            </a>
        
          </div>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-fuchsia-800 py-2 uppercase">
            Follow Me
          </h2>
          <SocialButtons />
        </div>
      </div>

      <p className="justify-center font-thin text-center text-[16px] mt-5">
        Copyright &copy; 2022 - {new Date().getFullYear()}
        <span className="text-fuchsia-500"> Sabiq Hashil</span>. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
