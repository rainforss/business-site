import { useField } from "formik";
import * as React from "react";

interface ITextInputProps {
  type: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  label: string;
  isRequired?: boolean;
  autoComplete?: string;
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({
  type,
  id,
  name,
  label,
  autoComplete,
  isRequired,
}) => {
  const [field] = useField(name);
  return (
    <div>
      <input
        {...field}
        id={id}
        name={name}
        type={type}
        placeholder={label}
        required={isRequired}
        autoComplete={autoComplete || "off"}
        className="h-14 w-80 p-4 text-lg border"
      />
    </div>
  );
};

export default TextInput;
