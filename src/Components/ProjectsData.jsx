// src/ProjectsData.js
import FasPnr from "../assets/projects/fas_pnr_logo.jpg";
import OrdersAndDelivery from "../assets/projects/orders_and_delivery_logo.jpg";
import MoneyCare from "../assets/projects/sbq_money_care_logo.jpg";
import LeadUp from "../assets/projects/leadup_logo.png";
import HomeBudget from "../assets/projects/home_budget_logo.jpg";
import JAESCompany from "../assets/projects/jaes_company_logo.jpg";

export const ProjectsData = [
  {
    id: "jaes-company",
    title: "Website",
    description:
      "The website for JAES Company SDN BHD specializes in refrigeration, HVAC, and food equipment, serving industries like supermarkets, food distribution centers, and agricultural farms. It focuses on the installation, repair, maintenance, and troubleshooting of equipment such as freezers and cold rooms. The site promotes a cost-effective annual maintenance package, ensuring regular inspections and timely repairs. Additionally, it features a 'Request a Service' section offering free quotations, specialized refrigeration control boards, and long-term support. JAES Company’s expertise in servicing commercial cold rooms in Bandar Seri Begawan is highlighted, emphasizing their strong local presence.",
    image: JAESCompany,
    link: "https://www.jaes-company.com/",
    aos: "slide-up",
  },
  {
    id: "fas-pnr",
    title: "Mobile App",
    description:
      "FAS mobile app, developed in Flutter, is designed specifically for a client’s fisheries business, focusing on the efficient management of fish boxes and driver coordination within fisheries markets. This app offers real-time visibility into key metrics such as the number of drivers, markets, and boxes, while accurately tracking box histories and movements. It empowers admins with full control to manage market details, driver information, and box logistics. The app's streamlined data updates enhance operational efficiency and provide a clear view of the fisheries supply chain, while its capability to generate and share comprehensive PDF reports, complete with calculations and images, supports effective communication with stakeholders, ensuring a well-organized and transparent fisheries market management system.",
    image: FasPnr,
    link: "https://drive.google.com/drive/folders/1tQ2zsX9HME5IL28hgOa5NN0VBYChJCAL?usp=drive_link",
    aos: "slide-up",
  },
  {
    id: "orders-and-delivery",
    title: "Mobile App",
    description:
      "Orders and Delivery mobile app, developed using Flutter, is specifically designed and developed to meet the unique business needs and requirements of a fruit and vegetable supplier. This comprehensive application features a user-friendly dashboard that provides real-time insights into customer data, product inventory, and order statuses. It facilitates seamless order management, allowing shopkeepers to place and track orders with ease. The app’s offline functionality ensures uninterrupted service, while robust customer and product management systems enhance overall usability. This solution reflects a commitment to delivering efficient and intuitive tools tailored to the unique needs of the business.",
    image: OrdersAndDelivery,
    link: "https://drive.google.com/drive/folders/13HdXG6tRvjUA1XR_RtgEur37-fh0-ZaW?usp=sharing",
    aos: "slide-up",
  },
  {
    id: "money-care",
    title: "Mobile App",
    description:
      "Money Care is a Flutter-based mobile application designed to streamline personal finance management, making income and expense tracking effortless and intuitive. Developed exclusively for personal use, the APK version serves as a convenient financial companion, offering a tailored experience. Users can easily categorize transactions, record details like purpose and amount, and access a comprehensive date-wise transaction history. With its user-friendly interface and seamless functionality, Money Care empowers users to maintain full control over their personal finances, providing a clear and organized view of their financial activities. It's the ideal tool for anyone looking to manage their money efficiently and effectively.",
    image: MoneyCare, // Use the image directly
    link: "https://drive.google.com/drive/folders/1RLuWQvhtkYxTYT_5nQnFXPVs9wy9U3Ga?usp=sharing",
    aos: "slide-up",
  },
  {
    id: "slide-up",
    title: "CRM Web Application",
    description:
      "Leadup CRM web application was meticulously designed and developed to meet the specific business needs and requirements of the client, particularly to streamline the loan approval process and ensure efficient customer management. This user-friendly CRM system features a comprehensive dashboard that provides quick insights into loan statuses, staff performance, and branch statistics. A standout feature of Leadup CRM is the integration of WhatsApp messaging, enabling direct and prompt communication with customers. This integration not only boosts the overall efficiency of the system but also significantly enhances the customer experience. The result is a seamless and responsive platform that supports the client's business objectives by simplifying processes and improving customer interactions.",
    image: LeadUp,
    link: "https://leadupcars.com/",
    aos: "slide-up",
  },
  {
    id: "home-budget",
    title: "Web Application",
    description:
      "HomeBudget web application is a robust tool designed for efficient financial planning, particularly for projects like home construction. This app enables users to create and manage multiple budgets, track expenses by project stage, and easily compare actual expenditures against budgeted amounts. With local storage integration, users can securely save their data and access it offline. The intuitive interface and automated calculations simplify budget management, providing users with a comprehensive overview of their financial progress and remaining budget. HomeBudget is an invaluable tool for anyone looking to manage expenses effectively and achieve their financial goals, offering clarity and control over financial planning and execution.",
    image: HomeBudget,
    link: "https://home-budget-web.vercel.app/",
    aos: "slide-up",
  },
];
