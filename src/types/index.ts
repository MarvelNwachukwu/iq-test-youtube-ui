export interface Video {
  id: number;
  thumbnail: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  views: number;
  uploadedAt: Date;
}

export interface Channel {
  id: number;
  name: string;
  avatar: string;
  subscriberCount: number;
  verified: boolean;
}