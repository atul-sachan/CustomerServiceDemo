import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerService } from './services/customer.services';
import { CustomerFilterService } from './services/customer-filter.services';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            // { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: '', component: CustomerListComponent },
            { path: ':id', component: CustomerEditComponent },
        ]),
    ],
    exports: [],
    declarations: [CustomerListComponent, CustomerEditComponent],
    providers: [CustomerService, CustomerFilterService],
})
export class CustomersModule {

}
