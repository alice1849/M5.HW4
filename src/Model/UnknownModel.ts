import { Data } from './DataUnknownModel';
import { Support } from './SupportModel';

export class Unknown{
  data: Data;
  support: Support;

  constructor() {
    this.data = new Data();
    this.support = new Support();
  }
}