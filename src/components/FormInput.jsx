/* eslint-disable react/prop-types */
const FormInput = ({ label, name, type, size }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        name={name}
        // defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        placeholder={label}
      />
    </fieldset>
  );
};

export default FormInput;
