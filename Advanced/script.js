var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(model, year, fuelType, horsePower, kmLeft) {
        this.model = "";
        this.year = "";
        this.fuelType = "";
        this.horsePower = "";
        this.kmLeft = "";
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.horsePower = horsePower;
        this.kmLeft = kmLeft;
    }
    return Vehicles;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(model, year, fuelType, horsePower, kmLeft, country, weight) {
        var _this = _super.call(this, model, year, fuelType, horsePower, kmLeft) || this;
        _this.country = country;
        _this.weight = weight;
        return _this;
    }
    return Motor;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(model, year, fuelType, horsePower, kmLeft, capacity, seats) {
        var _this = _super.call(this, model, year, fuelType, horsePower, kmLeft) || this;
        _this.capacity = capacity;
        _this.seats = seats;
        return _this;
    }
    Truck.prototype.methodCreated = function () {
        return " <div class=\"card\">\n                <img class=\"card-img-top\" src=\"\" alt=\"\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.model + "</h5>\n                    <p>Details:</p>\n                    <ul class=\"card-text text-success\">\n                        <li>" + this.year + "</li>\n                        <li>" + this.seats + "</li>\n                        <li>" + this.horsePower + "</li>\n                        <li>" + this.kmLeft + "</li>\n                        <li>" + this.capacity + "</li>\n                        <li>" + this.fuelType + "</li>\n                        <div class=\"price\"></div>\n\n                    </ul>\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn-block btn-info btnPrice\" data-toggle=\"modal\" data-target=\"#exampleModal\">Show Price</button>\n                </div>\n            </div>";
    };
    return Truck;
}(Vehicles));
var huracan0 = new Truck("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
var huracan1 = new Truck("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
var huracan2 = new Motor("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
var huracan3 = new Motor("Lamborgini", 2019, "fuel", "2000", "0", "2tons", "2");
var huracan4 = new Vehicles("Lamborgini", 2019, "fuel", "2000", "0");
var huracan5 = new Vehicles("Lamborgini", 2019, "fuel", "2000", "0");
var array = [huracan0, huracan1, huracan2, huracan3, huracan4, huracan5];
var btn = document.getElementsByClassName("btnPrice");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    document.getElementById("result").innerHTML += val.methodCreated();
}
// function showPrice(i){
//   document.getElementsByClassName("price")[i].innerHTML = '<li>'+array[i].price+'</li>';
// }
// for(let i in array){
//   btn[i].addEventListener("click",()=>{showPrice(i)});
// }
