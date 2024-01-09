import { Contact } from "./contact.model";

export interface Customer {
  id: number;
  name: string;
  customerNumber: number;
  city: string;
  street: string;
  contacts: Contact[];
}