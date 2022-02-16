import { Data } from './DataModel';
import { Support } from './SupportModel';

export class ListUsers{

    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Data[];
    support: Support;

    constructor () {
        this.page =0;
        this.per_page= 0;
        this.total=0;
        this.total_pages=0;
        this.data = [] as Data[];
        this.support = new Support();
    }
}