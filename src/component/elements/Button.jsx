// eslint-disable-next-line react/prop-types
const Button = ({ width = 'w-[50%]', padding = 'p-2', marginTop = 'mt-6', text, color = 'bg-red-500', border = 'border-red-500', txtColor = 'text-white', event }) => {
  return (
    <button
      type="submit"
      className={`${padding} ${marginTop} ${txtColor}  ${color} border-1 ${border} rounded-md ${width} hover:cursor-pointer`}
      onClick={event}
    >
      {text}
    </button>
  );
};

export default Button;
