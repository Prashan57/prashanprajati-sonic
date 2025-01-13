import { scrollToElement } from "./SrollToElement";

interface MyHeaderButtonProps {
  name: string;
  id: string;
}

export const MyHeaderButton: React.FC<MyHeaderButtonProps> = ({ name, id }) => {
  return (
    <button
      className="lg:outline md:outline outline-1 outline-offset-2 sm:p-3 lg:px-8 rounded-full mx-3 md:font-semibold lg:font-semibold"
      onClick={() => scrollToElement(id)}
    >
      {name}
    </button>
  );
};
