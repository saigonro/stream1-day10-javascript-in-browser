let superman = {

            firstName: "Clark",

            secondName: "Kent",

            title: "Superman",

            isWearingSuit: false,

            powers: [

              {

                name: "flight",

                description: "fly away"

              },

              {

                name: "super strength",

                description: "lift heavy things"

              },

              {

                name: "super speed",

                description: "run faster than a speeding bullet"

              }],

              people: [

                {

                  name: "Lois Lane",

                  relationship: "girlfriend"

                },

                {

                  name: "Lex Luthor",

                  relationship: "arch enemy"

                }

                ],

            listPeople: function() {

              this.people.forEach(function(person) {

                console.log(person["name"] + " is Superman's " + person["relationship"])

              })

            },

            listPowers: function() {

              superman.powers.forEach(function(power) {

                console.log(power["name"] + " means Superman can " + power["description"]);

              })

            },

            suitUp: function() {

                if (hero.isWearingSuit) {

                    return "I'm already wearing my suit!";

                } else {

                    hero.isWearingSuit = true

                    return "Looks like Metropolis is in trouble! Better suit up!";

                }

            },

        };

superman.listPeople();



// let batman = {};

// for(let key in superman) {

//   batman[key] = superman[key];

// }

// let batman = superman;

// batman.firstName = "Bruce";

// batman.secondName = "Wayne";

// batman.title = "Batman";

// console.log(batman);

// console.log(superman);