const deepCopy = (obj) => {

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const res = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    const value = obj[key];
    res[key] = deepCopy(value);
  }

  return res;
};
