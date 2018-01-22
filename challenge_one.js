let Vehicle = function(brand, color, engine) {
    this.brand = brand;
    this.color = color;
    this.engine = engine;
    this.engineStarted = false;
    this.toogleEngine = function() {
        if (this.engineStarted) {
            this.engineStarted = false;
            return "Engine not started";
        }
        else {
            this.engineStarted = true;
            return "Engine is started";
        }
    };
    this.soundHorn = function() {
        return "It's noisy";
    };
};

let honda = new Vehicle ("Honda", "black", "1600cc");

Vehicle.prototype.flashLights = "";
honda.flashLights = "always on";

Vehicle.prototype.messageLights = function() {
    return "My lights are always on!";
}

//JSON gives error here ... try repl
console.log(JSON.stringify(honda));

console.log(honda);
console.log(honda.toogleEngine());
console.log(honda.toogleEngine());
console.log(honda.soundHorn());
console.log(honda.messageLights());