// ./CepService.ts
import FooCepAPI from './FooCepAPI';
import ICepService from './interfaces/CepService.interface';

class CepService {
  private readonly cepApi: ICepService;
  

  constructor(cepApi: ICepService) {

    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;

