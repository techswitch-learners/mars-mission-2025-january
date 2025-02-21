export const fetchData = (url: string) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};
