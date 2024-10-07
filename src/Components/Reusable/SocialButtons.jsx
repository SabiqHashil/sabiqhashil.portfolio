import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const SocialButtons = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sabiqhashilkp"
        >
          <li className="icon linkedin">
            <span className="tooltip font-cf">LinkedIn</span>
            <FaLinkedin className="text-2xl" />
          </li>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SabiqHashil"
        >
          <li className="icon github">
            <span className="tooltip font-cf">GitHub</span>
            <FaGithub className="text-2xl" />
          </li>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/sbq_developer"
        >
          <li className="icon instagram">
            <span className="tooltip font-cf">Instagram</span>
            <FaInstagram className="text-2xl" />
          </li>
        </a>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    font-family: "Poppins", sans-serif;
    justify-content: start;
  }

  .wrapper .icon {
    position: relative;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border: 2px solid transparent; /* Add a border to the icons */
    transition: all 0.15s ease-in-out; /* Smooth hover effect */
    color: #fff; /* Set the default text color to white */
  }

  .wrapper .icon:hover {
    color: #d946ef; /* Fuchsia color when hovered */
    border-color: #d946ef; /* Fuchsia border color */
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  /* Instagram Icon */
  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }

  /* GitHub Icon */
  .wrapper .github:hover,
  .wrapper .github:hover .tooltip,
  .wrapper .github:hover .tooltip::before {
    background: #333;
    color: #fff;
  }

  /* LinkedIn Icon */
  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background: #0077b5;
    color: #fff;
  }
`;

export default SocialButtons;
