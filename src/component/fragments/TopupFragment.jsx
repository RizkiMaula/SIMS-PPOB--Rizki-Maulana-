import Button from '../elements/Button';
import InputText from '../elements/InputText';
import Navbar from './Navbar';
import ProfileFragment from './ProfileFragment';
import useGet from '../../hooks/useGet';
import { useState } from 'react';
import usePostLogin from '../../hooks/usePostLogin';
import { useNavigate } from 'react-router';

const TopupFragment = () => {
  const [top_up_amount, setTopupAmount] = useState('');

  const { data } = useGet('balance');
  const { login } = usePostLogin('topup');
  const navigate = useNavigate();

  const handleTopUp = async () => {
    try {
      const topupData = { top_up_amount: top_up_amount };
      console.log(topupData);
      const response = await login(topupData);
      console.log(response);
      if (response.status === 0) {
        alert(response.message);
        setTopupAmount('');
        navigate(0);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data); // API response body
        console.log(error.response.status); // HTTP status code
        console.log(error.response.headers); // Response headers
      } else if (error.request) {
        console.log(error.request); // No response from server
      } else {
        console.log('Error:', error.message); // Other errors
      }
    }
  };

  const handleButtonClick = (amount) => {
    setTopupAmount(amount); // Update input value when a button is clicked
  };

  console.log(data?.data?.balance);
  console.log(top_up_amount);
  return (
    <>
      <Navbar />
      <div className="px-[3rem] md:px-[10rem] flex flex-col py-2 gap-10">
        <ProfileFragment
          top="top-[7.1rem]"
          amount={`Rp. ${data?.data?.balance}`}
          textSize="text-xl"
        />
        <div>
          <h1 className="">Silahkan Masukan </h1>
          <h1 className="text-2xl font-bold">Nominal Top Up </h1>
        </div>
        <div className="flex gap-2 ">
          {/* left side */}
          <div className="flex flex-col gap-2 w-[60%]">
            <InputText
              typeInput={'text'}
              text={'Masukan Nominal Top Up'}
              value={top_up_amount}
              event={(e) => setTopupAmount(e.target.value)}
            />
            <Button
              width="w-full"
              marginTop="0"
              text={'Top Up'}
              event={() => {
                console.log(`topup ${top_up_amount}`);
                handleTopUp();
              }}
            />
          </div>
          {/* right side */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-[40%]">
            {[10000, 20000, 50000, 100000, 250000, 500000].map((amount) => (
              <Button
                key={amount}
                width="w-full"
                padding="0"
                marginTop="0"
                text={`Rp${amount.toLocaleString('id-ID')}`}
                color="bg-white"
                border="border-gray-500"
                txtColor="text-gray-500"
                event={() => handleButtonClick(amount)} // Set input value to button amount
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopupFragment;
