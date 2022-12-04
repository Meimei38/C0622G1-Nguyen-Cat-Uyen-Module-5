package demo.service;

import demo.model.Ticket;
import demo.repository.ITicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService implements ITicketService{
    @Autowired
    ITicketRepository ticketRepository;
    @Override
    public List<Ticket> search(String departure, String destination, String date, String end) {
        return ticketRepository.search(departure, destination,date, end);
    }

    @Override
    public Optional<Ticket> findById(int id) {
        return ticketRepository.findTicketById(id);
    }

    @Override
    public void save(Ticket ticket) {
        ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> findAndSearch(String departure, String destination) {
        return ticketRepository.findAndSearch(departure, destination);
    }
}
