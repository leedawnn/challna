export const validateCheckDetail = (pathname: string): boolean => {
  const pattern = /\/details/;

  return pattern.test(pathname);
};
