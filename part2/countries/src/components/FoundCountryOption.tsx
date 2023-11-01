type FoundCountryOptionProps = {
  name: string;
  onShowClick: () => void;
};

export const FoundCountryOption = ({
  name,
  onShowClick,
}: FoundCountryOptionProps) => {
  return (
    <div
      style={{
        margin: "15px 0",
      }}
    >
      {name}
      <button
        onClick={onShowClick}
        style={{
          marginLeft: "10px",
        }}
        type="button"
      >
        show
      </button>
    </div>
  );
};
