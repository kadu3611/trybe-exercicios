// ./FooCepAPI.ts
import ICepService from './interfaces/CepService.interface';

class FooCepAPI implements ICepService {
    async getAddressByCEP(cep: string, number: number): Promise<string> {
      return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
    }
  
    async getCepByAddress(address: string, number: number): Promise<string> {
      return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
    }
  }
  
  export default FooCepAPI;