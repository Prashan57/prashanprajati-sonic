import { MouseEventHandler } from "react";

interface MyContactButtonProps {
    name: string;
    onClick: MouseEventHandler
  }
  
  export const MyContactButton: React.FC<MyContactButtonProps> = ({ name,onClick }) => {
    return (
      <button className="p-4 outline outline-1 outline-offset-2 sm:p-3 lg:px-8 rounded-full mx-3 font-semibold"
      onClick={onClick}
      >
        {name}
      </button>
    );
  };
  