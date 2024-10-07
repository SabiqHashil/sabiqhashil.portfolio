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
      className="bg-[#25D366] text-white p-4 rounded-full hover:bg-green-800 fixed border-2 border-fuchsia-500 img_glow bottom-10 right-10 z-50"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
