export const getYesterday = (): Date => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  return yesterday;
};

export const getMinDate = (date?: string): Date => {
  if (date) {
    return new Date(date);
  }

  return new Date();
};
