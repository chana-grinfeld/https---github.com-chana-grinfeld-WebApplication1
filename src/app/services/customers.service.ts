import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  api: string = 'https://localhost:7125/api/';

  getCustomersList() { 
    return this.http.get(this.api + "Customers");
  }

  getCustomerDetails(customerId: number) {
    return this.http.get(this.api + "Customers/" + customerId);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.api + "Customers/DeleteCustomer/" + id);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(this.api + "Customers/UpdateCustomer/", customer);
  }

  addCustomer(customer: Customer) {
    return this.http.post(this.api + "Customers/AddCustomer/", customer);
  }

  addContact(customerId: number, contact: Contact) {
    return this.http.post(this.api + "Customers/AddContactToCustomer/", {customerId: customerId, contact: contact});
  }
}