package com.codingwithkaylah.insomniacmac.model;

import java.util.Set;

public class Cart {
	
	String id;
	Set<FoodData> foodCart;
	double subtotal;
	double totalCost;
	
	public Cart(String id, Set<FoodData> foodCart, double subtotal, double totalCost) {
		super();
		this.id = id;
		this.foodCart = foodCart;
		this.subtotal = subtotal;
		this.totalCost = totalCost;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Set<FoodData> getFoodCart() {
		return foodCart;
	}

	public void setFoodCart(Set<FoodData> foodCart) {
		this.foodCart = foodCart;
	}

	public double getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}

	public double getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}
	
	
	
}
