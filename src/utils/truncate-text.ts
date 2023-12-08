export const truncateText = (text: string): string => {
  const words = text.split(' ');
  return words.slice(0, 50).join(' ') + ' . . .';
};
