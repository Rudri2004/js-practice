   let fruits = ["Apple", "Banana", "Mango", "Orange"];

        console.log("Original Array");
    
        console.log(fruits );
        console.log("Number of fruits: " + fruits.length );



         fruits.push("Grapes");

        console.log("After push()");
        console.log(fruits );

        let removedFruit = fruits.pop();

        console.log("After pop()");
        console.log("Removed: " + removedFruit );
        console.log(fruits );

         fruits.unshift("Pineapple");

        console.log("After unshift()");
        console.log(fruits );
        
        
              let prices = [100, 200, 300, 400];

            let newPrices = prices.map(function(price) {
                return price + 50;
            });

            console.log("map()");
            console.log("Original prices: " + prices );
            console.log("New prices: " + newPrices );

        let firstFruit = fruits.shift();

       console.log("After shift()");
       console.log("Removed: " + firstFruit );
       console.log(fruits);

        console.log("for Loop");

            for (let i = 0; i < fruits.length; i++) {
                console.log(fruits[i] );
            }
         console.log("for...of Loop");

            for (let fruit of fruits) {
                console.log(fruit );
            }

        console.log("forEach()");

            fruits.forEach(function(fruit) {
                console.log(fruit );
            });

                let foundPrice = prices.find(function(price) {
                return price > 250;
            });

               console.log("find()");
             console.log("First price greater than 250: " + foundPrice );

             let hasExpensiveItem = prices.some(function(price) {
                return price > 350;
            });

           console.log("some()");
           console.log("Is there a price greater than 350? " + hasExpensiveItem );


            let allAbove50 = prices.every(function(price) {
            return price > 500;
            });     

             console.log("every()");
             console.log("Are all prices greater than 500? " + allAbove50 );
