import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../service/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BusBrand} from "../../model/bus-brand";
import {Ticket} from "../../model/ticket";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  constructor(private ticketService: TicketService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  page: number = 1;
  count: number = 3;
  busBrandList: BusBrand[];
  ticketList: Ticket[];
  destinationSearch: string = '';
  departureSearch: string = '';
  ticketBookDestination: string = '';
  ticketBookDeparture: string = '';
  ticketBookDate: string = '';
  ticketBookTime: string = '';
  ticketBookId: number | undefined;
  ticketEdit: Ticket;
  startDateSearch: string = '';
  endDateSearch: string = '';


  ngOnInit(): void {
    this.ticketService.findAllBusBrand().subscribe(data => {
      this.busBrandList = data;
    }, err => {
      console.log(err);
    }, () => {
      console.log('ok')
    })

    this.ticketService.findAllTicketSearch(this.destinationSearch, this.departureSearch).subscribe(data => {
      this.ticketList = data.filter(value => {
        if (this.startDateSearch !== '' && this.endDateSearch !== '') {
          const departureDate = new Date(value.date);
          const searchStartDate = new Date(this.startDateSearch);
          const searchEndDate = new Date(this.endDateSearch);
          if (departureDate >= searchStartDate && departureDate <= searchEndDate) {
            return value;
          }
        } else {
          return data;
        }

      })


    }, err => {
      console.log(err);
    }, () => {
      console.log('ok')
    })

  }

  search() {
    this.ngOnInit();
  }

  infoBooking(destination: string, departure: string, date: string, time: string, id: number) {
    this.ticketBookDestination = destination;
    this.ticketBookDeparture = departure;
    this.ticketBookDate = date;
    this.ticketBookTime = time;
    this.ticketBookId = id;
    console.log(this.ticketBookDestination);
    console.log(this.ticketBookDeparture);
    console.log(this.ticketBookDate);
    console.log(this.ticketBookTime);
    console.log(this.ticketBookId);
  }


  book(id: number) {
    this.ticketService.findById(id).subscribe(data => {
      this.ticketEdit = data;
      if (this.ticketEdit.quantity == 0) {
        Swal.fire({
          title: 'Cannot book this ticket',
          text: 'There is no ticket left!',
        })
      } else {
        this.ticketEdit.quantity = this.ticketEdit.quantity - 1;
        this.ticketService.update(this.ticketEdit, this.ticketEdit.id).subscribe(() => {
          this.router.navigateByUrl('ticket');
          Swal.fire({
            title: 'The ticket is successfully booked!',
            text: 'Your ticket destination is:' + this.ticketEdit.destination
              + '\n departure from: ' + this.ticketEdit.destination + '\n date: ' + this.ticketEdit.date
              + '\n time: ' + this.ticketEdit.time,

          });
          this.ngOnInit();
        })
      }
    }, err => {
      console.log(err);
    }, () => {
      console.log('ok')
    })

  }

  delete(ticketBookId: number) {
    this.page= 1;
    this.ticketService.delete(ticketBookId).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'The ticket is successfully deleted!',
        text: 'The ticket destination is:' + this.ticketBookDestination
          + '\n departure from: ' + this.ticketBookDeparture + '\n date: ' + this.ticketBookDate
          + '\n time: ' + this.ticketBookTime,

      });
      this.ngOnInit();
    }, err => {
      console.log(err);
    }, () => {
      console.log('ok');
    })

  }
}
