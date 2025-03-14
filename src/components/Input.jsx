const Input = ({
  label,
  name,
  type = "text",
  isOptional = false,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <label className="input-label">
        {label} {isOptional ? <span>optional</span> : null}
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

export default Input;
