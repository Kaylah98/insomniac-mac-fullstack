package com.codingwithkaylah.insomniacmac.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.codingwithkaylah.insomniacmac.model.Customer;
import com.codingwithkaylah.insomniacmac.model.CustomerRequest;
import com.codingwithkaylah.insomniacmac.model.Order;
import com.codingwithkaylah.insomniacmac.model.OrderResponse;
import com.codingwithkaylah.insomniacmac.repository.CustomerRepository;

@Service
public class CustomerService {

	
	@Autowired
	CustomerRepository customerRepo;
	
	
	public OrderResponse submitOrder(CustomerRequest customerRequest) {
		
		// checks whether customer exists in database
		Customer existingCustomer = customerRepo.findByFirstNameAndLastNameAndPhoneNumber
				(customerRequest.getFirstName(), customerRequest.getLastName(), customerRequest.getPhoneNumber());
		
		// gets the date and time
		LocalDateTime date = LocalDateTime.now();
		
		// if customer does not exist, create a new one
		if (existingCustomer == null) {
			Customer newCustomer = new Customer(customerRequest.getId(), customerRequest.getFirstName(),
					customerRequest.getLastName(), customerRequest.getPhoneNumber(), new ArrayList<Order>());
			
			newCustomer.getOrders().add(customerRequest.getOrder());
			this.customerRepo.save(newCustomer);
			return new OrderResponse(newCustomer.getFirstName(), newCustomer.getLastName(), date, "Success!");
		}
		// if customer exists, add the order to there list of orders
		else {
			existingCustomer.getOrders().add(customerRequest.getOrder());
			this.customerRepo.save(existingCustomer);
			return new OrderResponse(existingCustomer.getFirstName(), existingCustomer.getLastName(), date, "Success!");
		}
		
		
	}
	


}
