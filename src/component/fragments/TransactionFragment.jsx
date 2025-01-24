import Navbar from './navbar';
import ProfileFragment from './ProfileFragment';
import HistoryBox from '../elements/HistoryBox';

const TransactionFragment = () => {
  return (
    <>
      <Navbar />
      <div className="px-[3rem] md:px-[10rem] flex flex-col py-2">
        <ProfileFragment />
        <div className="flex flex-col mt-6">
          <h1 className="pb-5 text-xl font-bold">Semua Transaksi</h1>
          <div className="flex flex-col gap-2">
            <HistoryBox
              transaction="Top Up Saldo"
              color="text-green-400"
              amount="+ Rp.10.000"
              date="17 Agustus 2023"
              time="08:00 WIB"
            />
            <HistoryBox
              transaction="Pulsa Prabayar"
              color="text-red-400"
              amount="- Rp.40.000"
              date="17 Agustus 2023"
              time="12:10 WIB"
            />
            <HistoryBox
              transaction="Listrik Pascabayar"
              color="text-red-400"
              amount="- Rp.10.000"
              date="17 Agustus 2023"
              time="11:10 WIB"
            />
            <HistoryBox
              transaction="Top Up Saldo"
              color="text-green-400"
              amount="+ Rp.50.000"
              date="17 Agustus 2023"
              time="10:10 WIB"
            />
            <HistoryBox
              transaction="Top Up Saldo"
              color="text-green-400"
              amount="+ Rp.50.000"
              date="17 Agustus 2023"
              time="10:10 WIB"
            />
            <button className="text-red-400">Show More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionFragment;
