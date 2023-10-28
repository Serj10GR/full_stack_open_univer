import { FormEvent } from "react";
import { Input } from "./Input";

type PersonFormProps = {
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onAddPerson: (event: FormEvent) => void;
  nameValue: string;
  phoneValue: string;
};

export const PersonForm = ({
  onNameChange,
  onAddPerson,
  onPhoneChange,
  nameValue,
  phoneValue,
}: PersonFormProps) => {
  return (
    <form onSubmit={onAddPerson}>
      <Input
        value={nameValue}
        required
        label="name"
        onChange={(e) => onNameChange(e.target.value)}
      />
      <Input
        value={phoneValue}
        required
        label="phone"
        onChange={(e) => onPhoneChange(e.target.value)}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
