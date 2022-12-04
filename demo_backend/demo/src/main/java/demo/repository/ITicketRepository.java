package demo.repository;

import demo.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ITicketRepository extends JpaRepository<Ticket,Integer > {
    @Query(value = "select * " +
            "from ticket t " +
            "where status like true " +
            "  and departure like %:start% " +
            "  and destination like %:end% " +
            "  and DATE(t.date) BETWEEN DATE(:startDay) AND DATE(:endDay)",
            nativeQuery = true)
    List<Ticket> search(@Param("start") String departure,
                        @Param("end") String destination,
                        @Param("startDay") String startDay,
                        @Param("endDay") String endDay);

    @Query(value = "select * \n" +
            "from ticket t \n" +
            "where t.id = :id " +
            "and t.status = true",
            nativeQuery = true)
    Optional<Ticket> findTicketById(@Param("id") int id);
}
