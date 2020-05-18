// weekly challenge updated to add a switch statement  *** need to work on this i dont think it will work with the way i have it written

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...

    let drink1 = {
        drink: "Cappuccino",
        hot: true,
        ingredients: ["espresso", "steamed milk", "foam"]
    }

    let drink2 = {
        drink: "Black Tea",
        hot: true,
        ingredients: ["hot water", "tea bag of your choice"]
    }

    let drink3 = {
        drink: "Orange Juice",
        hot: false,
        ingredients: ["just oranges"]
    }

    let drink4 = {
        drink: "Water",
        hot: false,
        ingredients: ["just water"]
    }

    let drink5 = {
        drink: "Latte",
        hot: true,
        ingredients: ["espresso", "steamed milk"]
    }

    let userName = await askQuestion("Please enter your name: ");
    console.log();
    console.log(`Welcome ${userName}`);
    console.log("Choose a drink below to see its ingredients.");
    console.log();
    while (true) {
        console.log("Select a drink:");
        console.log("[1] Cappuccino");
        console.log("[2] Black Tea");
        console.log("[3] Orange Juice");
        console.log("[4] Water");
        console.log("[5] Latte");
        console.log("[6] EXIT");
        let userInput = await askQuestion("Please select an option:");
        console.log();
        switch (userInput) {
            case "1":             // Cappuccino
                console.log(`You have selected ${drink1.drink}.`)
                let outputIngredients = "The ingredients are ";
                for (let i = 0; i < drink1.ingredients.length; i++) {
                    let drinkChecked = drink1.ingredients[i];
                    outputIngredients += drinkChecked;
                    if (i == drink1.ingredients.length - 2) {   // For the second last element 
                        outputIngredients += " and ";
                    } else if (i == drink1.ingredients.length - 1) {   // For the last element
                        outputIngredients += ".";
                    } else {                            // For all the other elements
                        outputIngredients += ", ";
                    }
                }
                console.log(outputIngredients);
                break;
            case "2":
                console.log(`You have selected ${drink2.drink}.`);
                let outputIngredients = "The ingredients are ";
                for (let i = 0; i < drink2.ingredients.length; i++) {
                    let drinkChecked = drink2.ingredients[i];
                    outputIngredients += drinkChecked;
                    if (i == drink2.ingredients.length - 2) {
                        outputIngredients += " and ";
                    } else if (i == drink2.ingredients.length - 1) {
                        outputIngredients += ".";
                    } else {
                        outputIngredients += ", ";
                    }
                }
                console.log(outputIngredients);
                break;
            case "3":
                console.log(`You have selected ${drink3.drink}.`);
                let outputIngredients = "The ingredients are ";
                for (let i = 0; i < drink3.ingredients.length; i++) {
                    let drinkChecked = drink3.ingredients[i];
                    outputIngredients += drinkChecked;
                    if (i == drink3.ingredients.length - 2) {
                        outputIngredients += " and ";
                    } else if (i == drink3.ingredients.length - 1) {
                        outputIngredients += ".";
                    } else {
                        outputIngredients += ", ";
                    }
                }
                console.log(outputIngredients);
                break;
            case "4":
                console.log(`You have selected ${drink4.drink}.`);
                let outputIngredients = "The ingredients are ";
                for (let i = 0; i < drink4.ingredients.length; i++) {
                    let drinkChecked = drink4.ingredients[i];
                    outputIngredients += drinkChecked;
                    if (i == drink4.ingredients.length - 2) {
                        outputIngredients += " and ";
                    } else if (i == drink4.ingredients.length - 1) {
                        outputIngredients += ".";
                    } else {
                        outputIngredients += ", ";
                    }
                }
                console.log(outputIngredients);
                break;
            case "5":
                console.log(`You have selected ${drink5.drink}.`);
                let outputIngredients = "The ingredients are ";
                for (let i = 0; i < drink5.ingredients.length; i++) {
                    let drinkChecked = drink5.ingredients[i];
                    outputIngredients += drinkChecked;
                    if (i == drink5.ingredients.length - 2) {
                        outputIngredients += " and ";
                    } else if (i == drink5.ingredients.length - 1) {
                        outputIngredients += ".";
                    } else {
                        outputIngredients += ", ";
                    }
                }
                console.log(outputIngredients);
                break;
            case "6":                             // exit
                break;
            default:
                console.log("!! Invalid option. Select an option between 1 and 6 !!");
        }

        console.log();
    }
    console.log(`Thank you, enjoy your drink ${userName}!`);
    console.log();
}
Program().then(() => {
    process.exit(0);
});