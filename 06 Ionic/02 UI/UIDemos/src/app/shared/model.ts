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

export class GeoPlace {
  lable: string;
  lat: number;
  lng: number;
}

export interface Person {
  age: number;
  name: string;
  wealth: string;
  lastname?: string;
  gender: string;
  married?: boolean;
  imgUrl?: string;
  email?: string;
  dob?: Date;
}
