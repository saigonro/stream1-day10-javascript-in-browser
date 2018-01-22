let Hero = function(firstName, secondName, title, homeCity) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.title = title;
    this.homeCity = homeCity;
    this.wearingSuit = false;
    this.toogleSuit = function() {
        if (this.wearingSuit) {
            this.wearingSuit = false;
            console.log("Removing my suit");
        }
        else {
            this.wearingSuit = true;
            console.log("Suitting up");
        }
    };
};

Hero.prototype.whoAmI = function() {
    return "I am " + this.title;
};

let superman = new Hero ("Clark", "Kent", "Superman", "Metropolis");
console.log(superman.whoAmI());
// console.log(superman);

Hero.prototype.weakness = "";
superman.weakness = "weakness one";
// console.log(superman.weakness);