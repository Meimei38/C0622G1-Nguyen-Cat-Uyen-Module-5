import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BusBrand} from 'src/model/bus-brand';
import {Ticket} from "../../model/ticket";
import {TicketService} from "../../service/ticket.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {
  ticketForm: FormGroup;
  busBrandList: BusBrand[];
  newTicket: Ticket;

  constructor(private ticketService: TicketService,
              private formBuilder: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.ticketService.findAllBusBrand().subscribe(data => {
      this.busBrandList = data;
      console.log(this.busBrandList);

    }, err => {
      console.log(err);
    }, () => {
      console.log('busBrand ok');
    })

    this.ticketForm = this.formBuilder.group({
      cost: new FormControl(0, [Validators.required, Validators.min(0)]),
      departure: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      busBrand: new FormControl('', Validators.required),
      quantity: new FormControl(0, [Validators.required,Validators.min(0)]),

    })
  }

  submit() {
    this.newTicket = this.ticketForm.value;
    this.ticketService.createNewTicket(this.newTicket).subscribe(() => {
      this.ticketForm.reset();
    }, error => {
      console.log(error);
    }, () => {
      Swal.fire({
        title: 'New Ticket is successfully added',
        text: 'Your new ticket destination is:' + this.newTicket.destination
          + '\n departure from: ' + this.newTicket.destination + '\n date: ' + this.newTicket.date
          + '\n time: ' + this.newTicket.time,
      });
      this.route.navigateByUrl('ticket');
    })
  }

  cancel() {
    this.ticketForm.reset();
  }
}
