import fs from 'fs/promises';
import IPlant from '../Interfaces/iplant.interface';
import Plants from '../Plants';

export default class PlantModel extends Plants {
  constructor(plantsFile: string, opsFile: string) {
    super();
    this.plantsFile = plantsFile;
  }

  public async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }
}
