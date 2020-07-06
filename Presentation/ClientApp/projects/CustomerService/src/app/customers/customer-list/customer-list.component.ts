import { Component, OnInit } from '@angular/core';
import { ICustomer, IPagedResults } from '../../common/interfaces';
import { Sorter } from '../../core/sorter';
import { TrackByService } from '../../core/trackby.service';
import { CustomerService } from '../services/customer.services';
import { CustomerFilterService } from '../services/customer-filter.services';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];

  // tslint:disable-next-line: no-inferrable-types
  totalRecords: number = 0;
  // tslint:disable-next-line: no-inferrable-types
  pageSize: number = 10;
  constructor(
    private sorter: Sorter,
    public trackby: TrackByService,
    private customerService: CustomerService,
    private customerFilter: CustomerFilterService
  ) { }

  ngOnInit(): void {
    this.getCustomersPage(1);
  }

  sort(prop: string) {
    this.sorter.sort(this.customers, prop);
  }

  filterChanged(filterText: string) {
    if (filterText && this.customers) {
      let props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
      this.filteredCustomers = this.customerFilter.filter(this.customers, props, filterText);
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }

  pageChanged(page: number) {
    this.getCustomersPage(page);
  }

  getCustomersPage(page: number) {
    this.customerService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe((response: IPagedResults<ICustomer[]>) => {
        this.customers = this.filteredCustomers = response.results;
        this.totalRecords = response.totalRecords;
      },
        (err: any) => console.log(err),
        () => console.log('getCustomersPage() retrieved customers'));
  }
}
