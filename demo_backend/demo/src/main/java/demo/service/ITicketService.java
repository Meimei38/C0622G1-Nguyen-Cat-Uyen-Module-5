package demo.service;

import demo.model.Ticket;

import java.util.List;
import java.util.Optional;

public interface ITicketService {
    List<Ticket> search(String departure, String destination, String date, String time);

    Optional<Ticket> findById(int id);

    void save(Ticket ticket);
}
