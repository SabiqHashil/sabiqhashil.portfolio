import Aos from "aos";
import { useEffect } from "react";

const services = [
  { id: 1, title: "CRM Development", aos: "flip-up" },
  { id: 2, title: "Web Development", aos: "flip-left" },
  { id: 3, title: "Mobile App Development", aos:  "flip-right" },
   { id: 4, title: "UI UX Designing", aos: "flip-down" },
];

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      id="Services"
      className="p-20 lg:mb-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="slide-right"
        className="text-[50px] font-serif font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Services
      </h1>
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        {services.map((service) => (
          <h2
            key={service.id}
            data-aos={service.aos}
            className="text-[26px] font-sans flex text-center items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border border-fuchsia-800 b_glow"
          >
            {service.title}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Services;
