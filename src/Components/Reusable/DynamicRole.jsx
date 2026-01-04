import { useEffect, useState } from "react";

const roles = ["Engineer", "Architect", "Developer", "Designer", "Innovator"];

const roleDescriptions = {
  Engineer: "engineering reliable, high-performance digital systems",
  Architect:
    "architecting scalable, secure, and future-ready software solutions",
  Developer: "building clean, efficient, and scalable applications",
  Designer: "designing intuitive, user-centric digital experiences",
  Innovator: "innovating modern solutions that drive digital transformation",
};

const DynamicRole = ({
  inline = false,
  className = "",
  roleAllow = true, // show role
  descriptionAllow = false, // show description
  defaultRoleText = null, // optional static role
}) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 5000); // change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const currentRoleText = defaultRoleText || roles[currentRole];
  const currentDescriptionText = roleDescriptions[roles[currentRole]];

  // Inline usage
  if (inline) {
    return (
      <>
        {roleAllow && (
          <span className={`text-fuchsia-400 font-medium ${className}`}>
            {currentRoleText}
          </span>
        )}
        {roleAllow && descriptionAllow && <span> - </span>}
        {descriptionAllow && (
          <span className={`text-fuchsia-300 italic ${className}`}>
            {currentDescriptionText}
          </span>
        )}
      </>
    );
  }

  // Block usage
  return (
    <p className={className}>
      {roleAllow && (
        <span className="text-fuchsia-400 font-medium">{currentRoleText}</span>
      )}
      {roleAllow && descriptionAllow && <span> </span>}
      {descriptionAllow && (
        <span className="text-fuchsia-300 italic">
          {currentDescriptionText}
        </span>
      )}
    </p>
  );
};

export default DynamicRole;

// 1. Default: Role Only
{
  /* <DynamicRole inline className="text-fuchsia-500" /> */
}

// 2. Role + Description
{
  /* <DynamicRole inline className="text-fuchsia-400" descriptionAllow={true} /> */
}

// 3. Description Only (hide role)
{
  /* <DynamicRole inline className="text-fuchsia-300" roleAllow={false} descriptionAllow={true} /> */
}

// 4. Custom Default Role Text
{
  /* <DynamicRole inline className="text-fuchsia-500" defaultRoleText="Software Specialist" /> */
}
