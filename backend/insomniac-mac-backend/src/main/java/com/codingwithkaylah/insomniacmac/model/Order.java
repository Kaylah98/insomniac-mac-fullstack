package com.codingwithkaylah.insomniacmac.model;

public class Order {

	
	private String id;
	private FoodData[] cart;
	
	public Order(String id, FoodData[] cart) {
		super();
		this.id = id;
		this.cart = cart;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public FoodData[] getCart() {
		return cart;
	}

	public void setCart(FoodData[] cart) {
		this.cart = cart;
	}

	
	
	
}
