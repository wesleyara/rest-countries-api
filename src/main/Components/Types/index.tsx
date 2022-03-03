export interface APIprops {
  name: string;
  alpha3Code: string;
  population: number;
  region: string;
  languages: PropsLanguages[];
  flag: string;
  numericCode: string;
  currencies: PropsCurrencies[];
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  capital: string;
  borders: string[];
}

export interface PropsCurrencies {
  code: string;
  name: string;
}

export interface PropsLanguages {
  name: string;
  nativeName: string;
}
