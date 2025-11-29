package com.codingwithkaylah.insomniacmac.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.codingwithkaylah.insomniacmac.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {

	public Customer findByFirstNameAndLastNameAndPhoneNumber(String firstName, String lastName, String phoneNumber);
}
