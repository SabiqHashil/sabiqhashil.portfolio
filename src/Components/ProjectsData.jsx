// src/ProjectsData.js
import ordersAndDeliveryImage from "../assets/projects/orders_and_delivery_logo.jpg";
import leadupImage from "../assets/projects/leadup_logo.png";
import homeBudget from "../assets/projects/home_budget_logo.jpg";
import moneyCare from "../assets/projects/sbq_money_care_logo.jpg";

export const ProjectsData = [
  {
    id: "orders-and-delivery",
    title: "Mobile App",
    description:
      "The Orders and Delivery mobile app, developed using Flutter, is designed to streamline operations for a fruit and vegetable supplier. This comprehensive application features a user-friendly dashboard that provides real-time insights into customer data, product inventory, and order statuses. It facilitates seamless order management, allowing shopkeepers to place and track orders with ease. The app’s offline functionality ensures uninterrupted service, while robust customer and product management systems enhance overall usability. This solution reflects a commitment to delivering efficient and intuitive tools tailored to the unique needs of the business.",
    image: ordersAndDeliveryImage, // Use the imported image here
    link: "https://drive.google.com/drive/folders/13HdXG6tRvjUA1XR_RtgEur37-fh0-ZaW?usp=sharing",
  },
  {
    id: "money-care",
    title: "Mobile App",
    description:
      "Money Care is a Flutter-based mobile application designed to streamline personal finance management, making income and expense tracking effortless and intuitive. Developed exclusively for personal use, the APK version serves as a convenient financial companion, offering a tailored experience. Users can easily categorize transactions, record details like purpose and amount, and access a comprehensive date-wise transaction history. With its user-friendly interface and seamless functionality, Money Care empowers users to maintain full control over their personal finances, providing a clear and organized view of their financial activities. It's the ideal tool for anyone looking to manage their money efficiently and effectively.",
    image: moneyCare, // Use the imported image here
    link: "https://drive.google.com/drive/folders/1RLuWQvhtkYxTYT_5nQnFXPVs9wy9U3Ga?usp=sharing",
  },
  {
    id: "lead-up",
    title: "CRM Web Application",
    description:
      "The Leadup CRM web application was meticulously designed to streamline the loan approval process, catering specifically to the client's needs for efficient customer management. This user-friendly CRM system features a comprehensive dashboard that provides quick insights into loan statuses, staff performance, and branch statistics. A standout feature of Leadup CRM is the integration of WhatsApp messaging, enabling direct and prompt communication with customers. This integration not only boosts the overall efficiency of the system but also significantly enhances the customer experience. The result is a seamless and responsive platform that supports the client's business objectives by simplifying processes and improving customer interactions.",
    image: leadupImage, // Use the imported image here
    link: "https://leadupcars.com/",
  },
  {
    id: "home-budget",
    title: "Web Application",
    description:
      "The HomeBudget web application is a robust tool designed for efficient financial planning, particularly for projects like home construction. This app enables users to create and manage multiple budgets, track expenses by project stage, and easily compare actual expenditures against budgeted amounts. With local storage integration, users can securely save their data and access it offline. The intuitive interface and automated calculations simplify budget management, providing users with a comprehensive overview of their financial progress and remaining budget. HomeBudget is an invaluable tool for anyone looking to manage expenses effectively and achieve their financial goals, offering clarity and control over financial planning and execution.",
    image: homeBudget, // Use the imported image here
    link: "https://home-budget-web.vercel.app/",
  },
];