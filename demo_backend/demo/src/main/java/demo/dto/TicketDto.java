package demo.dto;

import demo.model.BusBrand;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class TicketDto implements Validator {
    private Integer id;
    @NotBlank(message = "Must be filled")
    private Double cost;
    @NotBlank(message = "Must be filled")
    @Size(min = 5, max = 30, message = "Numbers of character must be in range of [5;30]")
    private String departure;
    @NotBlank(message = "Must be filled")
    @Size(min = 5, max = 30, message = "Numbers of character must be in range of [5;30]")
    private String destination;
    private String date;
    private String time;
    private Integer quantity;
    private BusBrand busBrand;

    public TicketDto() {
    }

    public Integer getId() {
        return id;
    }

    public Double getCost() {
        return cost;
    }

    public String getDeparture() {
        return departure;
    }

    public String getDestination() {
        return destination;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public BusBrand getBusBrand() {
        return busBrand;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        TicketDto ticketDto = (TicketDto) target;
        Double cost = ticketDto.getCost();
        String destination = ticketDto.getDestination();
        String departure = ticketDto.getDeparture();
        String date = ticketDto.getDate();
        String time = ticketDto.getTime();
        Integer quantity = ticketDto.getQuantity();
        String regexDay = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$";
        String regexHours = "^([01]?[0-9]|2[0-3]):[0-5][0-9]$";

        if(cost == null){
            errors.rejectValue("cost","","Must be filled");
        } else if (cost <0 || cost >1000000) {
            errors.rejectValue("cost","","Cost must be in range of [0,1000000]");
        }


        if(date ==null || date.equals("")){
            errors.rejectValue("date","", "Must be filled");
        }else if (!date.matches(regexDay)){
            errors.rejectValue("date","","Date must be in format: yyyy-mm-dd");
        }else {
            LocalDate now = LocalDate.now();
            LocalDate departureDate = LocalDate.parse(date);
            if(departureDate.compareTo(now)<0){
                errors.rejectValue("date","","Departure date must be after today.");
            }
        }

if(time == null){
    errors.rejectValue("time", "", "Must be filled");
}else if(time.trim().equals("")){
    errors.rejectValue("time", "", "Must be filled");
}else {
    LocalDateTime now = LocalDateTime.now();
    String[] timeArr = time.split(":");
    if(now.getHour() > Integer.parseInt(timeArr[0])){
        errors.rejectValue("time", "", "Your chosen time is in the past");
    }else if (now.getMinute() >Integer.parseInt(timeArr[1])){
        errors.rejectValue("time", "","Your chosen time is in the past");
    }
}


if(quantity ==null){
    errors.rejectValue("quantity","","Must be filled");
} else if (quantity<0 || quantity > 1000) {
    errors.rejectValue("quantity","","Quantity must be in range of [0,1000]");
}


    }
}
