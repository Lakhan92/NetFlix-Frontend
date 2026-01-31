
export const checkValidate = (email, password, name) => {
 
  if (name !== null && name !== undefined) {
    const isNameValid = /^[A-ZÀ-ÿ][-,a-z. ']+[ ]+[A-ZÀ-ÿ][-,a-z. ']+$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  const isEmailValid = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPassWordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailValid) return 'Email is not valid';
  if(!isPassWordValid) return 'Password is not valid';

  return null;
}

