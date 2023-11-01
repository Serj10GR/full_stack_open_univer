export type Weather = {
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind: {
    speed: number;
  };
};
