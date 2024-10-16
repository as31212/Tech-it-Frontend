interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
}

export const InputBox: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  name,
  type,
}) => {
  return (
    <>
      <input
        className="w-full px-3 py-2 border rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required
        value={value}
      />
    </>
  );
};
