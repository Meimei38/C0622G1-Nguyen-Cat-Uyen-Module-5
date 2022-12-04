package demo.controller;

import demo.model.BusBrand;
import demo.service.IBusBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/busBrands")
public class BusBrandRestController {
    @Autowired
    private IBusBrandService busBrandService;

    @GetMapping("")
    public ResponseEntity<List<BusBrand>> findAllBusBrand(){
        List<BusBrand> busBrands = busBrandService.findAll();
        return new ResponseEntity<>(busBrands, HttpStatus.OK);
    }
}
