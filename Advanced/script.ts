class Vehicles{

	model="";
	year="";
	fuelType="";
	horsePower="";
	kmLeft="";
	
	
	constructor(model,year,fuelType,horsePower,kmLeft){
		this.model=model;
		this.year=year;
		this.fuelType=fuelType;
		this.horsePower=horsePower;
		this.kmLeft=kmLeft;
		
	}



}

class Motor extends Vehicles {
	country;
	weight;
	constructor(model,year,fuelType,horsePower,kmLeft,country,weight){
		super(model,year,fuelType,horsePower,kmLeft);
		this.country = country;
		this.weight = weight;

	}

}

class Truck extends Vehicles {
	capacity;
	seats;
	constructor(model,year,fuelType,horsePower,kmLeft,capacity,seats){
		super(model,year,fuelType,horsePower,kmLeft);
		this.capacity = capacity;
		this.seats = seats;
	}

}

let huracan = new Truck("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan1 = new Truck("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan2 = new Motor("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan3 = new Motor("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan4 = new Vehicles("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan5 = new Vehicles("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");

for (let i = 0; i < length; ++i) {
	// code...
}
