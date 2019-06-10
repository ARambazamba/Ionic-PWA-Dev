export class DemoItem {
  Title: string;
  Url: string;
}

export class Sighthound {
  id: number;
  race: string;
  origin: string;
  imgUrl: string;
  likes: number;
}

export class Marker {
  id?: number;
  imgURL: string;
  lable: string;
  type: number;
  lat: number;
  lng: number;
  hasCoords?: boolean;
  remark: string;
  picture?: any;
}

export class Movie {
  id?: number;
  title: string;
  startTime: Date;
  img: string;
  url: string;
}

export const API_KEY = "ee24144bfd1d4a74d43932dc26690e26";
