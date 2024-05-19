import img1 from "../assets/projects/LeadUp logo.png";
import img2 from "../assets/projects/jabiorders.png";
import img3 from "../assets/projects/homebudget_logo.jpg";
import img4 from "../assets/projects/sbqmoneycare.jpg";
import { useEffect } from "react";
import Aos from "aos";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <a href="" target="_blank" className="cursor-pointer">
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className="text-[26px] flex text-center items-center justify-center rounded-3xl p-1 border border-fuchsia-800 b_glow"
            src={img1}
            alt="LeadUp logo"
          />
          <h3
            data-aos="fade-down"
            className="text-[25px] mt-5 font-semibold mb-3 leading-normal uppercase text-fuchsia-500"
          >
            CRM Web Application
          </h3>
          <p
            data-aos="fade-left"
            className="text-[16px] font-normal leading-normal text-white"
          >
            The software meets the client's need for a streamlined loan approval
            process, functioning as a user-friendly CRM system. It features a
            dashboard for quick insights into loan statuses, staff, and branch
            statistics. Integration of WhatsApp messaging allows direct, prompt
            customer communication, boosting system efficiency and enhancing
            customer experience.
          </p>
        </a>
        <a href="" target="_blank" className="cursor-pointer">
          <img
            data-aos="fade-down"
            height={250}
            width={250}
            className="text-[26px] flex text-center items-center justify-center rounded-3xl p-1 border border-fuchsia-800 b_glow"
            src={img2}
            alt="JabiOrders logo"
          />
          <h3
            data-aos="fade-up"
            className="text-[25px] mt-5 font-semibold mb-3 leading-normal uppercase text-fuchsia-500"
          >
            Mobile Application
          </h3>
          <p
            data-aos="fade-right"
            className="text-[16px] font-normal leading-normal text-white"
          >
            I led a team in developing a mobile app using Flutter for a fruit
            and vegetable supplier. The app features a user-friendly dashboard
            with real-time insights into customers, products, and orders. It
            enables seamless order management, offline functionality, and
            enhanced customer and product management, showcasing our commitment
            to efficient, intuitive solutions for unique business needs.
          </p>
        </a>
        <a href="https://home-budget-web-app-react-js.vercel.app/" target="_blank" className="cursor-pointer">
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className="text-[26px] flex text-center items-center justify-center rounded-3xl p-1 border border-fuchsia-800 b_glow"
            src={img3}
            alt="HomeBudget logo"
          />
          <h3
            data-aos="fade-down"
            className="text-[25px] mt-5 font-semibold mb-3 leading-normal uppercase text-fuchsia-500"
          >
            Web Application
          </h3>
          <p
            data-aos="fade-left"
            className="text-[16px] font-normal leading-normal text-white"
          >
            I developed a HomeBudget web app with local storage for efficient
            financial planning, particularly for home construction projects.
            Users can create multiple budgets, track expenses by stage, and
            compare debited amounts to budgeted figures. The app's intuitive
            interface and automated calculations simplify budget management,
            providing a clear financial overview and aiding users in achieving
            their financial goals.
          </p>
        </a>
        <a 
          href="https://drive.google.com/drive/folders/1RLuWQvhtkYxTYT_5nQnFXPVs9wy9U3Ga?usp=sharing"
          target="_blank" 
          className="cursor-pointer">
          <img
            data-aos="fade-down"
            height={250}
            width={250}
            className="text-[26px] flex text-center items-center justify-center rounded-3xl p-1 border border-fuchsia-800 b_glow"
            src={img4}
            alt="SBQMoneyCare logo"
          />
          <h3
            data-aos="fade-up"
            className="text-[25px] mt-5 font-semibold mb-3 leading-normal uppercase text-fuchsia-500"
          >
            Mobile Application
          </h3>
          <p
            data-aos="fade-right"
            className="text-[16px] font-normal leading-normal text-white"
          >
            Money Care, a Flutter-based mobile app for personal finance
            management, simplifies income and expense tracking with an intuitive
            interface. Exclusively for personal use, the APK version offers a
            tailored financial companion. Users can categorize transactions,
            effortlessly record purposes and amounts, and access a date-wise
            transaction history. Money Care ensures seamless personal financial
            control at your fingertips.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
