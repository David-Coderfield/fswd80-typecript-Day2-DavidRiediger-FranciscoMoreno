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
    return Truck;
}(Vehicles));
