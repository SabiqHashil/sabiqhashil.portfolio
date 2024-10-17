import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = "+917559873623";
    const message = "Hello, I have a query.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={redirectToWhatsApp}
      className="bg-[#25D366] text-white lg:p-4 p-3 rounded-full hover:bg-green-800 fixed border-2 border-fuchsia-500 img_glow lg:bottom-10 bottom-8 lg:right-10 right-8 z-50 transition duration-300 ease-in-out"
      style={{
        animation: "bounce 1.5s infinite",
      }}
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
