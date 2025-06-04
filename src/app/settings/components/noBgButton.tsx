import { ReactNode } from "react";

interface NoBgButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  showArrow?: boolean;
}

export default function NoBgButton({ 
  children, 
  onClick, 
  className = "", 
  disabled = false,
  showArrow = true 
}: NoBgButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2 
        text-purple-500 font-medium text-lg
        bg-transparent border-none 
        hover:text-purple-400 
        disabled:text-purple-300 disabled:cursor-not-allowed
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
      {showArrow && (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-current"
        >
          <path 
            d="M9 18L15 12L9 6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}