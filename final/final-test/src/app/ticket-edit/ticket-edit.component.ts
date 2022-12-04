import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../service/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BusBrand} from "../../model/bus-brand";
import {Ticket} from "../../model/ticket";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  constructor(private ticketService: TicketService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ticketForm: FormGroup;
  ticketId: number | undefined;
  busBrandList: BusBrand[] | undefined;
  ticket: Ticket;

  ngOnInit(): void {
    this.ticketService.findAllBusBrand().subscribe(data => {
      this.busBrandList = data;
      console.log(this.busBrandList);

    }, err => {
      console.log(err);
    }, () => {
      console.log('busBrand ok');
    })
    this.ticketId = this.activatedRoute.snapshot.params['id'];
    this.ticketService.getTicketById(this.ticketId).subscribe((data) => {
      this.ticketForm = new FormGroup({
        cost: new FormControl(data.cost, [Validators.required, Validators.min(0)]),
        departure: new FormControl(data.departure, Validators.required),
        destination: new FormControl(data.destination, Validators.required),
        date: new FormControl(data.date, Validators.required),
        time: new FormControl(data.time, Validators.required),
        busBrand: new FormControl(data.busBrand, Validators.required),
        quantity: new FormControl(data.quantity, [Validators.required, Validators.min(0)]),

      })
      console.log(this.ticketForm.value);
    })


  }

  update() {
    this.ticket = this.ticketForm.value;
    this.ticketService.update(this.ticket, this.ticketId).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'New Ticket is successfully added',
        text: 'Your new ticket destination is:' + this.ticket.destination
          + '\n departure from: ' + this.ticket.destination + '\n date: ' + this.ticket.date
          + '\n time: ' + this.ticket.time,
      });
      this.ticketForm.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('/ticket');
    })
  }

  cancel() {
    this.ticketForm.reset();
  }

  compare(item1, item2) {
    return item1 && item2&& item1.id === item2.id;
  }
}
