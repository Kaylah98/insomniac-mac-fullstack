package com.codingwithkaylah.insomniacmac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.codingwithkaylah.insomniacmac.model.CustomerRequest;
import com.codingwithkaylah.insomniacmac.model.OrderResponse;
import com.codingwithkaylah.insomniacmac.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

	@Autowired
	CustomerService customerService;
	
	// submits order and returns time of submission
	@PostMapping("/submit-order")
	public OrderResponse receiveOrder(@RequestBody CustomerRequest customerRequest){
		
		return this.customerService.submitOrder(customerRequest);
	}
	
	
}
