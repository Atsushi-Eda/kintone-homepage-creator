export const getUniqueString = () =>
  new Date().getTime().toString() +
  Math.floor(Math.random() * 10000).toString();

export const deepCopy = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
