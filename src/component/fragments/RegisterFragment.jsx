import InputText from '../elements/InputText';
import AuthLayout from '../fragments/AuthLayout';

const RegisterFragment = () => {
  return (
    <AuthLayout
      title="Lengkapi data untuk membuat akun"
      text="sudah punya akun? login"
      direct="/login"
      action="Registrasi"
      input={
        <>
          <InputText
            typeInput={'email'}
            text={'masukan email anda'}
          />
          <InputText
            typeInput={'text'}
            text={'nama depan'}
          />
          <InputText
            typeInput={'text'}
            text={'nama belakang'}
          />
          <InputText
            typeInput={'password'}
            text={'buat password'}
          />
          <InputText
            typeInput={'password'}
            text={'konfirmasi password'}
          />
        </>
      }
    />
  );
};

export default RegisterFragment;
