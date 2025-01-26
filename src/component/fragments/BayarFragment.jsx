import Navbar from './Navbar';
import ProfileFragment from './ProfileFragment';
import listrik from '../../assets/Listrik.png';
import InputText from '../elements/InputText';
import Button from '../elements/Button';
import { useParams } from 'react-router';

const BayarFragment = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="px-[3rem] md:px-[10rem] flex flex-col py-2 gap-10">
        <ProfileFragment />
        <div>
          <h1>PemBayaran</h1>
          <span className="flex items-center gap-2">
            {' '}
            <img
              src={listrik}
              alt=""
              className="w-[2rem] h-[2rem]"
            />{' '}
            Listrik Prabayar
          </span>
        </div>
        <div className="flex flex-col">
          <InputText
            typeInput={'text'}
            text={'Masukan Nominal'}
            className="w-full"
          />
          <Button
            text={'Bayar'}
            width="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default BayarFragment;
