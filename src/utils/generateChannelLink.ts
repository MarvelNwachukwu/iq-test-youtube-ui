export const generateChannelLink = (channelName: string) => {
  return `channel/${channelName.toLowerCase().replace(/\s+/g, '-')}`;
};
