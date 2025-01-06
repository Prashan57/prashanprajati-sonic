interface MyButtonProps {
  name: string;
}

export const MyButton: React.FC<MyButtonProps> = ({ name }) => {
  return (
    <button className="outline outline-1 outline-offset-2 sm:p-3 lg:px-8 rounded-full mx-3 font-semibold">
      {name}
    </button>
  );
};
