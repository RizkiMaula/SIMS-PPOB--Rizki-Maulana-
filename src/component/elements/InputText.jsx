// eslint-disable-next-line react/prop-types
const InputText = ({ text, value, typeInput, event, deactive = false }) => {
  return (
    <input
      type={typeInput}
      placeholder={text}
      className="p-2 border-2 border-gray-300 rounded-md"
      onChange={event}
      value={value}
      disabled={deactive}
    />
  );
};

export default InputText;
