type ButtonProps = {
  onClick: () => void;
  text: string;
};

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button">
      {text}
    </button>
  );
};
