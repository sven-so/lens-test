export interface PicInfo {
    url: string;
  }
export interface Picture {
    original: PicInfo;
  }
export interface Statistics {
    totalFollowers: string;
  }
export interface Profile {
    picture: Picture;
    id: string;
    avatarUrl: string;
    handle: string;
    name: string;
    bio: string;
    stats: Statistics;
  }
