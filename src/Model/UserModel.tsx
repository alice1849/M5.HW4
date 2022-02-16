import { Data } from './DataModel';
import { Support } from './SupportModel';

export class User {
  data: Data;
  support: Support;

  constructor() {
    this.data = new Data();
    this.support = new Support();
  }
}