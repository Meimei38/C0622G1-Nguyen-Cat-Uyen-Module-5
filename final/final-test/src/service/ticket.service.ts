import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../model/ticket";
import {BusBrand} from "../model/bus-brand";


@Injectable({
  providedIn: 'root'
})
export class TicketService {
   URL = 'http://localhost:8080/api/v1/'


  constructor(private http: HttpClient) { }

  findAllTicketSearch(destinationSearch: string, departureSearch: string):Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.URL +'tickets/list?destination=' + destinationSearch + '&departure=' + departureSearch);
  }
  findAllTicket():Observable<Ticket[]>{
     return this.http.get<Ticket[]>(this.URL +'tickets');
  }
  findAllBusBrand():Observable<BusBrand[]>{
     return this.http.get<BusBrand[]>(this.URL +'busBrands');
  }
  createNewTicket(ticket: Ticket):Observable<Ticket>{
     return this.http.post<Ticket>(this.URL +'tickets', ticket);
  }

  findById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.URL +'tickets/'+id);
  }
  update(ticket: Ticket, id: number): Observable<Ticket>{
     return this.http.put<Ticket>(this.URL +'tickets/'+id, ticket)
  }

  getTicketById(id: number): Observable<Ticket>{
     return this.http.get<Ticket>(this.URL +'tickets/'+id);
  }
  delete(id: number): Observable<Ticket>{
     return this.http.delete<Ticket>(this.URL +'tickets/'+id);
  }
}
