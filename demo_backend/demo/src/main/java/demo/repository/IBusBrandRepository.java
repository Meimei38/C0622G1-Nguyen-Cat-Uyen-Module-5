package demo.repository;

import demo.model.BusBrand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBusBrandRepository extends JpaRepository<BusBrand, Integer> {
}
