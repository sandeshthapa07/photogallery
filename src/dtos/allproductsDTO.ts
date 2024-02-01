export type PhotoResponse = PhotoList[];

export interface PhotoList {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
