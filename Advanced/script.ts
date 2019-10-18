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

methodCreated(){
	return ` <div class="card">
                <img class="card-img-top" src="" alt="">
                <div class="card-body">
                    <h5 class="card-title">${this.model}</h5>
                    <p>Details:</p>
                    <ul class="card-text text-success">
                        <li>${this.year}</li>
                        <li>${this.seats}</li>
                        <li>${this.horsePower}</li>
                        <li>${this.kmLeft}</li>
                        <li>${this.capacity}</li>
                        <li>${this.fuelType}</li>
                        <div class="price"></div>

                    </ul>
                </div>
                <div class="card-footer">
                    <button class="btn-block btn-info btnPrice" data-toggle="modal" data-target="#exampleModal">Show Price</button>
                </div>
            </div>`;

	
}

}



let huracan0 = new Truck("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan1 = new Truck("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan2 = new Motor("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan3 = new Motor("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
let huracan4 = new Vehicles("Lamborgini", 2019, "fuel", "2000", "0");
let huracan5 = new Vehicles("Lamborgini", 2019, "fuel", "2000", "0");


var array: any[] = [huracan0,huracan1,huracan2,huracan3,huracan4,huracan5];
var btn=document.getElementsByClassName("btnPrice");

for( let val of array){
	document.getElementById("result").innerHTML += val.methodCreated();
}
// function showPrice(i){
//   document.getElementsByClassName("price")[i].innerHTML = '<li>'+array[i].price+'</li>';
// }
// for(let i in array){
//   btn[i].addEventListener("click",()=>{showPrice(i)});
// }