export const toNumber = (array) => {
  const numberOfString = array.join("");
  const number = parseInt(numberOfString);
  return number;
};
