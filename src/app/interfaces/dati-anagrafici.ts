export interface ResponseData {
  dati: Dati[];
  isSuccess: boolean;
  errorMessage?: any;
}

interface Dati {
  id: number;
  nome: string;
  cognome: string;
  codiceFiscale: string;
  dataDiNascita: string;
}
