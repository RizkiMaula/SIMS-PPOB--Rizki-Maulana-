// eslint-disable-next-line react/prop-types
const TransactionBox = ({ transaction, color = 'text-green-400', amount, date, time }) => {
  return (
    <div className="flex flex-col border-2 border-gray-500 rounded-xl">
      <div className="flex justify-between">
        <div className="flex justify-between w-full px-2 py-3">
          <h1 className={`text-xl font-bold ${color}`}>{amount}</h1>
          <p className="text-sm">{transaction}</p>
        </div>
      </div>
      <div className="flex px-2 justify-between gap-2 text-[0.7rem] text-gray-500 w-[10rem]">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default TransactionBox;
