package demo.service;

import demo.model.BusBrand;
import demo.repository.IBusBrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusBrandService implements IBusBrandService{
    @Autowired
    IBusBrandRepository busBrandRepository;
    @Override
    public List<BusBrand> findAll() {
        return busBrandRepository.findAll();
    }
}
