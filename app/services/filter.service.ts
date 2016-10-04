import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';


@Injectable()
export class FilterService {
	constructor() { }

  filter(data: string, property: Array<string>, originalList: Array<any>) {
    let filteredList: any[];
    if (data && property && originalList) {
      data = data.toLowerCase();
      let filtered = originalList.filter(item => {
        let match = false;
        for (let prop of property) {
          if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
            match = true;
            break;
          }
        };
        return match;
      });
      filteredList = filtered;
    }
    else {
      filteredList = originalList;
    }
    return filteredList;
  }
}