import Navbar from './navbar';
import ProfileFragment from './ProfileFragment';
import HistoryBox from '../elements/HistoryBox';
import useGet from '../../hooks/useGet';

const TransactionFragment = () => {
  const { data, loading, error } = useGet('transaction/history');
  const { data: dataAmout } = useGet('balance');

  console.log(dataAmout?.data?.balance);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const gmtOffset = -date.getTimezoneOffset() / 60;
    let timeZoneLabel = '';

    const formattedDate = date.toLocaleString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    if (gmtOffset === 7) {
      timeZoneLabel = 'WIB';
    } else if (gmtOffset === 8) {
      timeZoneLabel = 'WITA';
    } else if (gmtOffset === 9) {
      timeZoneLabel = 'WIT';
    }

    return `${formattedDate.replace('pukul', '')} ${timeZoneLabel}`;
  };

  return (
    <>
      <Navbar />
      <div className="px-[3rem] md:px-[10rem] flex flex-col py-2">
        <ProfileFragment
          left="left-[45.4rem]"
          top="top-[7.1rem]"
          textSize="text-xl"
          amount={`Rp. ${dataAmout?.data?.balance}`}
        />
        <div className="flex flex-col mt-6">
          <h1 className="pb-5 text-xl font-bold">Semua Transaksi</h1>
          <div className="flex flex-col gap-2">
            {loading && <div>Loading...</div>}
            {error && <div>Error: Tidak dapat memuat transaksi</div>}
            {(!data?.data?.records || data?.data?.records?.length === 0) && <div>Tidak ada transaksi</div>}
            {data?.data?.records &&
              data?.data?.records?.map((item, index) => (
                <HistoryBox
                  key={index}
                  transaction={item.description}
                  color={item.transaction_type === 'TOPUP' ? 'text-green-400' : 'text-red-400'}
                  amount={item.total_amount}
                  date={formatDate(item.created_on)}
                />
              ))}
            {data?.data?.records && data?.data?.records?.length > 0 && <button className="text-red-400">Show More</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionFragment;
