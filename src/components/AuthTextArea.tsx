import React, { ChangeEvent, useState } from "react";

interface AuthTextAreaProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const AuthTextArea: React.FC<AuthTextAreaProps> = ({
  id = "auth-text",
  name = "",
  label = "",
  value = "",
  placeholder = "",
  required = false,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`col-span-2 grid gap-2`}>
      <label
        htmlFor={id}
        className={`text-xs tracking-wide ${required ? "font-bold" : ""}`}
      >
        {label}:{" "}
      </label>
      <div className={`relative p-1`}>
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          rows={4}
          onChange={onChange}
          className={`p-3 ${
            required
              ? " shadow-ravenci-primary/50 focus:shadow-ravenci-primary"
              : ""
          } w-full bg-transparent border-b border-white/20 hover:border-white/50 focus:border-ravenci-primary text-[#B24398] font-bold outline-none text-sm transition-all duration-200`}
          {...props}
        />
      </div>
    </div>
  );
};

export default AuthTextArea;
