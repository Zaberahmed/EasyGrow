const isUpperCase = new RegExp(/(?=.*[A-Z])/g);
const isLowerCase = new RegExp(/(?=.*[a-z])/g);
const isLong = new RegExp(/(?=.{6,})/g);
const isNumeric = new RegExp(/(?=.*[0-9])/g);
const checkIsWhiteSpaceFromBegAndEnd = new RegExp(/^([^ ][\w\W ]*[^ ])$/);
export const passwordValidate = (currentPassword: string): boolean => {
  if (
    currentPassword.match(isUpperCase) &&
    currentPassword.match(isLowerCase) &&
    currentPassword.match(isLong) &&
    currentPassword.match(isNumeric) &&
    currentPassword.match(checkIsWhiteSpaceFromBegAndEnd)
  ) {
    return true;
  } else {
    return false;
  }
};
