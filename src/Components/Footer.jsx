/* eslint-disable react/no-unescaped-entities */
import SocialButtons from "./Reusable/SocialButtons";

const Footer = () => {
  const services = [
    { id: 1, title: "Custom Web Development (MERN Stack)", aos: "flip-up" },
    {
      id: 2,
      title: "Mobile App Development (Flutter for iOS & Android)",
      aos: "flip-up",
    },
    { id: 3, title: "UI/UX Design & Prototyping", aos: "flip-up" },
    { id: 4, title: "Software Architecture & Engineering", aos: "flip-up" },
  ];

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
            Transforming concepts into intelligent, automated digital solutions.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] font-sans">
            {services.map((service) => (
              <li
                key={service.id}
                data-aos={service.aos}
                className="my-2 hover:text-blue-500 transition-colors duration-300"
              >
                {service.title}
              </li>
            ))}
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
              <p className="text-[16px] my-2 hover:text-blue-500">
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

      <p className="text-center font-thin text-[16px] mt-5 text-white">
        &copy; 2022 - {new Date().getFullYear()}{" "}
        <span className="text-fuchsia-500 font-medium">Sabiq Hashil</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
