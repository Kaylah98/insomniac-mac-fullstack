package com.codingwithkaylah.insomniacmac.model;

import java.time.LocalDateTime;

public class OrderResponse {

		private String firstName;
		private String lastName;
		private LocalDateTime timeOfOrder;
		private String message;
		
		
		public OrderResponse(String firstName, String lastName, LocalDateTime timeOfOrder, String message) {
			super();
			this.firstName = firstName;
			this.lastName = lastName;
			this.timeOfOrder = timeOfOrder;
			this.message = message;
		}


		public String getFirstName() {
			return firstName;
		}


		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}


		public String getLastName() {
			return lastName;
		}


		public void setLastName(String lastName) {
			this.lastName = lastName;
		}


		public LocalDateTime getTimeOfOrder() {
			return timeOfOrder;
		}


		public void setTimeOfOrder(LocalDateTime timeOfOrder) {
			this.timeOfOrder = timeOfOrder;
		}


		public String getMessage() {
			return message;
		}


		public void setMessage(String message) {
			this.message = message;
		}
		
		
}
