package com.codingwithkaylah.insomniacmac.model;

public class FoodData {

	private String id;
	private String foodPic;
	private String foodName;
	private double foodPrice;
	private String foodDesc;
	private int quantity;
	
	
	public FoodData(String id, String foodPic, String foodName, double foodPrice, String foodDesc, int quantity) {
		super();
		this.id = id;
		this.foodPic = foodPic;
		this.foodName = foodName;
		this.foodPrice = foodPrice;
		this.foodDesc = foodDesc;
		this.quantity = quantity;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getFoodPic() {
		return foodPic;
	}


	public void setFoodPic(String foodPic) {
		this.foodPic = foodPic;
	}


	public String getFoodName() {
		return foodName;
	}


	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}


	public double getFoodPrice() {
		return foodPrice;
	}


	public void setFoodPrice(double foodPrice) {
		this.foodPrice = foodPrice;
	}


	public String getFoodDesc() {
		return foodDesc;
	}


	public void setFoodDesc(String foodDesc) {
		this.foodDesc = foodDesc;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	
}
