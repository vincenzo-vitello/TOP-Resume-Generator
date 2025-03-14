const Summary = ({ onChange, name, placeholder, isOptional }) => {
  return (
    <label className="input-label">
      Summary {isOptional ? <span>optional</span> : null}
      <textarea
        className="summery-text-area"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      ></textarea>
    </label>
  );
};

export default Summary;
