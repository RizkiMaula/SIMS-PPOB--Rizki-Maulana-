import Button from '../elements/Button';
import InputText from '../elements/InputText';
import Navbar from './navbar';
import ProfileFragment from './ProfileFragment';

const TopupFragment = () => {
  return (
    <>
      <Navbar />
      <div className="px-[3rem] md:px-[10rem] flex flex-col py-2 gap-10">
        <ProfileFragment />
        <div>
          <h1 className="">Silahkan Masukan </h1>
          <h1 className="text-2xl font-bold">Nominal Top Up </h1>
        </div>
        <div className="flex gap-2 ">
          <div className="flex flex-col gap-2 w-[60%]">
            <InputText
              typeInput={'text'}
              text={'Masukan Nominal Top Up'}
            />
            <Button
              width="w-full"
              marginTop="0"
              text={'Top Up'}
            />
          </div>
          <div className="grid grid-cols-3 gap-2 w-[40%]">
            <Button
              width="w-full"
              padding="0"
              marginTop="0"
              text={'Rp10.000'}
              color={'bg-white'}
              border={'border-gray-500'}
              txtColor="text-gray-500"
            />
            <Button
              width="w-full"
              padding="0"
              marginTop="0"
              text={'Rp20.000'}
              color={'bg-white'}
              border={'border-gray-500'}
              txtColor="text-gray-500"
            />
            <Button
              width="w-full"
              padding="0"
              marginTop="0"
              text={'Rp50.000'}
              color={'bg-white'}
              border={'border-gray-500'}
              txtColor="text-gray-500"
            />
            <Button
              width="w-full"
              padding="0"
              marginTop="0"
              text={'Rp100.000'}
              color={'bg-white'}
              border={'border-gray-500'}
              txtColor="text-gray-500"
            />
            <Button
              width="w-full"
              padding="0"
              marginTop="0"
              text={'Rp250.000'}
              color={'bg-white'}
              border={'border-gray-500'}
              txtColor="text-gray-500"
            />
            <Button
              width="w-full"
              padding="0"
              marginTop="0"
              text={'Rp500.000'}
              color={'bg-white'}
              border={'border-gray-500'}
              txtColor="text-gray-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopupFragment;
