import { Injectable } from '@angular/core';

import { ICustomer } from '../common/interfaces';

@Injectable()
export class TrackByService {

  customer(index: number, customer: ICustomer) {
    return customer.id;
  }

}
