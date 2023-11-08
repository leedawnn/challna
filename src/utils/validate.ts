export const validateCheckHeader = (pathname: string): boolean => {
  const isDetails = /\/details/;
  const isEvent = /\/event/;

  return isDetails.test(pathname) || isEvent.test(pathname);
};
