import { contactModel } from './contact.model';
import { Injectable } from '@angular/core';
import{ Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class ContactsService {

   

  constructor( private http: Http) { }

 getContacts(){

   return this.http.get('http://localhost:3000/api/contacts');
  
 }

 saveContact(contact: contactModel){
   var headers = new Headers();
   headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/api/saveContact', contact, { headers })
    .map(res => res.json());
 }

 deleteContact(id: Number){
   return this.http.delete('http://localhost:3000/api/deleteContact/'+id)
   .map(res => res.json());
 }


}
