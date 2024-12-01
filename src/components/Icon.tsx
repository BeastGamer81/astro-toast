// src/components/Icon.tsx
interface IconProps {
    name: "info" | "error" | "success" | "warning";
  }
  
  const Icon = ({ name }: IconProps) => {
    let iconPath;
    if (name === "info") {
      iconPath = <path d="M12 16v-4" />;
    } else if (name === "error") {
      iconPath = <path d="m15 9-6 6" />;
    } else if (name === "success") {
      iconPath = <path d="m9 12 2 2 4-4" />;
    } else if (name === "warning") {
      iconPath = <path d="M12 9v4" />;
    }
  
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPath}
        <circle cx="12" cy="12" r="10" />
        {name !== "success" && <path d="M12 17h.01" />}
      </svg>
    );
  };
  
  export default Icon;
  
