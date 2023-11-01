export type Country = {
  area: number;
  capital: Array<string>;
  capitalInfo: {
    latlng: Array<number>;
  };
  languages: { [key: string]: string };
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    alt: string;
  };
};
