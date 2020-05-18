// // Q1 and Q2 class called pet with 3 properties givenName, age and ownerId

// class Pet {
//     constructor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId;
//     }
// }
// class Owner {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }

//     getFullName() {     //Q6 method called getFullName with no arguments
//         return `${this.givenName} ${this.familyName}`;
//     }
// }
// let myPet = new Owner("Aileen", "Gallacher", 12, 123456);
// console.log(myPet.getFullName());

///  copied from Luke --- need to UNDERSTAND HOW THIS IS WORKING!!

// 6 Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner

// class Owner {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }

//     getFullName() {
//         return `${this.givenName} ${this.familyName}`;
//     }
// }
// let owners = [
//     new Owner("Luke", "Parker", 12),
//     new Owner("Dan", "Williams", 13),
//     new Owner("Sally", "Jones", 19)
// ];
// for (let i = 0; i < owners.length; i++) {
//     let theOwner = owners[i];
//     console.log(theOwner.getFullName());
// }

// 7 Create a static method in the class Pet called getOwnerById that takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the full name of the owner with an id matching the ownerId of the pet or else return an error message.

class Owner {                                // another Class called Owner to create objects containing givenName/familyName/id
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }
    getFullName() {
        return `${this.givenName} ${this.familyName}`;
    }
}

class Pet {                                  // class is Pet to create objects which will contain givenName/age/ownerId
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    }
    static getOwnerById(pet, owners) {
        // Find owner that has id matching ownerId of pet
        let foundOwner;
        for (let i = 0; i < owners.length; i++) {
            const owner = owners[i];
            if (owner.id === pet.ownerId) {
                foundOwner = owner;
                break;
            }
        }

        if (!foundOwner) {
            // Owner was not found
            return "ERROR: Owner not found";
        }

        // Call the getFullName method of the owner and return that value
        return foundOwner.getFullName();
    }
}

let owners = [                            // this is setting v
    new Owner("Luke", "Parker", 12),
    new Owner("Dan", "Williams", 13),
    new Owner("Sally", "Jones", 19)
];

let myPet = new Pet("Rex", 4, 19);

console.log(Pet.getOwnerById(myPet, owners));