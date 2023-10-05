type QueryString = [string, string | string[]];

const generateQueryString = ([key, value]: QueryString) => {
  if (Array.isArray(value)) {
    return value.map((v) => `${key}=${encodeURIComponent(v)}`);
  }

  return `${key}=${encodeURIComponent(value)}`;
};

export const fetchQuery = ({ ...rest }) => {
  const params = {
    ...rest,
  };

  const queryString = Object.entries(params)
    .flatMap(([key, value]: any) => {
      if (value === undefined || value === null || value === '') {
        return [];
      }

      return generateQueryString([key, value] as QueryString);
    })
    .filter(Boolean)
    .join('&');

  return queryString;
};
