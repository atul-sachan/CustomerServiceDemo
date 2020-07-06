import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICustomer, IState } from '../../common/interfaces';
import { ValidationService } from '../../common/validation.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  customer: ICustomer = {
    id: '0',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    email: '',
    city: '',
    stateId: '0',
    zip: 0
  };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  // tslint:disable-next-line: no-inferrable-types
  operationText: string = 'Insert';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private customerService: CustomerService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    const id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getCustomer(id);
    }
    this.getStates();
    this.buildForm();
  }

  getCustomer(id: string) {
    this.customerService.getCustomer(id).subscribe(
      (customer: ICustomer) => {
        this.customer = customer;
        this.buildForm();
      },
      (err) => console.log(err));
  }

  buildForm() {
    this.customerForm = this.formBuilder.group({
      firstName: [this.customer.firstName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
      gender: [this.customer.gender, Validators.required],
      email: [this.customer.email, [Validators.required, ValidationService.emailValidator]],
      address: [this.customer.address, Validators.required],
      city: [this.customer.city, Validators.required],
      stateId: [this.customer.stateId, Validators.required]
    });
  }

  getStates() {
    this.customerService.getStates().subscribe((states: IState[]) => this.states = states);
  }

  submit({ value, valid }: { value: ICustomer, valid: boolean }) {

    value.id = this.customer.id;
    value.zip = this.customer.zip || 0;
    // var customer: ICustomer = {
    //   id: this.customer.id,
    // };

    if (value.id !== '0') {

      this.customerService.updateCustomer(value)
        .subscribe((customer: ICustomer) => {
          if (customer) {
            this.router.navigate(['/customers']);
          }
          else {
            this.errorMessage = 'Unable to save customer';
          }
        },
          (err) => console.log(err));

    } else {

      this.customerService.insertCustomer(value)
        .subscribe((customer: ICustomer) => {
          if (customer) {
            this.router.navigate(['/customers']);
          }
          else {
            this.errorMessage = 'Unable to add customer';
          }
        },
          (err) => console.log(err));

    }
  }

  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/customers']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.customerService.deleteCustomer(this.customer.id)
      .subscribe((status: boolean) => {
        if (status) {
          this.router.navigate(['/customers']);
        }
        else {
          this.errorMessage = 'Unable to delete customer';
        }
      },
        (err) => console.log(err));
  }


}
