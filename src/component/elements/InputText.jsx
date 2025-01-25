// eslint-disable-next-line react/prop-types
const InputText = ({ text, typeInput, event }) => {
  return (
    <input
      type={typeInput}
      placeholder={text}
      className="p-2 border-2 border-gray-300 rounded-md"
      required
      onChange={event}
    />
  );
};

export default InputText;
