class Person {
    constructor(name, age) {   //Person("Aileen",37) specified arguments below
    this.name = name;
    this.age = age;
    }
    myFavFood;                  // this is outside the constructor
}
let me = new Person("Aileen",37);
let you = new Person();

console.log(me);
console.log(you);

// Static method sample

class Owner {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullNameInstance() {     //Q6 method called getFullName with no arguments
        return `${this.givenName} ${this.familyName}`;
    }

    static getFullNameStatic(owner) {
        return `${owner.givenName} ${owner.familyName}`;
    }
}
let myPet = new Owner("Aileen","Gallacher",37);

console.log(myPet.getFullNameInstance());

console.log(Owner.getFullNameStatic(myPet));