import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICustomer, IState, IPagedResults, ICustomerResponse } from '../../common/interfaces';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CustomerService {
    // tslint:disable-next-line: no-inferrable-types
    baseUrl: string = 'https://localhost:5001/api/customers';
    // tslint:disable-next-line: no-inferrable-types
    baseStatesUrl: string = 'https://localhost:5001/api/states';

    constructor(private http: HttpClient) {

    }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl)
            .pipe(
                map((customers: ICustomer[]) => {
                    this.calculateCustomersOrderTotal(customers);
                    return customers;
                }),
                catchError(this.handleError)
            );

    }

    getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
        return this.http.get<ICustomer[]>(`${this.baseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(
                map((res) => {
                    // Need to observe response in order to get to this header (see {observe: 'response'} above)
                    const totalRecords = +res.headers.get('x-inlinecount');
                    const customers = res.body as ICustomer[];
                    this.calculateCustomersOrderTotal(customers);
                    return {
                        results: customers,
                        totalRecords
                    };
                }),
                catchError(this.handleError)
            );
    }

    getCustomer(id: string): Observable<ICustomer> {
        return this.http.get<ICustomer>(this.baseUrl + '/' + id)
            .pipe(catchError(this.handleError));
    }

    insertCustomer(customer: ICustomer): Observable<ICustomer> {
        // customer.id = '0';
        return this.http.post<ICustomerResponse>(this.baseUrl, customer)
            .pipe(
                map((data) => {
                    console.log('insertCustomer status: ' + data.status);
                    return data.customer;
                }),
                catchError(this.handleError)
            );
    }

    updateCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.put<ICustomerResponse>(this.baseUrl + '/' + customer.id, customer)
            .pipe(
                map((data) => {
                    console.log('updateCustomer status: ' + data.status);
                    return data.customer;
                }),
                catchError(this.handleError)
            );
    }

    deleteCustomer(id: string): Observable<boolean> {
        return this.http.delete<boolean>(this.baseUrl + '/' + id)
            .pipe(catchError(this.handleError));
    }

    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>(this.baseStatesUrl)
            .pipe(catchError(this.handleError));
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return throwError(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return throwError(error || 'ASP.NET Core server error');
    }

}

