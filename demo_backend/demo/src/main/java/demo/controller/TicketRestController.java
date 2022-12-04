package demo.controller;

import demo.dto.TicketDto;
import demo.model.Ticket;
import demo.service.ITicketService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/tickets")
public class TicketRestController {

    @Autowired
    private ITicketService ticketService;

    @GetMapping("/list")
    public ResponseEntity<List<Ticket>> findAll(@RequestParam(value = "departure", defaultValue = "") String departure,
                                                         @RequestParam(value = "destination", defaultValue = "") String destination) {
        List<Ticket> ticketList = ticketService.findAndSearch(departure, destination);
        return new ResponseEntity<>(ticketList, HttpStatus.OK);
    }


    @GetMapping("/search")
    public ResponseEntity<List<Ticket>> findAllAndSearch(@RequestParam(required = false, defaultValue = "") String departure,
                                               @RequestParam(required = false, defaultValue = "") String destination,
                                               @RequestParam(required = false, defaultValue = "") String start,
                                               @RequestParam(required = false, defaultValue = "") String end) {
        List<Ticket> ticketList = ticketService.search(departure, destination, start, end);
        return new ResponseEntity<>(ticketList, HttpStatus.OK);
    }



    @GetMapping("/{id}")
    public ResponseEntity<Ticket> findById(@PathVariable() int id) {
        Optional<Ticket> ticketOptional = ticketService.findById(id);
        if(!ticketOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ticketOptional.get(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketDto> updateTicket(@PathVariable int id, @RequestBody TicketDto ticketDTO) {
        Optional<Ticket> ticketOptional = ticketService.findById(id);
        if(ticketOptional.isPresent()) {
            Ticket ticket = new Ticket();
            BeanUtils.copyProperties(ticketDTO, ticket);
            ticketService.save(ticket);
            return new ResponseEntity<>(ticketDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("")
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        ticketService.save(ticket);
        return new ResponseEntity<>(ticket, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable int id) {
        Optional<Ticket> ticketOptional = ticketService.findById(id);
        if(ticketOptional.isPresent()) {
            Ticket ticket = ticketOptional.get();
            ticket.setStatus(false);
            ticketService.save(ticket);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
