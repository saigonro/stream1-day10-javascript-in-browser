let humans = {
    people: [
        {
            name: "Name1",
            relationship: "relationship1"
        },
        {
            name: "Name2",
            relationship: "relationship2"
        },
        {
            name: "Name2",
            relationship: "relationship3"
        }],
    listPeople: function() {
        humans.people.forEach(function(peoples) {
            console.log(peoples["name"] + " is " + peoples["relationship"]);
        })
    },
}

console.log(humans.listPeople());