import InputText from '../elements/InputText';
import AuthLayout from '../fragments/AuthLayout';

const LoginFragment = () => {
  return (
    <AuthLayout
      title="Masuk atau buat akun untuk memulai"
      text="belum punya akun?"
      direct="/register"
      input={
        <>
          <InputText
            typeInput={'email'}
            text={'Masukan email'}
          />
          <InputText
            typeInput={'password'}
            text={'Password'}
          />
        </>
      }
    />
  );
};

export default LoginFragment;
