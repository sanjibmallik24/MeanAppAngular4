import { contactModel } from './../contact.model';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ ContactsService ]
})
export class ContactsComponent implements OnInit {
  contactArray: contactModel[];
  contact: contactModel;
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe( contacts=>{
      console.log(contacts);
    })
  }

}
